<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="initial-scale=1, width=device-width" />
  <link rel="stylesheet" href="./css/user_login.css" />
  <link rel="stylesheet" href="./css/global.css" />
  <link rel="stylesheet" href="./css/test.css" />
</head>

<body>
  <div class="login-desktop">
    <section class="login">
      <div class="login-form">
        <div class="login-header">
          <div class="login-title">
            <div class="title">
              <div class="strong-login-wrapper">
                <h3 class="strong-login">MY PAGE</h3>
              </div>
              <div class="loginTitle">마이 페이지</div>
            </div>
            <div class="horizontal-divider-frame">
              <div class="horizontal-divider"></div>
            </div>
          </div>
        </div>
        <form action="/login" method="post">
          <div class="profile-card">
		            <div class="profile-image">
		                <img src="./public/caretaker.png" alt="Profile Image">
		            </div>
		            <div class="profile-info">
		                <h2> 집사님 환영합니다</h2>
		                <nav class="profile-nav">
		                    <a href="#">주문내역</a>
		                    <a href="#">회원정보 수정</a>
		                    <a href="#">내 리뷰 보기</a>
		                    <a href="#">내 게시글 보기</a>
		                </nav>
		            </div>
		        </div>
        </form>
      </div>
    </section>
  </div>
</body>
</html>