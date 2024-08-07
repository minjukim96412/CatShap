package catshap.butler.service;

import catshap.butler.interfaces.UsersInterface;
import catshap.butler.dao.UsersDao;
import catshap.butler.bean.Users;
import java.sql.SQLException;

public class UsersJoinService {

	private UsersInterface ui;
	
    public UsersJoinService(UsersInterface ui) {
        this.ui = ui;
    }

    // 사용자 등록
    public void registerUser(Users user) throws SQLException {
        ui.registUsers(user);
    }
}

