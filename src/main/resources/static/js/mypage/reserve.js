const topBarBackward=document.querySelector(".topBarBackward");
topBarBackward.addEventListener("click",()=>{
    window.location.href="/mypage/reserve-carlist"
})

const error=document.querySelector(".error");
const inputs=document.querySelectorAll("input");

function isValidDate(dateString) {
    // 날짜 형식을 yyyy/mm/dd로 가정하고 검사
    const datePattern = /^\d{4}\/\d{2}\/\d{2}$/;
    if (!datePattern.test(dateString)) {
        return false;
    }

    const parts = dateString.split("/");
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    // JavaScript Date 객체를 사용하여 실제 날짜인지 검사
    const date = new Date(year, month - 1, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

function handleSubmit(event) {
    // 모든 입력 필드를 확인하고, 하나라도 비어 있거나 날짜 형식이 잘못된 경우 에러 메시지를 표시
    let isEmpty = false;
    let isInvalidDate = false;

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const value = input.value.trim();

        if (value === "") {
            isEmpty = true;
            break; // 하나라도 비어 있는 경우 반복문 종료
        }

        if (i === 0 || i === 1) {
            // 인덱스 0 및 1의 입력 필드는 날짜 형식을 가정
            if (!isValidDate(value)) {
                isInvalidDate = true;
                break; // 날짜 형식이 잘못된 경우 반복문 종료
            }
        }
    }
    const errorIcon = error.querySelector("svg").cloneNode(true);
    if (isEmpty) {
        error.innerHTML = "";
        error.appendChild(errorIcon);
        error.appendChild(document.createTextNode(" 방문 정보를 입력해주세요"));
        error.style.display = "block"; // 에러 메시지 표시
        event.preventDefault(); // 기본 동작 차단
    } else if (isInvalidDate) {
        error.innerHTML = "";
        error.appendChild(errorIcon);
        error.appendChild(document.createTextNode( " 올바른 날짜 형식 (yyyy/mm/dd)으로 입력해 주십시오."));
        error.style.display = "block";
        event.preventDefault();
    }
}
// 폼 제출 이벤트 리스너 등록
const applyView = document.querySelector(".applyView");
const form = document.querySelector("form");

applyView.addEventListener("click", (e) => {
    handleSubmit(e);

    if (!e.defaultPrevented) {
        form.submit();
    }
});