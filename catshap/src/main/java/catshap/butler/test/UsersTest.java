package catshap.butler.test;

import java.sql.SQLException;

import catshap.butler.bean.Users;
import catshap.butler.dao.UsersDao;
import catshap.butler.interfaces.UsersInterface;



public class UsersTest {
	
	public static void main(String[] args) throws SQLException {
		UsersInterface ui = new UsersDao();
		
		Users users = new Users(0,1,"usid","이름","a123",
				"닉","a@a","sk","01012345678",null,"123456","주소시 군 구",
				"상세주소",null,null,null,"Y",0);
		ui.registUsers(users);
		
		
	}
	
}
