// 카테고리 버튼 클릭 시 동작
var rangeCategoryBtn = document.getElementById("rangeCategoryBtn");
var rangeCategory = document.getElementById("rangeCategory");

rangeCategoryBtn.addEventListener("click", function() {
    // 카테고리 버튼의 위치를 기준으로 카테고리 창의 위치를 조정
    var rect = rangeCategoryBtn.getBoundingClientRect();
    rangeCategory.style.left = rect.left + "px";
    rangeCategory.style.top = rect.bottom + "px";

    if (rangeCategory.style.display === "block") {
        rangeCategory.style.display = "none";
    } else {
        rangeCategory.style.display = "block";
    }
});

// 카테고리 목록 항목 클릭 시 동작
var categoryButtons = document.querySelectorAll(".categoryBtns");
categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var categoryValue = this.getAttribute("data-option-value");
        var categorySpan = document.getElementById("categorySpan");
        categorySpan.textContent = categoryValue;
        rangeCategory.style.display = "none";
    });
});

// 초기 선택 카테고리 설정 (예: "카테고리 전체")
var initialCategoryValue = "카테고리 전체";
var categorySpan = document.getElementById("categorySpan");
categorySpan.textContent = initialCategoryValue;
    // "작성 완료" 버튼 클릭 시 동작 (임의로 알림 메시지 출력)
    document.querySelector(".myInfoDivBtn").addEventListener("click", function() {
    var writeNote = document.getElementById("writeNote").value;
    var categoryValue = document.getElementById("categorySpan").textContent;

    if (categoryValue === "카테고리 전체" || writeNote.trim() === "") {
    alert("카테고리와 작성 내용을 모두 입력하세요.");
} else {
    alert("공지사항 작성이 완료되었습니다.\n카테고리: " + categoryValue + "\n작성 내용: " + writeNote);
}
});

    // "작성 내용"의 길이 확인 및 표시
    var writeNoteTextarea = document.getElementById("writeNote");
    var textCount = document.querySelector(".textCount");

    writeNoteTextarea.addEventListener("input", function() {
    var maxLength = 1000; // 최대 길이
    var currentLength = this.value.length;

    if (currentLength > maxLength) {
    this.value = this.value.substring(0, maxLength);
    currentLength = maxLength;
}

    textCount.textContent = currentLength + "/" + maxLength;
});

