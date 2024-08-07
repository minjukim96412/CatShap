<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="initial-scale=1, width=device-width" />
  <link rel="stylesheet" href="./css/user_login.css" />
  <link rel="stylesheet" href="./css/global.css" />
  <link rel="stylesheet" href="./css/main.css" />
</head>
<body>
  <div class="login-desktop">
    <section class="login">
      <div class="login-form">
        <div class="login-header">
          <div class="login-title">
            <div class="title">
              <div class="strong-login-wrapper">
                <h3 class="strong-login">LOGIN</h3>
              </div>
              <div class="loginTitle">회원 로그인</div>
            </div>
            <div class="horizontal-divider-frame">
              <div class="horizontal-divider"></div>
            </div>
          </div>
        </div>
        <form action="/login" method="post">
          <div class="input-fields-parent">
            <div class="input-fields">
              <div class="id-input">
                <div class="id-input-container">
                  <div class="loginDetailTitle">로그인</div>
                </div>
                <div class="password-input">
                  <div class="password-input-container">
                    <input id="usid" class="label-input-id" placeholder="ID" type="text" />
                  </div>
                  <input id="upass" class="label-input-pw" placeholder="PASSWORD" type="password" />
                </div>
              </div>
            </div>
            <div class="loginBtnDiv">
              <button id="loginBtn" class="loginBtn">LOGIN</button>
            </div>
          </div>
        </form>
        <div class="find-login-wrapper">
          <div class="find-login">
            <div class="userFindId" id="userFindId">아이디 찾기</div>
            <div class="userFindPw" id="userFindPw">비밀번호 찾기</div>
            <div class="userSignUp" id="userSignUp">회원가입</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</body>
</html>