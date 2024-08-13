namespace EduConnectRestApi.Controllers
{
	public class UserDummy
	{
		public String username { get; set; }
		public String password { get; set; }

		public UserDummy() { }

		public UserDummy(String username, String password) { 
		this.username = username;
		this.password = password;
		
		}
	}
}
