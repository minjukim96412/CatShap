package catshap.butler.servlet;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import catshap.butler.bean.Users;
import catshap.butler.dao.UsersDao;
import catshap.butler.interfaces.UsersInterface;

@WebServlet("/register")
public class UsersRegisterServlet extends HttpServlet {

    private static final long serialVersionUID = 112347867413L;
    private UsersInterface usersDao;

    @Override
    public void init() throws ServletException {
        usersDao = new UsersDao(); // UsersDao 인스턴스 생성
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String usid = request.getParameter("usid");
        String unick = request.getParameter("unick");
        String mktAgree = request.getParameter("mktAgree");

        try {
            Users user = new Users();
            user.setUsid(usid);
            user.setUname(request.getParameter("uname"));
            user.setUpass(request.getParameter("upass"));
            user.setUnick(unick);
            user.setEmail(request.getParameter("email"));
            user.setUtelecom(request.getParameter("utelecom"));
            user.setUphone(request.getParameter("uphone"));
            user.setUmailAddress(request.getParameter("umailAddress"));
            user.setUaddress(request.getParameter("uaddress"));
            user.setUdetailAddress(request.getParameter("udetailAddress"));
            user.setMktAgree(mktAgree != null ? "Y" : "N");

            usersDao.registUsers(user);

            // 회원가입 성공 후 로그인 페이지로 리다이렉트
            response.sendRedirect("user_login.jsp");
        } catch (SQLException e) {
            throw new ServletException("Database error", e);
        }
    }
}

