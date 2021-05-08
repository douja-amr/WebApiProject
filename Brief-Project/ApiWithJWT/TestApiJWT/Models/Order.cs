using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TestApiJWT.Models
{
    public class Order
    {
        [Key]
        
        [ForeignKey("PanierId,UserId ")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public Panier Panier { get; set; }
        public int PanierId { get; set; }
        public ApplicationUser User { get; set; }
        public string UserId { get; set; }
    }
}
