using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BGK48api.Models
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
        public string Picture {get; set;} 
    }
}
