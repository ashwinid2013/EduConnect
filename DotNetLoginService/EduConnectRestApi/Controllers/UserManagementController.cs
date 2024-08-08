using EduConnectRestApi.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages;
using MySqlConnector;

namespace EduConnectRestApi.Controllers
{

	[Route("api/[controller]/[action]")]
	[EnableCors]
	[ApiController]
	public class UserManagementController : ControllerBase
	{
		[HttpGet]
		public List<User> GetLogins()
		{
			List<User> list = new List<User>();
			using(var db=new educonnectdbContext())
			{
				list = db.Users.ToList();
			}
			return list;
		}

		[HttpGet]
		public List<User> GetLoginWithRole(int id)
		{
			List<User> list=new List<User>();
			using(var db=new educonnectdbContext())
			{
				list=db.Users.Where(add=>add.Rid==id).ToList();
			}
			return list;
		}
		[HttpGet]
		public List<Role>? GetRoles()
		{
			List<Role>? list = new List<Role>();
			using (var db = new educonnectdbContext())
			{
				list = db.Roles.Select(r => r).ToList();
			}
			return list;
		}
		[HttpGet]
		public List<City> GetCity()
		{
			List<City>? list = new List<City>();
			using (var db = new educonnectdbContext())
			{
				list = db.Cities.Select(r => r).ToList();
			}
			return list;
		}
		[HttpGet]
		public List<Area>? GetArea(int id)
		{
			List<Area>? list = new List<Area>();
			using (var db = new educonnectdbContext())
			{
				list = db.Areas.Where(r => r.Cityid==id).ToList();
			}
			return list;
		}
		[HttpGet]
		public User? GetLog(int id)
		{
			User? log = new User();
			using(var db=new educonnectdbContext())
			{
				log = db.Users.Find(id);
			}
			return log;
		}
		[HttpPost]
		public User SaveUser(User user)
		{
			using(var db=new educonnectdbContext())
			{
				db.Add(user);
				db.SaveChanges();
			}
			return user;
		}
        [HttpPut]
        public IActionResult UpdateUser(User user)
        {
            if (user == null)
            {
                return BadRequest("User cannot be null");
            }

            using (var db = new educonnectdbContext())
            {
                var existingUser = db.Users.Find(user.Uid); // Adjust this to match your key property
                if (existingUser == null)
                {
                    return NotFound("User not found");
                }

                existingUser.Username = user.Username;
                existingUser.Password = user.Password;
                existingUser.Fname = user.Fname;
                existingUser.Lname = user.Lname;
                existingUser.Address = user.Address;
                existingUser.Email = user.Email;
                existingUser.ContactNo = user.ContactNo;
                existingUser.Rid = user.Rid;
                existingUser.Areaid = user.Areaid;
                existingUser.Status = user.Status;
                // Update other properties as necessary

                db.SaveChanges();
            }

            return Ok(user);
        }



        [HttpPost]
		public Subject SaveSubject( Subject subject)
		{
            using (var db = new educonnectdbContext())
            {
                db.Add(subject);
                db.SaveChanges();
            }
            return subject;

        }


        [HttpPost]
		public IActionResult CheckLogin([FromBody] UserDummy login)
		{
			if (login == null || string.IsNullOrWhiteSpace(login.username) || string.IsNullOrWhiteSpace(login.password))
			{
				return BadRequest(new { success = false, Message = "Invalid login data" });
			}
			User user;
			using (var db = new educonnectdbContext())
			{
				user = db.Users.Where(u => u.Username == login.username).FirstOrDefault();
				if (user != null)
				{
					if (user.Password == login.password)
					{
						return Ok(new{ username = user });

					}
				}
			}
			return Unauthorized(new { success = false,Message = "Invalid username or password "});
		}


		[HttpGet]
        public async Task<City> GetCityByAreaIdAsync(int areaId)
        {
            using (var context = new educonnectdbContext())
            {
                var area = await context.Areas
                    .Include(a => a.City)
                    .FirstOrDefaultAsync(a => a.Areaid == areaId);

                return area?.City;
            }
        }
    }
}
