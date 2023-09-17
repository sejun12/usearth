// $(document).ready(function() {
//     $('.freeContentNotice').hide();
//
//     $('.usEarthService').click(function() {
//         $('.freeContentNotice').slideToggle('fast');
//     });
// });

// 어스어스 서비스 접히고, 닫는 기능
document.addEventListener("DOMContentLoaded", function() {
    const serviceElement = document.querySelector('.usEarthService');

    const contentElement = document.querySelector('.freeContentNotice');

    serviceElement.addEventListener('click', function() {
        if (contentElement.style.display === "none" || contentElement.style.display === "") {
            contentElement.style.display = "block";
            // smooth한 효과를 위한 코드
            contentElement.style.maxHeight = contentElement.scrollHeight + "px";
        } else {
            contentElement.style.maxHeight = "0";  // smooth한 효과를 위한 코드
            // smooth 효과 후에 display 변경
            setTimeout(function() {
                contentElement.style.display = "none";
            }, 300); // 0.3s와 같은 시간을 설정
        }
    });
});


// // 모달창
// const modal = document.getElementById("modalWindow");
// const qnaBtn = document.querySelector(".boxQnaButton");
// const close = document.querySelector(".modalClose");
// const account = document.querySelector(".naverClose");
//
// // 질문작성하기 버튼을 클릭했을 때 모달 창을 열기
// qnaBtn.onclick = function() {
//     modal.style.display = "block";
// }
//
// // x (닫기) 버튼을 클릭했을 때 모달 창을 닫기
// close.onclick = function() {
//     modal.style.display = "none";
// }
//
// // 모달 창 외부를 클릭했을 때 모달 창을 닫기
// window.onclick = function(e) {
//     if (e.target == modal) {
//         modal.style.display = "none";
//     }
// }

