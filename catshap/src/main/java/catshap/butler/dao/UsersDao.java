package catshap.butler.dao;

import java.io.Reader;
import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import catshap.butler.bean.Users;
import catshap.butler.interfaces.UsersInterface;


public class UsersDao implements UsersInterface{

	private static Reader reader = null;
	private static SqlSessionFactory ssf = null;
	
	static {
		try {
			reader = Resources.getResourceAsReader("catshap/butler/conf/configuration.xml");
			ssf = new SqlSessionFactoryBuilder().build(reader);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}
	
	@Override
	public List<Users> getUsersList() throws SQLException {
		return ssf.openSession().selectList("users.getUsersList");
	}

	@Override
	public int registUsers(Users users) throws SQLException {
		SqlSession ss = ssf.openSession();
		int result = ss.insert("users.registUsers", users);
		ss.commit();
		return result;	
	}

}
