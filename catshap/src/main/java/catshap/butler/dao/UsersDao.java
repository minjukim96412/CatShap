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

public class UsersDao implements UsersInterface {

    private static SqlSessionFactory ssf;

    static {
        try {
            Reader reader = Resources.getResourceAsReader("catshap/butler/conf/configuration.xml");
            ssf = new SqlSessionFactoryBuilder().build(reader);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    private SqlSession getSession() {
        return ssf.openSession();
    }

    @Override
    public List<Users> getUsersList() throws SQLException {
        try (SqlSession session = getSession()) {
            return session.selectList("users.getUsersList");
        }
    }

    @Override
    public int registUsers(Users users) throws SQLException {
        try (SqlSession session = getSession()) {
            int result = session.insert("users.registUsers", users);
            session.commit();
            return result;
        }
    }

    @Override
    public boolean isUsidTaken(String usid) throws SQLException {
        try (SqlSession session = getSession()) {
            Integer count = session.selectOne("users.isUsidTaken", usid);
            return count != null && count > 0;
        }
    }

    @Override
    public boolean isUnickTaken(String unick) throws SQLException {
        try (SqlSession session = getSession()) {
            Integer count = session.selectOne("users.isUnickTaken", unick);
            return count != null && count > 0;
        }
    }
}
