//큰 카테고리 색
const navList = document.getElementsByClassName("navList");
function handleClick(event) {
    if (event.target.classList[0] === "hovered") {
        event.target.classList.remove("hovered");

    } else {
        for (let i = 0; i < navList.length; i++) {
            navList[i].classList.remove("hovered");
        }
        event.target.classList.add("hovered");
    }
}
function init() {
    for (let i = 0; i < navList.length; i++) {
        navList[i].addEventListener("mouseenter", handleClick);
    }
}
init();

//네비 소 카테고리
const clickNavFirst =document.querySelector('.clickNavFirst');
const headerFa =document.querySelector('.headerFa');
const headerOpen=document.querySelector('.headerOpen');
const clickSecond =document.querySelector(".clickSecond");
const clickThird =document.querySelector(".clickThird");


//부모 요소
const apllicationTab = document.querySelector('.apllicationTab');
const newElement = document.createElement('div');
newElement.classList.add('menuWrapper'); // 클래스 추가

clickNavFirst.addEventListener('mouseenter',()=>{
    headerOpen.style.display = 'block';
    newElement.innerHTML = `
  <div class="buttonMenu">
  <a aria-current="page" class="linkActive" target="_self">
      <button class="applicationButton">
          <div class="buttonIcon"></div> 타임라인
          <div class="buttonIcon"></div>
      </button>
  </a>
</div>
  <div class="buttonMenu">
  <a aria-current="page" class="linkActive"  target="_self">
      <button class="applicationButton">
          <div class="buttonIcon"></div> 카테고리
          <div class="buttonIcon"></div>
      </button>
  </a>
</div>
<div class="buttonMenu">
<a aria-current="page" class="linkActive" target="_self">
    <button class="applicationButton">
        <div class="buttonIcon"></div> 입니다
        <div class="buttonIcon"></div>
    </button>
</a>
</div>
 <div class="buttonMenu">
<a aria-current="page" class="linkActive" target="_self">
    <button class="applicationButton">
        <div class="buttonIcon"></div> 다들파이팅
        <div class="buttonIcon"></div>
    </button>
</a>
</div>`;
    apllicationTab.appendChild(newElement);
})

headerFa.addEventListener('mouseleave',()=>{
    headerOpen.style.display = 'none';
    for (let i = 0; i < navList.length; i++) {
        navList[i].classList.remove('hovered');
    }
})


clickSecond.addEventListener('mouseenter',()=>{
    headerOpen.style.display = 'block';
    newElement.innerHTML = `
  <div class="buttonMenu">
  <a aria-current="page" class="linkActive" target="_self">
      <button class="applicationButton">
          <div class="buttonIcon"></div> 홈
          <div class="buttonIcon"></div>
      </button>
  </a>
</div>
  <div class="buttonMenu">
  <a aria-current="page" class="linkActive"  target="_self">
      <button class="applicationButton">
          <div class="buttonIcon"></div> 실무
          <div class="buttonIcon"></div>
      </button>
  </a>
</div>
<div class="buttonMenu">
<a aria-current="page" class="linkActive" target="_self">
    <button class="applicationButton">
        <div class="buttonIcon"></div> 고민중
        <div class="buttonIcon"></div>
    </button>
</a>
</div>
 <div class="buttonMenu">
<a aria-current="page" class="linkActive" target="_self">
    <button class="applicationButton">
        <div class="buttonIcon"></div> 다들파이팅
        <div class="buttonIcon"></div>
    </button>
</a>
</div>`;

//   // 부모 요소에 새로운 요소를 추가합니다.
    apllicationTab.appendChild(newElement);
});

clickThird.addEventListener('mouseenter',()=>{
    headerOpen.style.display = 'block';
    newElement.innerHTML = `
  <div class="buttonMenu">
  <a aria-current="page" class="linkActive" target="_self">
      <button class="applicationButton">
          <div class="buttonIcon"></div> 음음음
          <div class="buttonIcon"></div>
      </button>
  </a>
</div>
  <div class="buttonMenu">
  <a aria-current="page" class="linkActive"  target="_self">
      <button class="applicationButton">
          <div class="buttonIcon"></div> 요리보고
          <div class="buttonIcon"></div>
      </button>
  </a>
</div>`;

    apllicationTab.appendChild(newElement);
})

// 검색창 눌렀을때
const searchDown=document.querySelector(".searchDown");
const searchInput=document.querySelector(".searchInput");
// 검색창 클릭 이벤트 리스너
const searchInputClickHandler = () => {
    if (searchDown.style.display === 'block') {
        // 검색창이 이미 표시된 상태에서 검색창을 다시 클릭하면 숨김 처리
        searchDown.style.display = 'none';
    }
    else {
        // 검색창이 숨겨진 상태에서 클릭하면 표시
        searchDown.style.display = 'block';

        // 검색창 이외의 다른 곳을 클릭했을 때 숨김 처리하기 위한 이벤트 리스너 추가
        document.addEventListener("click", outsideClickHandler);
    }
};
// 검색창 이외의 다른 곳을 클릭했을 때 실행될 함수
const outsideClickHandler = (event) => {


    if (!searchInput.contains(event.target)) {


// 검색창 이외의 다른 곳을 클릭한 경우
        searchDown.style.display = 'none';

        // 이벤트 리스너 제거
        document.removeEventListener("click", outsideClickHandler);
    }
};



// 검색창 클릭 이벤트 리스너 등록
searchInput.addEventListener("click", searchInputClickHandler);


//모바일 검색창 클릭시 나오는 모달창?
const mobileSearch=document.querySelector(".mobileSearch");
const fullScreenMobile=document.querySelector(".fullScreenMobile");
const mobileX=document.querySelector(".mobileX");
mobileSearch.addEventListener("click",()=>{
    fullScreenMobile.style.display="block";
})
mobileX.addEventListener("click",()=>{
    fullScreenMobile.style.display="none";
})
