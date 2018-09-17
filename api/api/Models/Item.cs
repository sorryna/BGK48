using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Item
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Slot { get; set; }
        public int Amount {get; set;} //จำนวนที่เหลือ
        public int Totalamount {get; set;} //จำนวนทั้งหมด
        public string Username { get; set; }
        public string Desc { get; set; } //รายละเอียด
        public string img {get; set;}
        public DateTime? CreateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
  }
}
