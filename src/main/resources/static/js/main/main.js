



//큰 카테고리 색
// const navList = document.getElementsByClassName("navList");
// function handleClick(event) {
//     if (event.target.classList[0] === "hovered") {
//         event.target.classList.remove("hovered");
//
//     } else {
//         for (let i = 0; i < navList.length; i++) {
//             navList[i].classList.remove("hovered");
//         }
//         event.target.classList.add("hovered");
//     }
// }
// function init() {
//     for (let i = 0; i < navList.length; i++) {
//         navList[i].addEventListener("mouseenter", handleClick);
//     }
// }
// init();
//
// //네비 소 카테고리
// const clickNavFirst =document.querySelector('.clickNavFirst');
// const headerFa =document.querySelector('.headerFa');
// const headerOpen=document.querySelector('.headerOpen');
// const clickSecond =document.querySelector(".clickSecond");
// const clickThird =document.querySelector(".clickThird");
//
//
// //부모 요소
// const apllicationTab = document.querySelector('.apllicationTab');
// const newElement = document.createElement('div');
// newElement.classList.add('menuWrapper'); // 클래스 추가
//
// clickNavFirst.addEventListener('mouseenter',()=>{
//     headerOpen.style.display = 'block';
//     newElement.innerHTML = `
//   <div class="buttonMenu">
//   <a aria-current="page" class="linkActive" target="_self">
//       <button class="applicationButton">
//           <div class="buttonIcon"></div> 타임라인
//           <div class="buttonIcon"></div>
//       </button>
//   </a>
// </div>
//   <div class="buttonMenu">
//   <a aria-current="page" class="linkActive"  target="_self">
//       <button class="applicationButton">
//           <div class="buttonIcon"></div> 카테고리
//           <div class="buttonIcon"></div>
//       </button>
//   </a>
// </div>
// <div class="buttonMenu">
// <a aria-current="page" class="linkActive" target="_self">
//     <button class="applicationButton">
//         <div class="buttonIcon"></div> 입니다
//         <div class="buttonIcon"></div>
//     </button>
// </a>
// </div>
//  <div class="buttonMenu">
// <a aria-current="page" class="linkActive" target="_self">
//     <button class="applicationButton">
//         <div class="buttonIcon"></div> 다들파이팅
//         <div class="buttonIcon"></div>
//     </button>
// </a>
// </div>`;
//     apllicationTab.appendChild(newElement);
// })
//
// headerFa.addEventListener('mouseleave',()=>{
//     headerOpen.style.display = 'none';
//     for (let i = 0; i < navList.length; i++) {
//         navList[i].classList.remove('hovered');
//     }
// })
//
//
// clickSecond.addEventListener('mouseenter',()=>{
//     headerOpen.style.display = 'block';
//     newElement.innerHTML = `
//   <div class="buttonMenu">
//   <a aria-current="page" class="linkActive" target="_self">
//       <button class="applicationButton">
//           <div class="buttonIcon"></div> 홈
//           <div class="buttonIcon"></div>
//       </button>
//   </a>
// </div>
//   <div class="buttonMenu">
//   <a aria-current="page" class="linkActive"  target="_self">
//       <button class="applicationButton">
//           <div class="buttonIcon"></div> 실무
//           <div class="buttonIcon"></div>
//       </button>
//   </a>
// </div>
// <div class="buttonMenu">
// <a aria-current="page" class="linkActive" target="_self">
//     <button class="applicationButton">
//         <div class="buttonIcon"></div> 고민중
//         <div class="buttonIcon"></div>
//     </button>
// </a>
// </div>
//  <div class="buttonMenu">
// <a aria-current="page" class="linkActive" target="_self">
//     <button class="applicationButton">
//         <div class="buttonIcon"></div> 다들파이팅
//         <div class="buttonIcon"></div>
//     </button>
// </a>
// </div>`;
//
// //   // 부모 요소에 새로운 요소를 추가합니다.
//     apllicationTab.appendChild(newElement);
// });
//
// clickThird.addEventListener('mouseenter',()=>{
//     headerOpen.style.display = 'block';
//     newElement.innerHTML = `
//   <div class="buttonMenu">
//   <a aria-current="page" class="linkActive" target="_self">
//       <button class="applicationButton">
//           <div class="buttonIcon"></div> 음음음
//           <div class="buttonIcon"></div>
//       </button>
//   </a>
// </div>
//   <div class="buttonMenu">
//   <a aria-current="page" class="linkActive"  target="_self">
//       <button class="applicationButton">
//           <div class="buttonIcon"></div> 요리보고
//           <div class="buttonIcon"></div>
//       </button>
//   </a>
// </div>`;
//
//     apllicationTab.appendChild(newElement);
// })

// // 검색창 눌렀을때
// const searchDown=document.querySelector(".searchDown");
// const searchInput=document.querySelector(".searchInput");
// // 검색창 클릭 이벤트 리스너
// const searchInputClickHandler = () => {
//     if (searchDown.style.display === 'block') {
//         // 검색창이 이미 표시된 상태에서 검색창을 다시 클릭하면 숨김 처리
//         searchDown.style.display = 'none';
//     }
//     else {
//         // 검색창이 숨겨진 상태에서 클릭하면 표시
//         searchDown.style.display = 'block';
//
//         // 검색창 이외의 다른 곳을 클릭했을 때 숨김 처리하기 위한 이벤트 리스너 추가
//         document.addEventListener("click", outsideClickHandler);
//     }
// };
// // 검색창 이외의 다른 곳을 클릭했을 때 실행될 함수
// const outsideClickHandler = (event) => {
//
//
//     if (!searchInput.contains(event.target)) {
//
//
// // 검색창 이외의 다른 곳을 클릭한 경우
//         searchDown.style.display = 'none';
//
//         // 이벤트 리스너 제거
//         document.removeEventListener("click", outsideClickHandler);
//     }
// };
//
//
//
// // 검색창 클릭 이벤트 리스너 등록
// searchInput.addEventListener("click", searchInputClickHandler);





// 첫 화면에서는 첫번째 배너가 보이지만 이 함수가 실행되는 순간 이제 두 번째 배너로 넘어가는 것이다.
function autoSlide() {
    // 이동되는 데 걸리는 시간은 0.5초
    banner.style.transition = "transform 0.5s";
    // 마지막 슬라이드일 때
    // 6번 뒤에 1번 배치시킨다.
    // 6번에서 1번으로 슬라이드 진행
    // 0s를 줘서 원래 1번 위치로 이동(슬라이드 효과는 안보임)
    // currentIndex++;
    count++;
    // 변경된 "index" 값을 "--index" 사용자 정의 속성에 설정
// worm.style.setProperty("--index", currentIndex);
// indexSwiperPagination.style.setProperty("--index", currentIndex);
    if (count == 4) {
        buttons[count - 1].style.backgroundColor = "transparent";
        banner.style.transform = "translate(-" + 100 * (count + 1) + "%)";
        setTimeout(function () {
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-100%)";
        }, 500);
        count = 0;
        buttons[count].style.backgroundColor = "white";
    } else {
        // 처음에는 첫번째 배너가 선택되어 있기 때문에 다음으로 넘어가면서 이전 배너부분의 버튼 색을 돌려준다.
        buttons[count - 1].style.backgroundColor = "transparent";
        // 이번에 보여질 배너부분의 버튼 색을 검은색으로 돌려준다.
        buttons[count].style.backgroundColor = "white";
        // 왼쪽으로 -90 * (count + 1) 만큼 이동한다.
        // 왜 count에 + 1을 한 것인가? : 가장 앞에 6번 배너부터 시작되기 때문이다.
        banner.style.transform = "translate(-" + 100 * (count + 1) + "%)";
    }
    // 초기화할 버튼객체를 temp에 담는다.
    temp = buttons[count];
}

// 무한 반복
const banner = document.querySelector(".swiperWrap");
const buttons = document.querySelectorAll(".swiperPaginationbBullet");
const worm =document.querySelector(".worm");
const indexSwiperPagination=document.querySelector('.indexSwiperPagination');
// 현재 "index" 값을 가져오고 1을 증가시킴
// let currentIndex = parseInt(worm.style.getPropertyValue("--index")) || 0;


let count = 0;
temp = buttons[count];
let firstDiv = document.createElement("div");
firstDiv.classList.add('swiperSlide');
let lastDiv = document.createElement("div");
lastDiv.classList.add('swiperSlide');
// 가장 마지막에 첫번째 배너를 이어 붙인다, 슬라이드 모션이 자연스럽게 1번으로 돌아가게 하기 위함
firstDiv.innerHTML = `
  <div class="indexFilter" style="background-color: blue">
      <div class="swiperContainer" style="background-color: inherit;">
          <div class="newRow">
          <section class="swiperContentContainer">
              <div class="swiperController">
                  <div  class="swiperControllerSub"style="color: rgb(255, 255, 255); font-weight: 300;"></div>
                   <div class="swiperControllerMainText"style="color: rgb(255, 255, 255);">오늘 밤, 12시<br>
                      <p style="font-weight:300">놓치면 사라지는</p>할인캠프</div>
                          </div> 
                      <img src="/images/main/main-banner.jpg" alt="" class="swiperImage">
                  </section>
              </div>
          </div>
      </div>
  `;
banner.appendChild(firstDiv);

// 가장 첫번째에 마지막 배너를 이어 붙인다, 이전 버튼 클릭 시 슬라이드 모션이 자연스럽게 6번으로 돌아가게 하기 위함
lastDiv.innerHTML = `
  <div class="indexFilter" style="background-color: rgb(0, 140, 95);">
      <div class="swiperContainer" style="background-color: inherit;">
          <div class="newRow">
          <section class="swiperContentContainer">
              <div class="swiperController">
                  <div  class="swiperControllerSub"style="color: rgb(255, 255, 255); font-weight: 300;"></div>
                   <div class="swiperControllerMainText"style="color: rgb(255, 255, 255);">오늘 밤, 12시<br>
                      <p style="font-weight:300">놓치면 사라지는</p>할인캠프</div>
                          </div> 
                          <img src="/images/main/mainBanner4.jpg" alt="" class="swiperImage">
                  </section>
              </div>
          </div>
      </div>
  `;
const referenceNode = banner.querySelector("div:nth-child(1)");
banner.insertBefore(lastDiv, referenceNode);


// 첫번째 버튼이 무조건 첫번째 배너이기 때문에 검은색 칠하고 시작
buttons[count].style.backgroundColor = "white";

// 첫번째 배너는 6번이니까 왼쪽으로 한 번 밀어서 1번 보이게 함.
banner.style.transform = "translate(-100%)";

// 4초마다 슬라이드 이동
let inter = setInterval(autoSlide, 4000);

// 원하는 번호의 배너 보기
// 각 버튼마다 클릭 이벤트 적용

// // 버튼을 광클하지 못하게 막아주는 FLAG
let numberButtonCheck = true;

buttons.forEach((v, i, btns) => {
    // 각 버튼에 click이벤트를 걸어줌.
    btns[i].addEventListener("click", function () {
        // 아래의 얍삽한 방법으로 인해 0s로 변할 수 있기 때문에 무조건 0.5s로 설정하고 시작
        banner.style.transition = "transform 0.5s";
        if (numberButtonCheck) {
            // 0.5초가 지나고 나서 클릭했거나 처음 클릭하거나
            numberButtonCheck = false; // 누르자마자 바로 false
            clearInterval(inter); // autoSlide 타이머 제거, 동시에 돌아가면 안됨.
            count = i; // 클릭한 버튼의 인덱스를 배너의 번호로 설정
            temp.style.backgroundColor = "transparent"; // 이전에 적용된 버튼의 배경을 원상복구.
            buttons[count].style.backgroundColor = "white"; // 클릭한 버튼의 배경을 검은색.
            banner.style.transform = "translate(-" + 100 * (count + 1) + "%)"; // 클릭한 버튼의 인덱스번호를 통해 배너번호로 이동
            temp = buttons[count]; // 지금 선택된 버튼 객체 담아주기
            inter = setInterval(autoSlide, 4000); //버튼 클릭 다했으니까 auto slide 다시 작동
            // 클릭하고 나서 할 거 다 하고 0.5초 후에 FLAG를 true로 변경
            // 0.5초 안에는 다시 클릭 못하게 막아주기
            setTimeout(function () {
                numberButtonCheck = true;
            }, 500);
        }
    });
});

const arrows = document.querySelectorAll(".swiperButton");
const swiperControllerEx=document.querySelector(".swiperControllerEx");
//이전 다음 버튼 나오게
swiperControllerEx.addEventListener("mouseenter", function () {
    // 마우스가 배너 영역 위로 올라갈 때
    arrows.forEach((arrow) => {
        arrow.style.opacity = "1"; // 버튼 표시
    });
});

swiperControllerEx.addEventListener("mouseleave", function () {
    // 마우스가 배너 영역 밖으로 나갈 때
    arrows.forEach((arrow) => {
        arrow.style.opacity = "0"; // 버튼 숨김
    });
});

// // 이전 버튼, 다음 버튼 구현
let arrowButtonCheck = true;
arrows.forEach((arrow) => {
    arrow.addEventListener("click", function () {
        if (arrowButtonCheck) {
            arrowButtonCheck = false;
            clearInterval(inter);
            banner.style.transition = "transform 0.5s";
            let arrowType = arrow.classList[1];
            if (arrowType == "Prev") {
                count--;
                if (count == -1) {
                    banner.style.transform = "translate(0%)";
                    setTimeout(function () {
                        banner.style.transition = "transform 0s";
                        banner.style.transform = "translate(-400%)";
                    }, 500);
                    count = 3;
                } else {
                    banner.style.transform = "translate(-" + 100 * (count + 1) + "%)";
                }
            } else {
                count++;
                if (count == 4) {
                    banner.style.transform = "translate(-" + 100 * (count + 1) + "%)";
                    setTimeout(function () {
                        banner.style.transition = "transform 0s";
                        banner.style.transform = "translate(-100%)";
                    }, 500);
                    count = 0;
                } else {
                    banner.style.transform = "translate(-" + 100 * (count + 1) + "%)";
                }
            }
            temp.style.backgroundColor = "transparent";
            temp = buttons[count];
            buttons[count].style.backgroundColor = "white";
            inter = setInterval(autoSlide, 4000);
            setTimeout(function () {
                arrowButtonCheck = true;
            }, 500);
        }
    });
});

// //모바일 검색창 클릭시 나오는 모달창?
// const mobileSearch=document.querySelector(".mobileSearch");
// const fullScreenMobile=document.querySelector(".fullScreenMobile");
// const mobileX=document.querySelector(".mobileX");
// mobileSearch.addEventListener("click",()=>{
//     fullScreenMobile.style.display="block";
// })
// mobileX.addEventListener("click",()=>{
//     fullScreenMobile.style.display="none";
// })
// 화면 크기가 변경될 때 크기 조정
window.addEventListener("resize", function() {
    if (window.innerWidth >= 768) {
        setSVGSize(48, 48);
    } else {
        setSVGSize(36, 36);
    }
});
// // 창 너비를 확인하여 웹과 앱 SVG
if (window.innerWidth >= 768) {
    // 웹 환경에서는 SVG의 width와 height를 48
    setSVGSize(48, 48);
} else {
    // 앱 환경에서는 SVG의 width와 height를 36
    setSVGSize(36, 36);
}

// SVG의 width와 height를 설정하는 함수
function setSVGSize(width, height) {
    const svgElements = document.querySelectorAll(".communityIcon");
    svgElements.forEach(function(svgElement) {
        svgElement.setAttribute("width", width);
        svgElement.setAttribute("height", height);
    });
}

// 마우스 touch로 움직이는 슬라이드
// 요소 & 사이즈
const list = document.querySelectorAll('.mainTwoSwiper');
const listScrollWidth = list[0].scrollWidth;
const listClientWidth = list[0].clientWidth;
// 이벤트마다 갱신될 값
let startX = 0;
let nowX = 0;
let endX = 0;
let listX = 0;

const getClientX = (e) => {
    let clientX = 0;

    if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX; // 터치 이벤트일 때
    } else if (e.clientX !== undefined) {
        clientX = e.clientX; // 마우스 이벤트일 때
    }

    return clientX;
};
const getTranslateX = () => {
    return parseInt(getComputedStyle(list[0]).transform.split(/[^\-0-9]+/g)[5]);
};
const setTranslateX = (x) => {
    list[0].style.transform = `translateX(${x}px)`;
};

const onScrollStart = (e) => {
    startX = getClientX(e);
    window.addEventListener('mousemove', onScrollMove);
    window.addEventListener('touchmove', onScrollMove);
    window.addEventListener('mouseup', onScrollEnd);
    window.addEventListener('touchend', onScrollEnd);
};
const bindEvents = () => {
    list[0].addEventListener('mousedown', onScrollStart);
    list[0].addEventListener('touchstart', onScrollStart);
};
bindEvents();
const onScrollMove = (e) => {
    nowX = getClientX(e);
    setTranslateX(listX + nowX - startX);
};
const onScrollEnd = (e) => {
    endX = getClientX(e)
    listX = getTranslateX();

    if (listX > 0) {
        setTranslateX(0);
        list[0].style.transition = `all 0.3s ease`;
        listX = 0;
    } else if (listX < listClientWidth - listScrollWidth) {
        setTranslateX(listClientWidth - listScrollWidth);
        list[0].style.transition = `all 0.3s ease`;
        listX = listClientWidth - listScrollWidth;
    }

    window.removeEventListener('mousedown', onScrollStart);
    window.removeEventListener('touchstart', onScrollStart);
    window.removeEventListener('mousemove', onScrollMove);
    window.removeEventListener('touchmove', onScrollMove);
    window.removeEventListener('mouseup', onScrollEnd);
    window.removeEventListener('touchend', onScrollEnd);

    setTimeout(() => {
        bindEvents();
        list[0].style.transition = '';
    }, 500);
};

//2번째
// 마우스 touch로 움직이는 슬라이드
// 요소 & 사이즈
const list2 = document.querySelectorAll('.mainTwoSwiper');
const listScrollWidth2 = list2[1].scrollWidth;
const listClientWidth2 = list2[1].clientWidth;

// 이벤트마다 갱신될 값
let startX2 = 0;
let nowX2 = 0;
let endX2 = 0;
let listX2 = 0;

const getClientX2 = (e) => {
    let clientX = 0;

    if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX; // 터치 이벤트일 때
    } else if (e.clientX !== undefined) {
        clientX = e.clientX; // 마우스 이벤트일 때
    }

    return clientX;
};

const getTranslateX2 = () => {
    return parseInt(getComputedStyle(list2[1]).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX2 = (x) => {
    list2[1].style.transform = `translateX(${x}px)`;
};

const onScrollStart2 = (e) => {
    startX2 = getClientX2(e); // getClientX2로 수정
    window.addEventListener('mousemove', onScrollMove2); // onScrollMove2로 수정
    window.addEventListener('touchmove', onScrollMove2); // onScrollMove2로 수정
    window.addEventListener('mouseup', onScrollEnd2); // onScrollEnd2로 수정
    window.addEventListener('touchend', onScrollEnd2); // onScrollEnd2로 수정
};

const bindEvents2 = () => {
    list2[1].addEventListener('mousedown', onScrollStart2); // onScrollStart2로 수정
    list2[1].addEventListener('touchstart', onScrollStart2); // onScrollStart2로 수정
};

bindEvents2();

const onScrollMove2 = (e) => {
    nowX2 = getClientX2(e); // getClientX2로 수정
    setTranslateX2(listX2 + nowX2 - startX2);
};

const onScrollEnd2 = (e) => {
    endX2 = getClientX2(e); // getClientX2로 수정
    listX2 = getTranslateX2();

    if (listX2 > 0) {
        setTranslateX2(0);
        list2[1].style.transition = `all 0.3s ease`;
        listX2 = 0;
    } else if (listX2 < listClientWidth2 - listScrollWidth2) {
        setTranslateX2(listClientWidth2 - listScrollWidth2);
        list2[1].style.transition = `all 0.3s ease`;
        listX2 = listClientWidth2 - listScrollWidth2;
    }

    window.removeEventListener('mousedown', onScrollStart2); // onScrollStart2로 수정
    window.removeEventListener('touchstart', onScrollStart2); // onScrollStart2로 수정
    window.removeEventListener('mousemove', onScrollMove2); // onScrollMove2로 수정
    window.removeEventListener('touchmove', onScrollMove2); // onScrollMove2로 수정
    window.removeEventListener('mouseup', onScrollEnd2); // onScrollEnd2로 수정
    window.removeEventListener('touchend', onScrollEnd2); // onScrollEnd2로 수정

    setTimeout(() => {
        bindEvents2();
        list2[1].style.transition = '';
    }, 500);
};

//3번째 슬라이드
// 마우스 touch로 움직이는 슬라이드
// 요소 & 사이즈
const list3 = document.querySelector('.forthSwiperWrap');
const listScrollWidth3 = list3.scrollWidth;
const listClientWidth3 = list3.clientWidth;

// 이벤트마다 갱신될 값
let startX3 = 0;
let nowX3 = 0;
let endX3 = 0;
let listX3 = 0;

const getClientX3 = (e) => {
    let clientX = 0;

    if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX; // 터치 이벤트일 때
    } else if (e.clientX !== undefined) {
        clientX = e.clientX; // 마우스 이벤트일 때
    }

    return clientX;
};

const getTranslateX3 = () => {
    return parseInt(getComputedStyle(list3).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX3 = (x) => {
    list3.style.transform = `translateX(${x}px)`;
};

const onScrollStart3 = (e) => {
    startX3 = getClientX3(e); // getClientX3로 수정
    window.addEventListener('mousemove', onScrollMove3); // onScrollMove3로 수정
    window.addEventListener('touchmove', onScrollMove3); // onScrollMove3로 수정
    window.addEventListener('mouseup', onScrollEnd3); // onScrollEnd3로 수정
    window.addEventListener('touchend', onScrollEnd3); // onScrollEnd3로 수정
};

const bindEvents3 = () => {
    list3.addEventListener('mousedown', onScrollStart3); // onScrollStart3로 수정
    list3.addEventListener('touchstart', onScrollStart3); // onScrollStart3로 수정
};

bindEvents3();

const onScrollMove3 = (e) => {
    nowX3 = getClientX3(e); // getClientX3로 수정
    setTranslateX3(listX3 + nowX3 - startX3);
};

const onScrollEnd3 = (e) => {
    endX3 = getClientX3(e); // getClientX3로 수정
    listX3 = getTranslateX3();

    if (listX3 > 0) {
        setTranslateX3(0);
        list3.style.transition = `all 0.3s ease`;
        listX3 = 0;
    } else if (listX3 < listClientWidth3 - listScrollWidth3) {
        setTranslateX3(listClientWidth3 - listScrollWidth3);
        list3.style.transition = `all 0.3s ease`;
        listX3 = listClientWidth3 - listScrollWidth3;
    }

    window.removeEventListener('mousedown', onScrollStart3); // onScrollStart3로 수정
    window.removeEventListener('touchstart', onScrollStart3); // onScrollStart3로 수정
    window.removeEventListener('mousemove', onScrollMove3); // onScrollMove3로 수정
    window.removeEventListener('touchmove', onScrollMove3); // onScrollMove3로 수정
    window.removeEventListener('mouseup', onScrollEnd3); // onScrollEnd3로 수정
    window.removeEventListener('touchend', onScrollEnd3); // onScrollEnd3로 수정

    setTimeout(() => {
        bindEvents3();
        list3.style.transition = '';
    }, 500);
};

// 이미지 줌인
const imageContainers = document.querySelectorAll(".imageContainer");
const eduImages = document.querySelectorAll(".eduImage");

imageContainers.forEach((imageContainer, index) => {
    imageContainer.addEventListener("mouseover", () => {
        scale(index, 1.2);
    });

    imageContainer.addEventListener("mouseout", () => {
        scale(index, 1);
    });
});

function scale(index, factor) {
    eduImages[index].style.transform = `scale(${factor})`;
}
//이미지 줌인 2
const forthCardImagContainer=document.querySelectorAll(".forthCardImagContainer");
const forthCardImage=document.querySelectorAll(".forthCardImage");

forthCardImagContainer.forEach((forthCardImag, index) => {
    forthCardImag.addEventListener("mouseover", () => {
        scales(index, 1.2);
    });

    forthCardImag.addEventListener("mouseout", () => {
        scales(index, 1);
    });
});

function scales(index, factors) {
    forthCardImage[index].style.transform = `scale(${factors})`;
}

// 모바일 더보기
const moBtn= document.querySelector(".mlobilePrimaryFull");
moBtn.addEventListener("click", clickHandler);
function clickHandler(){
    window.location.href="http://localhost:10000/recycling-agent/recycling-agent";
}

const ntBtn=document.querySelector("#landingContentButton2");
ntBtn.addEventListener("click", clickHandler2);
function clickHandler2(){
    window.location.href="http://localhost:10000/notice/announcement";}

const crBtn=document.querySelector("#landingContentButton3");
crBtn.addEventListener("click", clickHandler3);
function clickHandler3(){
    window.location.href="http://localhost:10000/mypage/reserve-car";
}





