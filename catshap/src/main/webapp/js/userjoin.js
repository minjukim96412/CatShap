document.addEventListener('DOMContentLoaded', () => {
    const usidField = document.getElementById('usid');
    const upassField = document.getElementById('upass');
    const upassReField = document.getElementById('upassRe');
    const nameField = document.getElementById('uname');
    const nicknameField = document.getElementById('unick');
    const phoneField = document.getElementById('uphone');
    const emailField = document.getElementById('email');
    const umailAddressField = document.getElementById('umailAddress');
    const addressField = document.getElementById('uaddress');
    const detailAddressField = document.getElementById('detailAddress');
    const form = document.getElementById('signupForm');

    usidField.addEventListener('input', validateUsid);
    upassField.addEventListener('input', validateUpass);
    upassReField.addEventListener('input', validateUpassRe);
    nameField.addEventListener('input', validateName);
    nicknameField.addEventListener('input', validateNickname);
    phoneField.addEventListener('input', validatePhone);
    emailField.addEventListener('input', validateEmail);
    umailAddressField.addEventListener('input', validateUmailAddress);
    addressField.addEventListener('input', validateAddress);
    detailAddressField.addEventListener('input', validateDetailAddress);

    function validateUsid() {
        const usidValue = usidField.value;
        const usidError = document.getElementById('usid_error');
        if (usidValue.length < 4 || usidValue.length > 16 || !/^[a-z0-9]+$/.test(usidValue)) {
            usidError.textContent = '아이디는 4~16자 영문 소문자 및 숫자만 사용할 수 있습니다.';
            return false;
        } else {
            usidError.textContent = '';
            return true;
        }
    }

    function validateUpass() {
	    const passwordField = document.getElementById('upass');
	    const passwordValue = passwordField.value;
	    const passwordError = document.getElementById('upass_error');
	
	    // 정규식 패턴
	    const lengthPattern = /^.{8,16}$/;
	    const lowerCasePattern = /[a-z]/;
	    const upperCasePattern = /[A-Z]/;
	    const numberPattern = /\d/;
	    const specialCharPattern = /[@!$%^&*()_+{}\[\]:;"'<>,.?/~`]/;
	
	    // 각 문자의 존재 여부를 확인
	    const hasLower = lowerCasePattern.test(passwordValue);
	    const hasUpper = upperCasePattern.test(passwordValue);
	    const hasNumber = numberPattern.test(passwordValue);
	    const hasSpecial = specialCharPattern.test(passwordValue);
	
	    // 문자의 조합 여부 확인
	    const typesCount = [hasLower, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;
	
	    if (!lengthPattern.test(passwordValue) || typesCount < 3) {
	        passwordError.textContent = '비밀번호는 8~16자 사이이며, 대문자, 소문자, 숫자, 특수문자 중 3가지 이상을 포함해야 합니다.';
	        return false;
	    } else {
	        passwordError.textContent = '';
	        return true;
	    }

    }

    function validateUpassRe() {
        const upassValue = upassField.value;
        const upassReValue = upassReField.value;
        const upassReError = document.getElementById('upassRe_error');
        if (upassValue !== upassReValue) {
            upassReError.textContent = '비밀번호가 일치하지 않습니다.';
            return false;
        } else {
            upassReError.textContent = '';
            return true;
        }
    }

    // 나머지 검증 함수도 비슷한 방식으로 수정합니다.

    function isFormValid() {
        return (
            validateUsid() &&
            validateUpass() &&
            validateUpassRe() &&
            validateName() &&
            validateNickname() &&
            validatePhone() &&
            validateEmail() &&
            validateUmailAddress() &&
            validateAddress() &&
            validateDetailAddress()
        );
    }

    form.addEventListener('submit', (event) => {
        if (!isFormValid()) {
            event.preventDefault(); // 검증 실패 시 폼 제출 방지
        }
    });
});


// Define the regular expressions for validation
const regex = {
    usid: /^[A-Za-z0-9]{4,16}$/, // 아이디
    upass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/, // 비밀번호 (숫자 포함 추가)
    unick: /^[가-힣a-zA-Z0-9_]{2,10}$/, // 닉네임
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, // 이메일
    utelecom: /^(LG|SK|KT)$/, // 통신사
    uphone: /^\d{10,11}$/, // 휴대전화
    umailAddress: /^\d{5}$/, // 우편번호
    address: /.+/, // 주소
    detailAddress: /.+/, // 상세주소
    mktAgree: /.+/ // 마케팅 동의
};



function validateUnick() {
    const value = elements.unick.value;
    elements.unickError.textContent = regex.unick.test(value) ? '' : '닉네임은 2자 이상 10자 이하의 한글, 영문, 숫자, 밑줄만 허용됩니다.';
}

function validateEmail() {
    const value = elements.email.value;
    elements.emailError.textContent = regex.email.test(value) ? '' : '유효한 이메일 주소를 입력하세요.';
}

function validateUtelecom() {
    const value = elements.utelecom.value;
    elements.utelecomError.textContent = regex.utelecom.test(value) ? '' : '통신사명은 LG, SK, KT 중 하나를 선택해야 합니다.';
}

function validateUphone() {
    const value = elements.uphone.value;
    elements.uphoneError.textContent = regex.uphone.test(value) ? '' : '휴대전화는 10자 또는 11자의 숫자만 허용됩니다.';
}

function validateUmailAddress() {
    const value = elements.umailAddress.value;
    elements.umailAddressError.textContent = regex.umailAddress.test(value) ? '' : '올바른 우편번호를 입력하세요.';
}

function validateAddress() {
    const value = elements.address.value;
    elements.addressError.textContent = regex.address.test(value) ? '' : '주소를 입력하세요.';
}

function validateDetailAddress() {
    const value = elements.detailAddress.value;
    elements.detailAddressError.textContent = regex.detailAddress.test(value) ? '' : '상세주소를 입력하세요.';
}

function validateMktAgree() {
    const isChecked = elements.mktAgree.checked;
    elements.mktAgreeError.textContent = isChecked ? '' : '마케팅 동의를 체크해야 합니다.';
}

// 전화번호 형식화 함수
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length <= 3) {
        input.value = value;
    } else if (value.length <= 7) {
        input.value = value.slice(0, 3) + '-' + value.slice(3);
    } else {
        input.value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
    }
}

// 주소 검색 함수
function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            document.getElementById('umailAddress').value = data.zonecode;
            document.getElementById('address').value = data.address;
        }
    }).open();
}


