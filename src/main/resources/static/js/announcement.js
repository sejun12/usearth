notice.jsdocument.addEventListener("DOMContentLoaded", function () {
    const paginationBtns = document.querySelectorAll(".paginationBtn");
    const pageLinks = document.querySelectorAll(".pageLink");
    const firstPageContent = document.getElementById("firstPageContent");
    const secondPageContent = document.getElementById("secondPageContent");

    // 초기 페이지 설정
    let currentPage = 1;
    togglePaginationButtons(currentPage);

    // 페이지 버튼 클릭 이벤트 처리
    paginationBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            if (index === 0 && currentPage > 1) {
                // (1) - 1 버튼을 누른 경우 (첫 번째 페이지에서는 작동하지 않음)
                currentPage--;
            } else if (index === 2 && currentPage < pageLinks.length) {
                // (1) - 2 버튼을 누른 경우 (마지막 페이지에서는 작동하지 않음)
                currentPage++;
            } else if (index === 1) {
                // (2) - 1 또는 (2) - 2 버튼을 누른 경우
                currentPage = parseInt(pageLinks[index - 1].textContent);
            }

            togglePaginationButtons(currentPage);
        });
    });

    function togglePaginationButtons(currentPage) {
        paginationBtns[0].classList.toggle("disable", currentPage === 1);
        paginationBtns[2].classList.toggle("disable", currentPage === pageLinks.length);

        pageLinks.forEach((link, index) => {
            link.parentNode.classList.toggle("active", index + 1 === currentPage);
        });

        // 페이지 전환 시 첫 번째 페이지와 두 번째 페이지의 내용을 토글
        if (currentPage === 1) {
            firstPageContent.style.display = "block";
            secondPageContent.style.display = "none";
        } else if (currentPage === 2) {
            firstPageContent.style.display = "none";
            secondPageContent.style.display = "block";
        }
    }
});
