using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Authentication;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using BGK48api.Models;

namespace BGK48api.Controllers
{
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    [Route("api/[controller]")]
    public class ItemController : Controller
    {
        IMongoCollection<Item> Collection { get; set; }
        IMongoCollection<Borrow> BowCollection { get; set; }

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
            // request.Totalamount = request.Amount;
            Collection.ReplaceOne(x => x.Id == request.Id, request);
        }

        [HttpPost("[action]")]
        public Borrow addBorrow([FromBody]Borrow request){
            request.Id = Guid.NewGuid().ToString();
            request.CreateDate = DateTime.UtcNow;
            request.DeleteDate = null;
            BowCollection.InsertOne(request);

            var resulte = BowCollection.Find(id => id.Id == request.Id).FirstOrDefault();

            return resulte;


    }
    // // POST api/values
    // [HttpPost]
    // public void Post([FromBody]string value)
    // {
    // }

    // // PUT api/values/5
    // [HttpPut("{id}")]
    // public void Put(int id, [FromBody]string value)
    // {
    // }

    // // DELETE api/values/5
    // [HttpDelete("{id}")]
    // public void Delete(int id)
    // {
    // }
    


    }
   
}
