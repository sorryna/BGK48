using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Authentication;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using api.Models;

namespace BGK48api.Controllers
{
  [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
  [Route("api/[controller]")]
  public class ItemController : Controller
  {
    IMongoCollection<Item> Collection { get; set; }
    IMongoCollection<Borrow> BowCollection { get; set; }
    IMongoCollection<BorrowItem> BowItemCollection { get; set; }
    IMongoCollection<Returnitem> ReCollection { get; set; }
    public ItemController()
    {
      var settings = MongoClientSettings.FromUrl(new MongoUrl("mongodb://noodle:abc123@ds129780.mlab.com:29780/borrowdb"));
      settings.SslSettings = new SslSettings()
      {
        EnabledSslProtocols = SslProtocols.Tls12
      };
      var mongoClient = new MongoClient(settings);
      var database = mongoClient.GetDatabase("borrowdb");
      Collection = database.GetCollection<Item>("Items");
      BowCollection = database.GetCollection<Borrow>("borrow");
    }
    
    //แสดงรายการยืนของ
    [HttpGet("{id}")]
    public IEnumerable<Item> GetMyBorrow(string id)
    {
      //ใช้ id ที่รับมา ดึงข้อมูลจากตาราง borrow มาเข้าobject myBorrow
      var myBorrow = BowCollection.Find(it => it.Id == id).FirstOrDefault();

      //select จะเป็นการวน loop ของ item ที่มีทั้งหมด ในmyBorrow 
      var items = myBorrow.Items.Select(it =>
      {
        //นำข้อมูล id list items ที่อยู่ในobject myBorrow มาดึงข้อมูลตาราง items
        var item = Collection.Find(x => x.Id == it.Id).FirstOrDefault();
        return new Item
        {
          Id = it.Id,
          Name = item.Name
        };
      });
      return items.ToList();
    }

    [HttpGet("[action]/{slot}")]
    public IEnumerable<Item> GetItemslot(string slot)
    {
      return Collection.Find(x => x.Slot == slot).ToList();
    }

    [HttpGet("[action]/{id}")]
    public Item GetItem(string id)
    {
      return Collection.Find(x => x.Id == id).FirstOrDefault();
    }

    [HttpGet("[action]/{id}")]
    public Borrow GetBorrowitemList(string id)
    {
      return BowCollection.Find(x => x.Id == id).FirstOrDefault();
    }

    [HttpGet("[action]/{user}")]
    public IEnumerable<Returnitem> GetItemreturn(string user)
    {
      var myBorrow = BowCollection.Find(it => (it.borrower == user || it.witness == user) && it.borrower != null && it.witness != null).ToList();
     //TODO: Query Items
      var Items = Collection.Find(it => true).ToList();
      IEnumerable<Returnitem> returnitems = new List<Returnitem>();
      
      returnitems = myBorrow.Select(it => {
     
        return new Returnitem {
          Id = Guid.NewGuid().ToString(),
          borrower = it.borrower,
          witness = it.witness,
          Items = it.Items.Select(x => {
            return new Reitem
            {
              Id = x.Id,
              slot = x.slot,
              Name = Items.FirstOrDefault(iditem=>iditem.Id == x.Id).Name,
              Qty = x.BorrowQty
            };
          })
        };

      });
      
      return returnitems.ToList();
    }


    [HttpGet("[action]/{user}/{slot}")]
    public IEnumerable<Returnitem> GetItemReturnbySlot(string user, string slot) {

      var myBorrow = BowCollection.Find(it => (it.borrower == user || it.witness == user) && it.Items.Any(i => i.slot == slot)).ToList();
      //TODO: Query Items
      var Items = Collection.Find(it => true).ToList();
      IEnumerable<Returnitem> returnitems = new List<Returnitem>();

      returnitems = myBorrow.Select(it =>
      {
        return new Returnitem
        {
          Id = it.Id,
          borrower = it.borrower,
          witness = it.witness,
          Items = it.Items.Where(i => i.slot == slot).Select(x =>
          {
            return new Reitem
            {
              Id = x.Id,
              slot = x.slot,
              Name = Items.FirstOrDefault(iditem => iditem.Id == x.Id).Name,
              Qty = x.BorrowQty
            };
          })
        };
      });
      return returnitems;


    }

    [HttpPost("[action]")]
    public void create([FromBody]Item request)
    {
      request.Id = Guid.NewGuid().ToString();
      request.Totalamount = request.Amount;

      Collection.InsertOne(request);
    }

    [HttpPost("[action]/{id}")]
    public void delete(string id)
    {
      Collection.DeleteOne(x => x.Id == id);
    }

    [HttpPost("[action]")]
    public void edit([FromBody]Item request)
    {
      request.Totalamount += request.Totalamount;
      Collection.ReplaceOne(x => x.Id == request.Id, request);
    }

    [HttpPost("[action]")]
    public void updateWitness([FromBody]Borrow request)
    {
      var builderItemamount = Builders<Item>.Update;
      var getBorrow = BowCollection.Find(bId => bId.Id == request.Id).ToList();
      foreach (var borrow in getBorrow)
      {
        foreach (var borrowItem in borrow.Items)
        { // ได้ Id ของ Items มาแล้ว
          var findItem = Collection.Find(idItem => idItem.Id == borrowItem.Id).FirstOrDefault();
          findItem.Amount = findItem.Amount - borrowItem.BorrowQty;
          var updateAmount = builderItemamount.Set(x => x.Amount, findItem.Amount);
          Collection.UpdateOne(x => x.Id == borrowItem.Id, updateAmount);
        }
      }

      var builder = Builders<Borrow>.Update;
      var update = builder
        .Set(x => x.witness, request.witness);
      BowCollection.UpdateOne(x => x.Id == request.Id, update);
      //BowCollection.ReplaceOne(request);
      //BowCollection.ReplaceOne(x => x.Id == request.Id, request);
    }

    [HttpPost("[action]")]
    public Borrow addBorrow([FromBody]Borrow request)
    {
      request.Id = Guid.NewGuid().ToString();
      request.CreateDate = DateTime.UtcNow;
      request.DeleteDate = null;
      BowCollection.InsertOne(request);


      var resulte = BowCollection.Find(id => id.Id == request.Id).FirstOrDefault();

      return resulte;
    }

    [HttpPost("[action]/{id}")]
    public void deleteBorrow(string id)
    {
      BowCollection.DeleteOne(x => x.Id == id);
    }


  }
}
   

