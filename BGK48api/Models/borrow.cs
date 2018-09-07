using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BGK48api.Models
{
    public class Borrow
    {
        public string Id { get; set; }
        public IEnumerable<BorrowItem> Items { get; set; }
        public string borrower {get;set;}
        public string witness {get;set;}
        public DateTime? CreateDate { get; set; }
        public DateTime? DeleteDate { get; set; }

    }

    public class BorrowItem
    {
        public string Id { get; set; }
        public int BorrowQty { get; set; }
    }
}