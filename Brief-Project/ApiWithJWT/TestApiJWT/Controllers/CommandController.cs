using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestApiJWT.Models;

namespace TestApiJWT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommandController : ControllerBase
    {
        ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        public CommandController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }
        ////GET: api/<CommandController>
        //[HttpGet]
        //public async Task<IActionResult> Get(string PanierId)
        //{
        //    var user = await _userManager.FindByEmailAsync(login.Email);
        //    if (PanierId == string.Empty)
        //        throw new ArgumentNullException(nameof(PanierId));
        //    var commandexist = _context.Panier.Where(a => a.commandStatus == true && a.Id == PanierId);


        //    return Ok(commandexist);

        //}



        //POST api/<CommandController>
        [HttpPost]
        public async Task<IActionResult> Post(Guid PanierId)
        {
            //var user = await _userManager.FindByEmailAsync(login.Email);
            //if (PanierId is null)
            //    throw new ArgumentNullException(nameof(PanierId));

            var panier = _context.Paniers.Where(x => x.Id == PanierId).FirstOrDefault();

            if (panier == null)
            {
                NoContent();
            }
            else
            {
                if (panier.commandStatus == false)
                {
                    panier.commandStatus = true;
                    _context.Paniers.Update(panier);
                    await _context.SaveChangesAsync();
                    Ok("raja3ha True");


                }
                else
                {
                    Ok("Raha Deja True");
                }
            }



            return Ok("");


        }

        //// PUT api/<CommandController>/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody] string value)
        // {
        // }

        // // DELETE api/<CommandController>/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }
    }
}
