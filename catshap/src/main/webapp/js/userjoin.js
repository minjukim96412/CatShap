$(document).ready(function() {
    // 모달 창 설정
    function setupModal(modalId, buttonId, fileUrl) {
        var $modal = $(modalId);
        var $btn = $(buttonId);
        var $modalContent = $modal.find('.modal-content');

        // 버튼 클릭 시 모달 열기
        $btn.on('click', function(event) {
            event.preventDefault(); // 기본 링크 클릭 동작 방지
            $.ajax({
                url: fileUrl,
                method: 'GET',
                success: function(data) {
                    $modalContent.html('<span class="close">&times;</span><h2>이용약관</h2><p>' + data.replace(/\n/g, '<br>') + '</p>');
                    $modal.show();
                },
                error: function() {
                    alert('파일을 불러오는 데 실패했습니다.');
                }
            });
        });

        // 모달 닫기 버튼 클릭 시 모달 닫기
        $modal.on('click', '.close', function() {
            $modal.hide();
        });

        // 모달 외부 클릭 시 모달 닫기
        $(window).on('click', function(event) {
            if ($(event.target).is($modal)) {
                $modal.hide();
            }
        });
    }

    setupModal('#termsModal', '#showTerms', './public/termsOfUseAgree.txt');
    setupModal('#privacyModal', '#showPrivacy', './public/privacyAgree.txt');
    setupModal('#mktModal', '#showMktAgree', './public/mktAgree.txt');

    // 유효성 검사 정규 표현식
    const regex = {
        usid: /^[A-Za-z0-9]{4,16}$/,
        uname: /^[가-힣a-zA-Z]+$/,  // 숫자를 허용하지 않는 정규 표현식
        unick: /^[가-힣a-zA-Z0-9]{2,10}$/,
        email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        uphone: /^\d{10,11}$/
    };

    // 필드 유효성 검사 함수
    function validateField(id, regex, errorMsg) {
        const field = $(`#${id}`);
        const errorField = $(`#${id}_error`);
        if (regex.test(field.val().replace(/-/g, ''))) { // 하이픈 제거 후 검증
            errorField.text('');
            return true;
        } else {
            errorField.text(errorMsg);
            return false;
        }
    }

    function validateUsid() {
        return validateField('usid', regex.usid, '아이디는 4~16자 영문 소문자 및 숫자만 사용할 수 있습니다.');
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

        if (validateUpass() && passwordValue === upassReValue) {
            upassReError.text('비밀번호가 일치합니다.').css('color', 'blue');
            return true;
        } else if (!validateUpass()) {
            upassReError.text('');
            return false;
        } else {
            upassReError.text('비밀번호가 일치하지 않습니다.').css('color', 'red');
            return false;
        }
    }

    function validateUnick() {
        return validateField('unick', regex.unick, '닉네임은 2~10자의 한글, 영문, 숫자만 사용할 수 있습니다.');
    }

    function validateEmail() {
        return validateField('email', regex.email, '유효한 이메일 주소를 입력하세요.');
    }

    function validateUphone() {
        return validateField('uphone', regex.uphone, '휴대전화는 10자 또는 11자의 숫자만 허용됩니다.');
    }

    function validateUname() {
        return validateField('uname', regex.uname, '이름은 한글 또는 영문만 입력 가능합니다.');
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
        return true; // 마케팅 동의는 필수는 아니지만 값은 폼 제출 전에 설정
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
            validatePrivacyAgree()
        );
    }

    // 전화번호 형식화 함수
    function formatPhoneNumber(value) {
        value = value.replace(/\D/g, ''); // 숫자만 남기기
        if (value.length <= 3) {
            return value;
        } else if (value.length <= 7) {
            return value.slice(0, 3) + '-' + value.slice(3);
        } else {
            return value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
        }
    }

    // 실시간 유효성 검사 이벤트 추가
    $('#usid').on('input', validateUsid);
    $('#upass').on('input', validateUpass);
    $('#upass_re').on('input', validateUpassRe);
    $('#unick').on('input', validateUnick);
    $('#email').on('input', validateEmail);
    $('#uphone').on('input', function() {
        $(this).val(formatPhoneNumber(this.value));
    }).on('blur', function() {
        $(this).val(formatPhoneNumber(this.value));
    });
    $('#uname').on('input', validateUname);
    $('#termsOfUseAgree').on('change', validateTermsOfUseAgree);
    $('#privacyAgree').on('change', validatePrivacyAgree);
    $('#mktAgree').on('change', validateMktAgree);

    // 중복 확인 버튼 클릭 이벤트
    $('#idCheckButton').click(function(event) {
        event.preventDefault();
        if (validateUsid()) {
            const usid = $('#usid').val();
            checkDuplicate('usid', usid);
        }
    });

    $('#nickCheckButton').click(function(event) {
        event.preventDefault();
        if (validateUnick()) {
            const unick = $('#unick').val();
            checkDuplicate('unick', unick);
        }
    });

    // 폼 제출 처리
    $('#signupForm').submit(function(event) {
        if (isFormValid()) {
            // `mktAgree` 체크 여부에 따라 값 설정
            const mktAgreeValue = $('#mktAgree').is(':checked') ? 'Y' : 'N';
            $('#mktAgree').val(mktAgreeValue);

            // 폼 데이터에서 하이픈 제거
            $('#uphone').val($('#uphone').val().replace(/-/g, ''));
            // 성공적으로 등록되었음을 알리는 메시지
            alert('등록이 완료되었습니다!');
            // 폼이 제출되도록 설정
            return true;
        } else {
            alert('폼을 올바르게 작성해 주세요.');
            event.preventDefault(); // 폼 제출 방지
            return false;
        }
    });

    // 중복 확인 함수
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

    // 주소 검색 버튼 클릭 이벤트 핸들러
    $('#addressSearchButton').on('click', function(event) {
        sample6_execDaumPostcode(event);
    });

    // 폼 제출 함수 추가
    window.submitForm = function() {
        console.log('submitForm called'); // 디버깅을 위한 로그 추가
        if (isFormValid()) {
            document.getElementById('signupForm').submit();
        }
    };

    // 취소 버튼 클릭 시 페이지 이동
    $('#cancel').on('click', function() {
        // user_login.jsp로 리다이렉트
        window.location.href = 'user_login.jsp';
    });
});




