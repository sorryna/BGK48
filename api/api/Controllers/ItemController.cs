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
      ReCollection = database.GetCollection<Returnitem>("Return");
      BowItemCollection = database.GetCollection<BorrowItem>("borrow");
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
      return Collection.Find(x => (x.Slot == slot) && (x.Amount != 0)).ToList();
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
          Id = it.Id,
          borrower = it.borrower,
          witness = it.witness,
          Items = it.Items.Where(i => i.BorrowQty != i.ReturnQty).Select(x => {
            return new Reitem
            {
              Id = x.Id,
              slot = x.slot,
              Name = Items.FirstOrDefault(iditem=>iditem.Id == x.Id).Name,
              BorrowQty = x.BorrowQty,
              ReturnQty = x.ReturnQty

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
              BorrowQty = x.BorrowQty
            };
          })
        };
      });
      return returnitems;


    }

    [HttpGet("[action]/{user}/{id}")]
    public IEnumerable<Returnitem> GetItemsReturnList(string user, string id) {
      var GetReitembyUser = BowCollection.Find(x => (x.witness == user || x.borrower == user) && x.borrower != null && x.witness != null).ToList();
     var items = Collection.Find(it => true).ToList();
      IEnumerable<Returnitem> returnitems = new List<Returnitem>();

      returnitems = GetReitembyUser.Where(x => x.Id == id).Select(it =>
      {
        return new Returnitem
        {
          Id = it.Id,
          borrower = it.borrower,
          witness = it.witness,
          Items = it.Items.Where(i => i.BorrowQty != i.ReturnQty).Select(x =>
          {
            return new Reitem
            {
              Id = x.Id,
              slot = x.slot,
              Name = items.FirstOrDefault(iditem => iditem.Id == x.Id).Name,
              BorrowQty = x.BorrowQty
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
      request.CreateDate = DateTime.UtcNow;

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
      var getItem = Collection.Find(x => x.Id == request.Id).FirstOrDefault();

      if (request.Totalamount > getItem.Totalamount ) {
        var newValueAmount = request.Totalamount - getItem.Totalamount;
        request.Totalamount = request.Totalamount;
        request.Amount = request.Amount + newValueAmount;
      }
      else {
        var newValuseAmount = (getItem.Totalamount - request.Totalamount);
        if (newValuseAmount<0) {
          newValuseAmount = newValuseAmount * -1;
        }
        request.Totalamount = request.Totalamount;
        request.Amount = request.Amount - newValuseAmount;
      }
     
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
          //updateAmount.Set(x => x.Name,"");
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


    [HttpPost("[action]")]
    public void ReturnItemupdate([FromBody]Returnitem redata) {
      var findReitem = ReCollection.Find(r=>r.Id == redata.Id).FirstOrDefault();
      var itemBow = BowCollection.Find(x => x.Id == findReitem.bowId).ToList();

      var builder = Builders<Borrow>.Update;
      var builderRe = Builders<Returnitem>.Update;
      var updateRe = builderRe
        .Set(x => x.returnner, redata.returnner);
      ReCollection.UpdateOne(x => x.Id == findReitem.Id, updateRe);

      var builderBowItem = Builders<BorrowItem>.Update;
      

      foreach (var BowItem in itemBow.Where(x => x.DeleteDate == null)) {
        var updatedItems = BowItem.Items;
        foreach (var item in BowItem.Items)
        {


          var itemRe = findReitem.Items.FirstOrDefault(ir => ir.Id == item.Id);
          var updateitem = updatedItems.FirstOrDefault(x => x.Id == itemRe.Id);
          updateitem.ReturnQty = itemRe.ReturnQty;

          var builderItem = Builders<Item>.Update;
          var getItemUpdate = Collection.Find(x => x.Id == item.Id).FirstOrDefault();
          getItemUpdate.Amount = getItemUpdate.Amount + item.ReturnQty;
          var updateItemAmout = builderItem.Set(x => x.Amount, getItemUpdate.Amount);
          Collection.UpdateOne(x => x.Id == item.Id, updateItemAmout);



        }
        var brrowupdate = builder.Set(x => x.Items, updatedItems);
        if (!updatedItems.Any(x => x.ReturnQty != x.BorrowQty))
        {
          var a = builder.Set(x => x.DeleteDate, DateTime.UtcNow);
          BowCollection.UpdateOne(x => x.Id == BowItem.Id, a);
        }
        BowCollection.UpdateOne(x => x.Id == BowItem.Id, brrowupdate);
      }
    }

    [HttpPost("[action]")]
    public Returnitem addRetrunItems([FromBody]Returnitem data) {
      data.Id = Guid.NewGuid().ToString();
      data.bowId = data.bowId;
      data.CreateDate = DateTime.UtcNow;
      data.DeleteDate = null;
      ReCollection.InsertOne(data);
   

      return ReCollection.Find(id => id.Id == data.Id).FirstOrDefault(); ;
    }
  }
}
   

