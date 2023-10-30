// 여기에 추가된 JavaScript 코드를 넣어주세요.
// document.addEventListener("DOMContentLoaded", function () {
//     const paginationBtns = document.querySelectorAll(".paginationBtn");
//     const pageLinks = document.querySelectorAll(".pageLink");
//
//     // 초기 페이지 설정
//     let currentPage = 1;
//     togglePaginationButtons(currentPage);
//
//     // 페이지 버튼 클릭 이벤트 처리
//     paginationBtns.forEach((btn, index) => {
//         btn.addEventListener("click", () => {
//             if (index === 0 && currentPage > 1) {
//                 // (1) - 1 버튼을 누른 경우 (첫 번째 페이지에서는 작동하지 않음)
//                 currentPage--;
//             } else if (index === 2 && currentPage < pageLinks.length) {
//                 // (1) - 2 버튼을 누른 경우 (마지막 페이지에서는 작동하지 않음)
//                 currentPage++;
//             } else if (index === 1) {
//                 // (2) - 1 또는 (2) - 2 버튼을 누른 경우
//                 currentPage = parseInt(pageLinks[index - 1].textContent);
//             }
//
//             togglePaginationButtons(currentPage);
//         });
//     });
//
//     function togglePaginationButtons(currentPage) {
//         paginationBtns[0].classList.toggle("disable", currentPage === 1);
//         paginationBtns[2].classList.toggle("disable", currentPage === pageLinks.length);
//
//         pageLinks.forEach((link, index) => {
//             link.parentNode.classList.toggle("active", index + 1 === currentPage);
//         });
//     }
// });

// 페이지 이동
$("a.change-page").on("click", function(e){
    e.preventDefault();
    let page = $(this).attr("href");
    let type = $("select[name=type]").val();
    let keyword = $("#keyword").val();
    location.href = `/notice/announcement?page=${page}`;
});

// 상세보기 페이지 이동
$('.goToDetail').click(function() {
    $(this).find('.goToPostDetail').submit();
});