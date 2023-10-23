//뒤로 가기 함수
const topBarBackward = document.querySelector(".topBarBackward");
topBarBackward.addEventListener("click", () => {
    window.location.href = "/mypage/mypage";
});
$(function () {
    let isArrowRotated = false;
    const category = $("#category");
    const regionDropdown = $("#regionDropdown");
    const categoryIcon = $("#categoryIcon");
    const categoryDropdown = $("#categoryDropdown");

    // 카테고리 함수
    category.on("click", function () {
        if (regionDropdown.hasClass("active")) {
            regionDropdown.removeClass("active");
            $("#regionIcon").removeClass("rotate");
        }
    category.toggleClass("active");
    categoryIcon.toggleClass("rotate");
    categoryDropdown.toggleClass("active");

    // SVG 아이콘 회전 코드 추가
    isArrowRotated = !isArrowRotated; // 상태 변경
    if (isArrowRotated) {
        categoryIcon.css("transform", "rotate(180deg)");
    } else {
        categoryIcon.css("transform", "rotate(0deg)");
    }
});
$(".category").on("click", function () {
    const categoryName = $(this).find("div").text();
    $("#categoryInput").val(categoryName);
    categoryDropdown.removeClass("active");
    categoryIcon.removeClass("rotate");
    categoryIcon.css("transform", "rotate(0deg)");
});
});

const input = document.querySelector("input[name=complainTitle]");
const textarea = document.querySelector("textarea");
const category = document.querySelector("input[name=categoryComplainName]");

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    const title = input.value.trim();


    const content = textarea.value.trim();
    const categoryValue = category.value.trim();

    const error = document.querySelector(".error");
    const errorIcon = error.querySelector("svg").cloneNode(true);
    error.innerHTML = "";
    error.appendChild(errorIcon);

    if (!title) {
        error.appendChild(document.createTextNode("제목을 입력해주세요."));
    } else if (!content) {
        error.appendChild(document.createTextNode("내용을 입력해주세요."));
    } else if (!categoryValue) {
        error.appendChild(document.createTextNode("카테고리를 선택해주세요."));
    } else {

        error.style.display = "none";

        return;
    }

    error.style.display = "block";
    event.preventDefault();
});