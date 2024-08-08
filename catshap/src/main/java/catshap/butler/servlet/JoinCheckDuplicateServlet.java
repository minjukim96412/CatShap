package catshap.butler.servlet;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import catshap.butler.dao.UsersDao;
import catshap.butler.interfaces.UsersInterface;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet("/checkDuplicate")
public class JoinCheckDuplicateServlet extends HttpServlet {
    private static final long serialVersionUID = 115345641231L;
    private UsersInterface usersDao;

    @Override
    public void init() throws ServletException {
        // UsersDao 객체를 생성하여 인터페이스 타입으로 저장
        usersDao = new UsersDao(); // 실제로는 인터페이스에 의존하도록 코드를 작성할 수 있음
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        String type = request.getParameter("type");
        String value = request.getParameter("value");

        JsonObject jsonResponse = new JsonObject();
        boolean isAvailable = false;

        try {
            if ("usid".equals(type)) {
                isAvailable = !usersDao.isUsidTaken(value); // 사용자 ID 중복 확인
            } else if ("unick".equals(type)) {
                isAvailable = !usersDao.isUnickTaken(value); // 닉네임 중복 확인
            }

            jsonResponse.addProperty("isAvailable", isAvailable);
        } catch (SQLException e) {
            throw new ServletException("Database error", e);
        }

        // Gson을 사용하여 JSON 문자열로 변환
        Gson gson = new Gson();
        String json = gson.toJson(jsonResponse);

        response.getWriter().write(json);
    }
}

