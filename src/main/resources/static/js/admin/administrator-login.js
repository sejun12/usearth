//focus
//input 색 고정
const inputWrappers = document.querySelectorAll('.inputWrapper');

inputWrappers.forEach(inputWrapper => {
    inputWrapper.addEventListener('focusin', () => {
        inputWrapper.classList.add('focused');
    });

    inputWrapper.addEventListener('focusout', () => {
        inputWrapper.classList.remove('focused');
    });
});

//비밀번호 text로
const passwordInput = document.getElementById('user_pw');
const eyeIcon = document.querySelector('.anticonSvg');

// 아이콘 클릭 시 비밀번호 입력 모드를 토글합니다.
eyeIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        // 아이콘 변경: 눈을 뜬 아이콘
        eyeIcon.innerHTML = `
     <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
    `;
    } else {
        passwordInput.type = 'password';
        // 아이콘 변경: 눈을 감은 아이콘
        eyeIcon.innerHTML = `
        <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
        <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
      </svg>
    `;
    }
});

// 아이디 비밀번호 작성 유무에 따른 버튼 활성/비활성화
const primary = document.querySelector(".primary");
const user_id = document.getElementById("user_id");
const antInputs = document.querySelectorAll(".antInput");

function checkInputValue() {
    primary.disabled = user_id.value === "" || passwordInput.value === "";
}

antInputs.forEach(antInput => {
    antInput.addEventListener('change', checkInputValue)
})

checkInputValue()

//아이디 비밀번호 틀릴 경우 모달창
const modalWrap = document.querySelector(".modalWrap");
const modalClose= document.querySelector(".modalClose");
const appContainer2 = document.querySelector(".appContainer2");

if(idFlag !== null){
    console.log(idFlag)
    appContainer2.innerHTML += `<div class="idAndPasswordSearch">등록되어 있지 않은 아이디입니다.</div>`
    appContainer2.innerHTML += `<div class="explanation">입력한 아이디를 다시 한번 확인해주세요.<br><br>만약 아이디를 잊어 버렸을 경우 서비스담당자에게 연락하시면 빠른 조치가 가능합니다.</div>`
    modalWrap.style.display = "block";
}else if(passwordFlag !== null){
    console.log(passwordFlag)
    appContainer2.innerHTML += `<div class="idAndPasswordSearch">옳바르지 못한 비밀번호입니다.</div>`
    appContainer2.innerHTML += `<div class="explanation">입력한 비밀번호를 다시 한번 확인해주세요.<br><br>만약 비밀번호를 잊어 버렸을 경우 서비스담당자에게 연락하시면 빠른 조치가 가능합니다.</div>`
    modalWrap.style.display = "block";
}

modalClose.addEventListener("click",()=>{
    modalWrap.style.display="none"
});

// //아이디/비밀번호 찾기에서 경고 메시지
// const warnings = document.querySelectorAll(".warning");
// const subBtn = document.querySelector(".subBtn");
//
// warnings.forEach((warning) => {
//     // 입력 필드 찾기
//     const inputField = warning.previousElementSibling;
//
//     // 입력 필드에 입력 이벤트 추가
//     inputField.addEventListener("input", () => {
//         // 입력 필드의 값이 비어 있는 경우에만 경고 메시지를 표시하도록 설정
//         if (inputField.value.trim() === "") {
//             warning.style.display = "block";
//         } else {
//             warning.style.display = "none";
//         }
//     });
// });
//
// // 제출 버튼 클릭 시 유효성 검사 수행
// subBtn.addEventListener("click", () => {
//     let isValid = true;
//
//     warnings.forEach((warning) => {
//         const inputField = warning.previousElementSibling;
//         if (inputField.value.trim() === "") {
//             warning.style.display = "block";
//             isValid = false;
//         } else {
//             warning.style.display = "none";
//         }
//     });
//
//     // 유효성 검사 통과 여부 확인
//     if (isValid) {
//         // 유효성 검사 통과: 제출 로직 실행
//         // 여기에 제출 동작을 추가하세요
//     } else {
//         // 유효성 검사 실패: 제출을 막거나 오류 메시지를 표시하세요
//         // 여기에 유효성 검사 실패 처리를 추가하세요
//     }
// });