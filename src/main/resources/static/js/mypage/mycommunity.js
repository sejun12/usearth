import { timeForToday, handleTopBarBackward} from './common.js';

handleTopBarBackward();
const buttonService = (function(){
    async function go(type, callback){
        switch (type) {
            case '민원목록':
                const response = await fetch(`/lists/api/complain/${user}`);
                if (response.ok) {
                    const data = await response.json();
                    if (callback) {
                        callback(data)
                    }
                }
                break;
            case '재활용 대행':
                const response2  = await fetch(`/lists/api/recycle/${user}`);
                if (response2 .ok) {
                    const data = await response2.json();
                    if (callback) {
                        callback(data)
                    }
                }
                break;
            case '자유게시판':
                const response3  = await fetch(`/lists/api/free/${user}`);
                if (response3 .ok) {
                    const data = await response3.json();
                    if (callback) {
                        callback(data)
                    }
                }
            break;

            case '내 댓글':
                const response4 = await fetch(`/lists/api/reply/${user}`);
                if (response4.ok) {
                    const data = await response4.json();
                    if (callback) {
                        callback(data)
                    }
                }
                break;
            }
        }
    return { go: go}
})();

function showInfo(dataType, data) {
    const first = document.querySelector(".first");
    const div = document.createElement('div');
    div.classList.add('dynamically-added-data');
    if (dataType === '민원목록') {
        showComplainInfo(div, data);
    } else if (dataType === '재활용 대행') {
        showRecycleInfo(div, data);
    }
    else if (dataType === '자유게시판') {
        showFreeBoardInfo(div, data);
    }
    else if (dataType === '내 댓글') {
        showCommentInfo(div, data);
    }
    first.appendChild(div);
}

function showComplainInfo(div, data){
    div.innerHTML = `
      <div class="community-list">
        <div class="my-page-community-list">
            <div class="c-typography">
                <div class="justify-content-between">
                    <div class="align-items-center">
                    <div class="f-semi-bold">${data.categoryComplainName}</div>
                    </div>
                    <div class="align-items-center">
                    <button type="button" class="c-narrow-button">
                    <div class="c-narrow-button--icon"></div>
                      ${data.complainStatus}
                    <div class="c-narrow-button--icon"></div>
                    </button>
                    </div>
                </div>
                <div class="my-page-community">${data.complainTitle}</div>
                <div class="flex-column">
                    <div class="text-right">${timeForToday(data.complainDate)}</div>
                </div>
            </div>
        </div>
      </div>
      <hr class="horizontal line">
      `
    // 게시글 목록 항목에 클릭 이벤트 핸들러 추가
    div.addEventListener('click', function () {
        const complainId = data.id;
        window.location.href = `/mypage/complain-detail/${complainId}`;

    });
}
//재활용
function showRecycleInfo(div, data){
    div.innerHTML = `
      <div class="community-list">
        <div class="my-page-community-list">
            <div class="c-typography">
                <div class="justify-content-between">
                    <div class="align-items-center">
                    <div class="f-semi-bold">${data.postCategory}</div>
                    </div>
                    <div class="align-items-center">
                    <button type="button" class="c-narrow-button">
                    </button>
                    </div>
                </div>
                 <div class="my-page-community">${data.postTitle}</div>
                <div class="my-page-community-list-item-content">${data.postContent}</div>
                <div class="flex-column">
                    <div class="text-right">${timeForToday(data.postWriteDate)}</div>
                </div>
            </div>
        </div>
      </div>
      <hr class="horizontal line">
      `
    div.addEventListener('click', function () {
        const recycle = data.id;
        window.location.href = `/recycling-agent/recycling-agentread/${recycle}`;

    });
}
// 자유
function  showFreeBoardInfo(div, data) {
    div.innerHTML = `
      <div class="community-list">
        <div class="my-page-community-list">
            <div class="c-typography">
                <div class="justify-content-between">
                      <div class="align-items-center">
                    <div class="f-semi-bold">${data.postCategory}</div>
                    </div>
                    <div class="align-items-center">
                    <button type="button" class="c-narrow-button">
                    </button>
                    </div>
                </div>
                <div class="my-page-community">${data.postTitle}</div>
                 <div class="my-page-community-list-item-content">${data.postContent}</div>
                <div class="flex-column">
                    <div class="text-right">${timeForToday(data.postWriteDate)}</div>
                </div>
            </div>
        </div>
      </div>
       <hr class="horizontal line">
      `
    div.addEventListener('click', function () {
        const free = data.id;
        window.location.href = `/board/viewpost/${free}`;

    });
}
//댓글
  function  showCommentInfo(div,data){
    div.innerHTML = `
      <div class="community-list">
        <div class="my-page-community-list">
            <div class="c-typography">
                <div class="justify-content-between">
                    <div class="align-items-center">
                    <div class="f-semi-bold">${data.postCategory}</div>
                    </div>
                    <div class="align-items-center">
                    <button type="button" class="c-narrow-button">
                    </button>
                    </div>
                </div>
                <div class="my-page-reply">${data.postTitle}</div>
                <div class="my-page-community-list-item-content">${data.commentContent}</div>
                <div class="flex-column">
                    <div class="text-right">${timeForToday(data.commentWriteDate)}</div>
                </div>
            </div>
        </div>
      </div>
       <hr class="horizontal line">
      `
      div.addEventListener('click', function () {
          const recycle = data.postId;
          const free = data.postId;
      if(data.postCategory ==="재활용"){
          window.location.href = `/recycling-agent/recycling-agentread/${recycle}`;
      }else{
          window.location.href = `/board/viewpost/${free}`;
      }
      });
}
const infiniteLoadingContainer = document.querySelector(".infiniteLoadingContainer");
const swiperSlides =document.querySelectorAll(".swiperSlide ");

let isLoading = false;
function translateDataTypeToEnglish(dataType) {
    const translations = {
        '민원목록': 'complain',
        '재활용 대행': 'recycle',
        '자유게시판':'free',
        '내 댓글':'reply'
    };
    return translations[dataType];
}
async function getPosts(dataType, page) {
    const translatedType = translateDataTypeToEnglish(dataType);
    // 이곳에서 실제 API 요청을 보내고 데이터를 가져오는 로직을 구현
    const response = await fetch(`/lists/api/${translatedType}/${user}`);
    if (response.ok) {
        return  await response.json();
    }
}

function showList(dataType) {
  // 중복되어 실행되는 경우가 있어 그것을 막기위해 로딩 유무 파악
  if (isLoading) return;
  isLoading = true;
    const currentPage = pages[dataType];
  getPosts(dataType, currentPage).then((posts) => {
   const dataPerPage =8;
    const offset = (currentPage  - 1) * dataPerPage;
    const limit = offset + dataPerPage;
      posts = posts.slice(offset, limit);
    if(posts.length > 0) {
        infiniteLoadingContainer.style.display = "none";
        posts.forEach((post) => {
            showInfo(dataType, post);
      });
        pages[dataType]++;
    }
    isLoading = false;
  })
}

// 각 swiperSlide 요소에 클릭 이벤트 리스너를 추가
window.removeEventListener("scroll", handleScroll);
swiperSlides.forEach((slide) => {
    slide.addEventListener("click", async (e) => {
        e.preventDefault();
        const dataType = e.target.innerText;
        clearDynamicallyAddedData();
        pages[dataType] =1;
        const response = await buttonService.go(dataType,async (data)=>{
            if (data && data.length>0) {
                console.log(dataType);
                infiniteLoadingContainer.style.display = "none";
                    showList(dataType);
            }
            else {
                console.log(dataType)
                infiniteLoadingContainer.style.display = "block";
            }
        });
        swiperSlides.forEach((otherSlide) => {
            if (otherSlide !== slide) {
                otherSlide.classList.remove("active");
            }
            else {
                slide.classList.add("active");
        }
    });
});
});
// 스크롤 이벤트 핸들러
function handleScroll() {
    if (isScrollingToBottom() && !isLoading) {
        swiperSlides.forEach((slide) => {
            if (slide.classList.contains("active")) {
                const dataType = slide.innerText;
                    showList(dataType);
            }
        });
    }
}


//처음 페이지 민원!!!
window.addEventListener("DOMContentLoaded",  () => {
    const dataType = '민원목록';
    showList(dataType);
    window.addEventListener("scroll", handleScroll);
});
function isScrollingToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
}

//데이터 지우기
function clearDynamicallyAddedData() {
    const dynamicallyAddedData = document.querySelectorAll('.dynamically-added-data');
    dynamicallyAddedData.forEach((element) => {
        element.remove();
    });
}

const pages = {
    '민원목록': 1,
    '재활용 대행': 1,
    '자유게시판': 1,
    '내 댓글': 1
};

