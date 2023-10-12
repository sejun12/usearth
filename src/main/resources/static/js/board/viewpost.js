// 첫번째 모달창
// function openModal(modalId) {
//     const modal = document.getElementById(modalId);
//     const overlay = document.getElementById("overlay");
//
//     modal.style.transform = "translateY(0)";
//     modal.style.height = "33%";
//     overlay.style.display = "block";
// }
//
// function closeModal(modalId) {
//     const modal = document.getElementById(modalId);
//     const overlay = document.getElementById("overlay");
//
//     modal.style.transform = "translateY(100%)";
//     modal.style.height = "0";
//     overlay.style.display = "none";
// }
//
// const singoButtons = document.querySelectorAll(".singo");
// const application = document.querySelector(".application");
// // const overlay = document.getElementById("overlay"); // overlay 요소를 가져옵니다.
// const overlay = document.getElementById("overlay");
// // 초기에 overlay를 숨김
// overlay.style.display = "none";
//
// singoButtons.forEach((singo) => {
//     singo.addEventListener("click", () => {
//         const modalId = "modalFirst"; // 기존 모달의 ID를 여기에 입력하세요
//         closeModal(modalId); // 기존 모달 닫기
//         application.style.display = "block"; // application 보이기
//         console.log(application)
//     });
// });
//
//
// const modalFirst = document.getElementById("modalFirst"); // modalFirst의 참조를 미리 가져옵니다.
//
// // singo 모달창의 닫기 버튼에 대한 이벤트 리스너 설정
// const singoCloseBtn = document.querySelector('.singoCloseButton'); // "singo" 모달창의 닫기 버튼 선택자를 여기에 넣어주세요.
// singoCloseBtn.addEventListener('click', closeSingoModal);
//
// function closeSingoModal() {
//     modalFirst.style.transform = "translateY(100%)";
//     modalFirst.style.height = "0";
//
//     // overlay의 display를 none으로 변경하여 검정색 배경을 숨깁니다.
//     const overlay = document.getElementById("overlay");
//     overlay.style.display = "none";
// }

// function openModal(modalId) {
//     const modal = document.getElementById(modalId);
//     const overlay = document.getElementById("overlay");
//
//     modal.style.transform = "translateY(0)";
//     modal.style.height = "33%";
//     overlay.style.display = "block";
// }






function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById("overlay");

    modal.style.transform = "translateY(0)";
    modal.style.height = "33%";
    overlay.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById("overlay");

    modal.style.transform = "translateY(100%)";
    modal.style.height = "0";
    overlay.style.display = "none";
}

const singoButtons = document.querySelectorAll(".singo");
const application = document.querySelector(".application");
const overlay = document.getElementById("overlay");

// 초기에 overlay를 숨김
overlay.style.display = "none";
application.style.display = "none"; // 세준씨 코드에 이 줄 추가 modalFirst 대신 application 클래스 사용해 봄

singoButtons.forEach((singo) => {
    singo.addEventListener("click", () => {
        const modalId = "modalFirst";
        closeModal(modalId);
        application.style.display = "block";  //세준씨 코드에 이 줄 추가
    });
});

// singo 클래스 버튼 : 이벤트리스너 설정해봄
const singoCloseBtn = document.querySelector('.modalCloseButton');
singoCloseBtn.addEventListener('click', closeSingoModal);

function closeSingoModal() {
    application.style.display = "none"; // application 숨기기

    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}



