<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="initial-scale=1, width=device-width" />
<link rel="stylesheet" href="./css/global.css" />
<link rel="stylesheet" href="./css/user_join.css" />
<link rel="stylesheet" href="./css/A-01.css" />
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap" />
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap" />
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Short Stack:wght@400&display=swap" />
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" />
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Noto Sans:wght@400&display=swap" />
<script
	src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="./js/user_join.js"></script>
</head>
<body>
	<div class="div318">
		<div class="auth-container-wrapper">
			<div class="auth-container">
				<div class="auth-options">
					<div class="join-container">
						<h2 class="strong-join">JOIN</h2>
						<div class="join-divider-container">
							<div class="horizontal-divider15"></div>
						</div>
					</div>
				</div>
				<div class="login-container">
					<div class="link-wrapper4">
						<img class="link-icon29" alt="" src="./public/join_link.svg" />
					</div>
					<div class="login-icon-container-parent">
						<div class="login-icon-container">
							<img class="link-icon29" alt="" src="./public/icon-13.svg" />
						</div>
						<div class="div327"><a href="user_login.jsp">로그인</a></div>
					</div>
					<div class="icon-wrapper21">
						<img class="link-icon29" alt="" src="./public/icon-13.svg" />
					</div>
					<div class="div328">회원가입</div>
				</div>
			</div>
		</div>
		<section class="form-header">
			<img class="separator-icon13" alt="" src="./public/join_separator.svg" />
			<h2 class="h21">
				<span>
					<p class="p14">아래 회원가입</p>
					<p class="p14">양식을 입력해주세요.</p>
				</span>
			</h2>
		</section>
		<section class="form-container">
			<img class="separator-icon14" alt="" src="./public/join_separator.svg" />
			<div class="form-content">
				<div class="input-labels-parent">
					<form class="id-input-container1" id="signupForm" method="post"
						action="/catshap/register">
						<div class="row31">
							<div class="row-inner11">
								<div class="parent17">
									<div class="div331">아이디</div>
									<div class="input-icon-container">
										<img class="icon154" alt="" src="./public/icon-85.svg" />
									</div>
								</div>
							</div>
							<div class="input12">
								<input type="text" class="container44" id="usid" name="usid"
									placeholder="ID" />
							</div>
							<button class="input14" id="idCheckButton">
								<div class="container47">
									<div class="duplicate-check">id check</div>
								</div>
							</button>
							<div class="wrapper28">
								<div class="div330">(영문소문자/숫자, 4~16자)</div>
							</div>
						</div>
						<span id="usid_error" class="error"></span><br />
						<div class="row31">
							<div class="row-inner11">
								<div class="parent17">
									<div class="div331">비밀번호</div>
									<div class="input-icon-container">
										<img class="icon154" alt="" src="./public/icon-93.svg" />
									</div>
								</div>
							</div>
							<div class="input12">
								<input class="container44" id="upass" name="upass"
									placeholder="Password" type="password" />
							</div>
							<div class="wrapper28">
								<div class="div332">(영문 대소문자/숫자/특수문자 중 3가지 이상 조합, 8자~16자)
								</div>
							</div>
						</div>
						<span id="upass_error" class="error"></span><br>
						<div class="row31">
							<div class="row-inner11">
								<div class="name-input-label-container">
									<div class="div331">비밀번호 확인</div>
									<div class="input-icon-container">
										<img class="icon154" alt="" src="./public/icon-104.svg" />
									</div>
								</div>
							</div>
							<div class="input12">
								<input type="password" id="upass_re" class="container44"
									placeholder="Confirm Password" />
							</div>
							<span id="upass_re_error" class="error"></span><br>
						</div>
						<div class="row31">
							<div class="row-inner11">
								<div class="parent17">
									<div class="div331">이름</div>
									<div class="input-icon-container">
										<img class="icon154" alt="" src="./public/icon-113.svg" />
									</div>
								</div>
							</div>
							<div class="input12">
								<input class="container44" id="uname" name="uname"
									placeholder="Name" type="text" />
							</div>
							<span id="uname_error" class="error"></span><br>
						</div>
						<div class="row31">
							<div class="row-inner11">
								<div class="parent17">
									<div class="div331">닉네임</div>
									<div class="input-icon-container">
										<img class="icon154" alt="" src="./public/icon-113.svg" />
									</div>
								</div>
							</div>
							<div class="input12">
								<input class="container44" id="unick" name="unick"
									placeholder="nickname" type="text" />
							</div>
							<button class="input14" id="nickCheckButton">
								<div class="container47">
									<div class="duplicate-check">nickname check</div>
								</div>
							</button>
							<div class="wrapper28">
								<div class="div330">(한글/영문/숫자, 2~10자)</div>
							</div>
						</div>
						<span id="unick_error" class="error"></span><br />
						<div class="row31">
							<div class="row-inner11">
								<div class="parent17">
									<div class="div331">휴대전화</div>
									<div class="input-icon-container">
										<img class="icon154" alt="" src="./public/icon-133.svg" />
									</div>
								</div>
							</div>
							<div class="input13">
								<select id="utelecom" name="utelecom" class="container45">
									<option value="">선택</option>
									<option value="LG">LG</option>
									<option value="SK">SK</option>
									<option value="KT">KT</option>
								</select>
							</div>
							<div class="input12">
								<input class="container44" id="uphone" name="uphone"
									placeholder="01000000000" type="text" />
							</div>
							<span id="uphone_error" class="error"></span><br />
						</div>
						<div class="row36">
							<div class="input-label-container-wrapper">
								<div class="input-label-container">
									<div class="div331">이메일</div>
									<div class="input-icon-container">
										<img class="icon154" alt="" src="./public/icon-85.svg" />
									</div>
								</div>
							</div>
							<div class="input19">
								<input class="container51" id="email" name="email"
									placeholder="user@domain.com" type="text" />
							</div>
						</div>
						<span id="email_error" class="error"></span><br />
						<div class="row31">
							<div class="row-inner11">
								<div class="parent17">
									<div class="div331">우편번호</div>
									<div class="input-icon-container">
										<img class="icon154" alt="" src="./public/icon-85.svg" />
									</div>
								</div>
							</div>
							<div class="input12">
								<input class="container44" id="umailAddress" name="umailAddress"
									placeholder="우편번호" type="text" />
							</div>
							<button class="input14" id="addressSearchButton">
								<div class="container47">
									<div class="search-check">address search</div>
								</div>
							</button>
						</div>
						<div class="row36">
							<div class="input-label-container-wrapper">
								<div class="input-label-container">
									<div class="div331">주소</div>
									<div class="input-icon-container">
										<img class="icon154" alt="" src="./public/icon-85.svg" />
									</div>
								</div>
							</div>
							<div class="input19">
								<input class="container51" id="uaddress" name="uaddress"
									placeholder="주소" type="text" />
							</div>
						</div>
						<div class="row36">
							<div class="input-label-container-wrapper">
								<div class="input-label-container">
									<div class="div331">상세주소</div>
									<div class="input-icon-container">
										<img class="icon154" alt="" src="./public/icon-85.svg" />
									</div>
								</div>
							</div>
							<div class="input19">
								<input class="container51" id="udetailAddress"
									name="udetailAddress" placeholder="상세주소" type="text" />
							</div>
						</div>
				</div>
				<div class="pharmacy-title-parent">
					<div class="pharmacy-title">
						<h2 class="h22">약관</h2>
					</div>
				</div>
				<div class="details1">
					<div class="backgroundborder-parent">
						<div class="backgroundborder14">
							<input class="input20" id="termsOfUseAgree" type="checkbox" />
							<div class="label8">동의함</div>
							<div class="div340">[ 필수 ] 이용약관 동의</div>
							<div class="agree-name">
								<div class="agree">
									<a href="#" id="showTerms">내용보기</a>
								</div>
							</div>
							<img class="icon163" alt="" src="./public/icon-171@2x.png" />
						</div>
						<!-- 이용약관 모달 창 -->
						<div id="termsModal" class="modal" style="display: none;">
							<div class="modal-content">
								<div id="termsContent">
									<!-- 내용이 여기에 로드됩니다. -->
								</div>
							</div>
						</div>
					</div>
					<div class="backgroundborder14">
						<input class="input20" id="privacyAgree" type="checkbox" />
						<div class="label8">동의함</div>
						<div class="div340">[ 필수 ] 개인정보 수집 및 이용 동의</div>
						<div class="agree-name">
							<div class="agree">
								<a href="#" id="showPrivacy">내용보기</a>
							</div>
						</div>
						<img class="icon163" alt="" src="./public/icon-181@2x.png" />
						<!-- 개인정보 수집 및 이용 동의 모달 창 -->
						<div id="privacyModal" class="modal" style="display: none;">
							<div class="modal-content">
								<span class="close">&times;</span>
								<h2>[ 필수 ] 개인정보 수집 및 이용 동의</h2>
								<div id="privacyContent">
									<!-- 내용이 여기에 로드됩니다. -->
								</div>
							</div>
						</div>
					</div>
					<div class="backgroundborder14">
						<input class="input20" id="mktAgree" name="mktAgree"
							type="checkbox" />
						<div class="label8">동의함</div>
						<div class="div340">[ 선택 ] 마케팅 목적의 개인정보 수집 및 이용에 대한 동의</div>
						<div class="agree-name">
							<div class="agree">
								<a id="showMktAgree" href="#">내용보기</a>
							</div>
						</div>
						<img class="icon163" alt="" src="./public/icon-181@2x.png" />
						<!-- 개인정보 수집 및 이용 동의 모달 창 -->
						<div id="mktModal" class="modal">
							<div class="modal-content">
								<span class="close">&times;</span>
								<h2>[ 필수 ] 마케팅 목적의 개인정보 수집 및 이용 동의</h2>
								<div id="mktContent">
									<!-- 내용이 여기에 로드됩니다. -->
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="actions3">
					<div class="link-parent11">
						<button class="link75" id="linkContainer" onclick="submitForm()">
							<div class="action-icons">
								<img class="icon165" src="./public/icon-6.svg" />
							</div>
							<div class="div344">회원가입</div>
						</button>
						<div class="link76" id="user_cancel">
							<div class="icon-wrapper26">
								<img class="link-icon29" alt="" src="./public/icon-201.svg" />
							</div>
							<div class="div345">  취소</div>
						</div>
					</div>
				</div>
				</form>
			</div>
	</div>
	</section>
	</div>
</body>
</html>