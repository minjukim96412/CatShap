package catshap.butler.interfaces;

import java.sql.SQLException;
import java.util.List;

import catshap.butler.bean.Users;



public interface UsersInterface {
	
	public abstract List<Users> getUsersList() throws SQLException;
	
	public abstract int registUsers(Users users) throws SQLException;
	
}
