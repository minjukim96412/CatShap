$(document).ready(function() {
    const regex = {
        usid: /^[A-Za-z0-9]{4,16}$/,
        uname: /^[가-힣a-zA-Z]+$/,
        unick: /^[가-힣a-zA-Z0-9]{2,10}$/,
        email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        uphone: /^\d{10,11}$/
    };

    function validateField(id, regex, errorMsg) {
        const field = $(`#${id}`);
        const errorField = $(`#${id}_error`);
        if (regex.test(field.val())) {
            errorField.text('');
            return true;
        } else {
            errorField.text(errorMsg);
            return false;
        }
    }

    function validateUsid() {
        const usid = $('#usid').val();
        const errorField = $('#usid_error');
        if (regex.usid.test(usid)) {
            errorField.text('');
            return true;
        } else {
            errorField.text('아이디는 4~16자 영문 소문자 및 숫자만 사용할 수 있습니다.');
            return false;
        }
    }

    function validateUpass() {
        const passwordValue = $('#upass').val();
        const passwordError = $('#upass_error');

        const lengthPattern = /^.{8,16}$/;
        const lowerCasePattern = /[a-z]/;
        const upperCasePattern = /[A-Z]/;
        const numberPattern = /\d/;
        const specialCharPattern = /[@!$%^&*()_+{}\[\]:;"'<>,.?/~`]/;

        const hasLower = lowerCasePattern.test(passwordValue);
        const hasUpper = upperCasePattern.test(passwordValue);
        const hasNumber = numberPattern.test(passwordValue);
        const hasSpecial = specialCharPattern.test(passwordValue);
        const typesCount = [hasLower, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

        if (!lengthPattern.test(passwordValue) || typesCount < 3) {
            passwordError.text('비밀번호는 8~16자 사이이며, 대문자, 소문자, 숫자, 특수문자 중 3가지 이상을 포함해야 합니다.');
            return false;
        } else {
            passwordError.text('');
            return true;
        }
    }

    function validateUpassRe() {
        const upassReValue = $('#upass_re').val();
        const upassReError = $('#upass_re_error');
        const passwordValue = $('#upass').val();

        if (validateUpass()) {
            if (passwordValue === upassReValue) {
                upassReError.text('비밀번호가 일치합니다.').css('color', 'blue');
                return true;
            } else {
                upassReError.text('비밀번호가 일치하지 않습니다.');
                return false;
            }
        } else {
            upassReError.text('');
            return false;
        }
    }

    function validateUnick() {
        const unick = $('#unick').val();
        const errorField = $('#unick_error');
        if (regex.unick.test(unick)) {
            errorField.text('');
            return true;
        } else {
            errorField.text('닉네임은 2~10자의 한글, 영문, 숫자만 사용할 수 있습니다.');
            return false;
        }
    }

    function validateEmail() {
        return validateField('email', regex.email, '유효한 이메일 주소를 입력하세요.');
    }

    function validateUphone() {
        return validateField('uphone', regex.uphone, '휴대전화는 10자 또는 11자의 숫자만 허용됩니다.');
    }

    function validateUname() {
        const uname = $('#uname').val();
        const errorField = $('#uname_error');
        if (regex.uname.test(uname)) {
            errorField.text('');
            return true;
        } else {
            errorField.text('이름은 한글 또는 영문만 입력 가능합니다.');
            return false;
        }
    }

    function validateTermsOfUseAgree() {
        const errorField = $('#termsOfUseAgree_error');
        if ($('#termsOfUseAgree').is(':checked')) {
            errorField.text('');
            return true;
        } else {
            errorField.text('이용약관에 동의해야 합니다.');
            return false;
        }
    }

    function validatePrivacyAgree() {
        const errorField = $('#privacyAgree_error');
        if ($('#privacyAgree').is(':checked')) {
            errorField.text('');
            return true;
        } else {
            errorField.text('개인정보 수집 및 이용에 동의해야 합니다.');
            return false;
        }
    }

    function validateMktAgree() {
        return true;
    }

    function isFormValid() {
        return (
            validateUsid() &&
            validateUpass() &&
            validateUpassRe() &&
            validateUnick() &&
            validateEmail() &&
            validateUphone() &&
            validateUname() &&
            validateTermsOfUseAgree() &&
            validatePrivacyAgree() &&
            validateMktAgree()
        );
    }

    // Add input event listeners for real-time validation
    $('#usid').on('input', validateUsid);
    $('#upass').on('input', validateUpass);
    $('#upass_re').on('input', validateUpassRe);
    $('#unick').on('input', validateUnick);
    $('#email').on('input', validateEmail);
    $('#uphone').on('input', validateUphone);
    $('#uname').on('input', validateUname);
    $('#termsOfUseAgree').on('change', validateTermsOfUseAgree);
    $('#privacyAgree').on('change', validatePrivacyAgree);
    $('#mktAgree').on('change', validateMktAgree);

    $('#idCheckButton').click(function(event) {
        event.preventDefault();
        const usid = $('#usid').val();
        checkDuplicate('usid', usid);
    });

    $('#nickCheckButton').click(function(event) {
        event.preventDefault();
        const unick = $('#unick').val();
        checkDuplicate('unick', unick);
    });

    $('#passwordCheckButton').click(function(event) {
        event.preventDefault();
        validateUpassRe();
    });

    $('#signupForm').submit(function(event) {
        if (isFormValid()) {
            alert('등록이 완료되었습니다!');
            this.submit(); // 유효한 경우 폼 제출
        } else {
            alert('폼을 올바르게 작성해 주세요.');
            event.preventDefault(); // 폼 제출 방지
        }
    });

    function checkDuplicate(type, value) {
        const errorField = $(`#${type}_error`);
        if (value === '') {
            errorField.text('필드를 입력해 주세요.');
            return;
        }

        $.post('/catshap/checkDuplicate', { type, value })
            .done(function(data) {
                if (data.isAvailable) {
                    errorField.text(`사용 가능한 ${type === 'usid' ? '아이디' : '닉네임'}입니다.`).css('color', 'blue');
                } else {
                    errorField.text(`${type === 'usid' ? '아이디' : '닉네임'}가 이미 사용 중입니다.`).css('color', 'red');
                }
            })
            .fail(function(error) {
                console.error('Error:', error);
            });
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
    function sample6_execDaumPostcode(event) {
	    // 이벤트 기본 동작 방지
	    event.preventDefault();
	
	    new daum.Postcode({
	        oncomplete: function(data) {
	            document.getElementById('umailAddress').value = data.zonecode;
	            document.getElementById('uaddress').value = data.address;
	        }
	    }).open();
	}

    // 전화번호 입력 필드에 대한 oninput 이벤트 핸들러 추가
    $('#uphone').on('input', function() {
        formatPhoneNumber(this);
    });

    // 주소 검색 버튼에 대한 click 이벤트 핸들러 추가
    $('#addressSearchButton').on('click', function(event) {
        sample6_execDaumPostcode(event);
    });
});
