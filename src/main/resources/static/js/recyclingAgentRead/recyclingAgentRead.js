// 첫번째 모달창
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

// 두번째 '신고하기'모달창
// document.addEventListener("DOMContentLoaded", function() {
//     // 첫번째 모달창과 두번째 모달창에서 '신고하기' 모달창을 가져옴
//     const reportButtons = document.querySelectorAll(".modalContent button:first-child");
//     // '신고하기' 모달 창
//     const reportModal = document.querySelector('.application');
//     // 모달창들의 '취소' 버튼
//     const closeButtons = document.querySelectorAll('.modalContent button:last-child');
//
//     // 각각의 '신고하기' 버튼에 클릭 이벤트 연결
//     reportButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             // 오픈된 모달창 닫기
//             closeModal(button.parentElement.parentElement.id);
//             // '신고하기' 모달창 오픈
//             reportModal.style.display = 'block';
//         });
//     });
//
//     // 각각의 '취소' 버튼에 클릭 이벤트 연결
//     closeButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             closeModal(button.parentElement.parentElement.id);
//         });
//     });
//
//     // 모달창을 닫음
//     function closeModal(modalId) {
//         const modal = document.getElementById(modalId);
//         modal.style.display = 'none';
//     }
// });

