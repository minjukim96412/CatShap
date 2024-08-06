// Define the regular expressions for validation
const regex = {
    usid: /^[A-Za-z0-9]{4,16}$/, // 아이디
    upass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/, // 비밀번호
    unick: /^[가-힣a-zA-Z0-9_]{2,10}$/, // 닉네임
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, // 이메일
    utelecom: /^(LG|SK|KT)$/, // 통신사
    uphone: /^\d{10,11}$/, // 휴대전화
    zipcode: /^\d{5}$/, // 우편번호
    address: /.+/, // 주소
    detailAddress: /.+/, // 상세주소
    mktAgree: /.+/ // 마케팅 동의
};

// Cache DOM elements
const elements = {
    usid: document.getElementById('usid'),
    usidError: document.getElementById('usid_error'),
    upass: document.getElementById('upass'),
    upassError: document.getElementById('upass_error'),
    upassRe: document.getElementById('upass_re'),
    upassReError: document.getElementById('upass_re_error'),
    unick: document.getElementById('unick'),
    unickError: document.getElementById('unick_error'),
    email: document.getElementById('email'),
    emailError: document.getElementById('email_error'),
    utelecom: document.getElementById('utelecom'),
    utelecomError: document.getElementById('utelecom_error'),
    uphone: document.getElementById('uphone'),
    uphoneError: document.getElementById('uphone_error'),
    umailAddress: document.getElementById('umailAddress'),
    umailAddressError: document.getElementById('umailAddress_error'),
    address: document.getElementById('address'),
    addressError: document.getElementById('address_error'),
    detailAddress: document.getElementById('detailAddress'),
    detailAddressError: document.getElementById('detailAddress_error'),
    mktAgree: document.getElementById('mktAgree'),
    mktAgreeError: document.getElementById('mktAgree_error')
};

// Add event listeners for validation
document.addEventListener('DOMContentLoaded', function() {
    if (elements.usid) elements.usid.addEventListener('keyup', validateUsid);
    if (elements.upass) elements.upass.addEventListener('keyup', validateUpass);
    if (elements.upassRe) elements.upassRe.addEventListener('keyup', validateUpassRe);
    if (elements.unick) elements.unick.addEventListener('keyup', validateUnick);
    if (elements.email) elements.email.addEventListener('keyup', validateEmail);
    if (elements.utelecom) elements.utelecom.addEventListener('change', validateUtelecom);
    if (elements.uphone) elements.uphone.addEventListener('keyup', validateUphone);
    if (elements.umailAddress) elements.umailAddress.addEventListener('keyup', validateUmailAddress);
    if (elements.address) elements.address.addEventListener('keyup', validateAddress);
    if (elements.detailAddress) elements.detailAddress.addEventListener('keyup', validateDetailAddress);
    if (elements.mktAgree) elements.mktAgree.addEventListener('change', validateMktAgree);
});

// Validation functions
function validateUsid() {
    const value = elements.usid.value;
    elements.usidError.textContent = regex.usid.test(value) ? '' : '아이디는 4자 이상 16자 이하의 대소문자 조합이어야 합니다.';
}

function validateUpass() {
    const value = elements.upass.value;
    elements.upassError.textContent = regex.upass.test(value) ? '' : '비밀번호 형식을 확인하세요. 대소문자/숫자/특수문자 중 3가지 이상 조합, 8자~16자.';
}

function validateUpassRe() {
    const passValue = elements.upass.value;
    const passReValue = elements.upassRe.value;
    elements.upassReError.textContent = passValue === passReValue ? '' : '비밀번호가 일치하지 않습니다.';
}

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

// Format phone number (e.g., 01012345678 -> 010-1234-5678)
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

// Address search function
function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            document.getElementById('zipcode').value = data.zonecode;
            document.getElementById('address').value = data.address;
        }
    }).open();
}

function sendit() {
    validateUsid();
    validateUpass();
    validateUpassRe();
    validateUnick();
    validateEmail();
    validateUtelecom();
    validateUphone();
    validateUmailAddress();
    validateZipcode();
    validateAddress();
    validateDetailAddress();
    validateMktAgree();

    // Implement form submission if validation passes
    // Example:
    // if (document.querySelectorAll('.error:empty').length === Object.keys(elements).length) {
    //     document.querySelector('form').submit();
    // }
}





