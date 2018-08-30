using System;

namespace BGK48
{
    public class Item
    {
        [BsonId]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Desc { get; set; }
        public string ThumbURL { get; set; }
        public bool HasStock { get; set; }
        public int Stock { get; set; }
    }
}