// 초기 좋아요 상태
var isLiked = false;

// 좋아요 버튼을 클릭했을 때 실행될 함수
function toggleLike() {
    // 현재 좋아요 수를 가져옵니다.
    var likeCount = parseInt(document.querySelector(".body2.breakWord.ml6").innerText);

    // 좋아요 상태를 토글합니다.
    if (isLiked) {
        // 취소 상태로 변경
        likeCount -= 1;
        isLiked = false;
    } else {
        // 좋아요 상태로 변경
        likeCount += 1;
        isLiked = true;
    }

    // 좋아요 수를 업데이트합니다.
    document.querySelector(".body2.breakWord.ml6").innerText = likeCount;

    // 좋아요 버튼의 색상을 변경합니다.
    var likeButton = document.querySelector(".narrowBtn");
    if (isLiked) {
        likeButton.style.color = "rgb(233, 37, 37)";
    } else {
        likeButton.style.color = "rgb(173, 179, 184)";
    }

    // SVG 아이콘의 색상을 변경합니다.
    var svgIcon = document.querySelector(".icon.mr4");
    if (isLiked) {
        svgIcon.style.fill = "rgb(233, 37, 37)";
    } else {
        svgIcon.style.fill = "rgb(207, 212, 215)";
    }

    // span 텍스트의 색상을 변경합니다.
    var spanText = document.querySelector(".body2.breakWord.ml6");
    if (isLiked) {
        spanText.style.color = "rgb(233, 37, 37)";
    } else {
        spanText.style.color = "rgb(173, 179, 184)";
    }
}

// 좋아요 버튼에 클릭 이벤트 리스너를 추가합니다.
// var likeButton = document.querySelector(".narrowBtn");
// likeButton.addEventListener("click", toggleLike);

// 날짜 폼 수정
$(document).ready(function() {
    let elem = $('.body2.mb12.breakWord.mb12');
    let text = elem.text().replaceAll('-', '.');
    text = text.slice(0, 10);
    elem.text(text);
});

$('.topBarBackward').on("click", e=>{
    location.href = `/notice/announcement`;
})
