<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입</title>
    <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
    <script src="./js/userjoin.js"></script>
    <style>
        .error {
            color: red;
            font-size: 0.9em;
        }
    </style>
</head>
<body>
    <h1>회원가입</h1>
    <form>
        <label for="usid">아이디:</label>
        <input type="text" id="usid">
        <span id="usid_error" class="error"></span><br>

        <label for="upass">비밀번호:</label>
        <input type="password" id="upass">
        <span id="upass_error" class="error"></span><br>

        <label for="upass_re">비밀번호 확인:</label>
        <input type="password" id="upass_re">
        <span id="upass_re_error" class="error"></span><br>

        <label for="unick">닉네임:</label>
        <input type="text" id="unick">
        <span id="unick_error" class="error"></span><br>

        <label for="email">이메일:</label>
        <input type="text" id="email">
        <span id="email_error" class="error"></span><br>

        <label for="utelecom">통신사:</label>
        <select id="utelecom">
            <option value="">선택</option>
            <option value="LG">LG</option>
            <option value="SK">SK</option>
            <option value="KT">KT</option>
        </select>
        <span id="utelecom_error" class="error"></span><br>

        <label for="uphone">휴대전화:</label>
        <input type="text" id="uphone" onkeyup="formatPhoneNumber(this)">
        <span id="uphone_error" class="error"></span><br>

        <label for="umailAddress">우편번호:</label>
        <input type="text" id="zipcode" readonly>
        <button type="button" onclick="sample6_execDaumPostcode()">검색</button>
        <span id="zipcode_error" class="error"></span><br>

        <label for="address">주소:</label>
        <input type="text" id="address" readonly>
        <span id="address_error" class="error"></span><br>

        <label for="detailAddress">상세주소:</label>
        <input type="text" id="detailAddress">
        <span id="detailAddress_error" class="error"></span><br>

        <label for="mktAgree">마케팅 동의:</label>
        <input type="checkbox" id="mktAgree">
        <span id="mktAgree_error" class="error"></span><br>

        <button type="button" onclick="sendit()">제출</button>
    </form>
</body>
</html>
