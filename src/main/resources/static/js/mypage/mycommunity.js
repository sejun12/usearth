const topBarBackward=document.querySelector(".topBarBackward");
topBarBackward.addEventListener("click",()=>{
    window.location.href="/mypage/mypage"
})

const swiperSlides =document.querySelectorAll(".swiperSlide ");

// 각 swiperSlide 요소에 클릭 이벤트 리스너를 추가
swiperSlides.forEach((slide) => {
    slide.addEventListener("click", (e) => {
        e.preventDefault();
        // 현재 클릭한 슬라이드에 active 클래스 추가
        slide.classList.add("active");


        // 다른 슬라이드의 active 클래스 제거
        swiperSlides.forEach((otherSlide) => {
            if (otherSlide !== slide) {
                otherSlide.classList.remove("active");
            }
        });
    });
});

