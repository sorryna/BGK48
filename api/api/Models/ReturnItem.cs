using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
  public class Returnitem
  {
    public string Id { get; set; }
    public string borrower { get; set; }
    public string witness { get; set; }
    public string returnner { get; set; }
    public IEnumerable<Reitem> Items { get; set; }
  }

  public class Reitem {
    public string Id { get; set; }
    public string slot { get; set; }
    public string Name { get; set; }
    public int Qty { get; set; }
  }
}