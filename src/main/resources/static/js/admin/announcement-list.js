
// API로부터 데이터 가져오기
fetch("/lists/api/announcement/category")
    .then(response => response.json())
    .then(data => {
        const ul = document.querySelector(".rangeModalUl");

        data.forEach(category => {
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.type = "button";
            button.className = "rangeModalBtn categoryBtns2";
            button.textContent = category.announcementCategoryName;

            // 클릭 이벤트 핸들러 추가
            button.addEventListener("click", function() {
                categorySpan2.textContent = button.textContent.trim();
                rangeCategory.style.display = "none";
                categoryBtn2.style.borderColor = "rgba(0, 0, 0, 0.1)";
                isShowCategory = false;
                categorySvg.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svgCategory">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.27 8.42a1.076 1.076 0 0 1 1.587-.13L12 14.832l7.143-6.544a1.076 1.076 0 0 1 1.586.13 1.26 1.26 0 0 1-.122 1.696L12 18l-8.607-7.885A1.26 1.26 0 0 1 3.27 8.42Z"></path>
            </svg>
        `;
            });

            // 버튼을 리스트 아이템에 추가
            li.appendChild(button);
            ul.appendChild(li);
        });

    })
    .catch(error => console.error("Error fetching data:", error));


// 동과 카테고리 모달
const categoryBtn2 = document.getElementById("rangeCategory2Btn");
const rangeCategory = document.getElementById("rangeCategory");
const categorySpan2 = document.querySelector("#categorySpan2");
const categoryBtns2 = document.querySelectorAll(".categoryBtns2");
const categorySvg = document.querySelector(".imposeYearSvg");
let isShowCategory = false;

// 모달 열기/닫기 함수
function toggleModal(modal, btn, span, svg, isOpen) {
    if (!isOpen) {
        modal.style.display = "block";
        btn.style.borderColor = "#9a9188";
        svg.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="shrink-0 ml-[4px] w-[10px] h-[10px]">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.73 15.58a1.076 1.076 0 0 1-1.587.13L12 9.168 4.857 15.71a1.076 1.076 0 0 1-1.586-.13 1.26 1.26 0 0 1 .122-1.695L12 6l8.607 7.885a1.26 1.26 0 0 1 .122 1.695Z"></path>
            </svg>
        `;
    } else if (isOpen) {
        modal.style.display = "none";
        btn.style.borderColor = "rgba(0, 0, 0, 0.1)";
        svg.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svgCategory">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.27 8.42a1.076 1.076 0 0 1 1.587-.13L12 14.832l7.143-6.544a1.076 1.076 0 0 1 1.586.13 1.26 1.26 0 0 1-.122 1.696L12 18l-8.607-7.885A1.26 1.26 0 0 1 3.27 8.42Z"></path>
            </svg>
        `;
    }
}


// 카테고리 모달
categoryBtn2.addEventListener("click", () => {
    toggleModal(rangeCategory, categoryBtn2, categorySpan2, categorySvg, isShowCategory);
    isShowCategory = !isShowCategory;
});



// 전역 이벤트 리스너 추가
document.addEventListener("click", (event) => {
    const target = event.target;

    // 모달 영역인지 확인
    const isModalContent = rangeCategory.contains(target) || categoryBtn2.contains(target);

    if (!isModalContent && isShowCategory) {


        if (isShowCategory) {
            toggleModal(rangeCategory, categoryBtn2, categorySpan2, categorySvg, isShowCategory);
            isShowCategory = false;
        }
    }
});






// 호 및 제목/내용 검색창 클릭 시, borderColor 변경하는 코드입니다.


const searchTitle = document.getElementById("searchTitle");


// input 요소가 클릭되었을 때
searchTitle.addEventListener("focus", function () {
    // 테두리 색상 변경
    this.style.borderColor = "#9a9188";
});

// 다른 곳을 클릭하면
document.addEventListener("click", function (event) {
    // 클릭된 요소가 검색창(input)이 아니라면
    if (event.target !== searchTitle) {
        // 테두리 색상 초기 상태로 변경
        searchTitle.style.borderColor = "rgba(0, 0, 0, 0.1)";
    }
});

// 프로필모달
const profileModal = document.getElementsByClassName("profileModalWrapper")[0];
const profileBtn = document.getElementsByClassName("profileBtn")[0];
let isShow = false;

profileBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // 클릭 이벤트 전파를 막습니다.

    if (!isShow) {
        console.log(isShow);
        profileModal.style.display = "block";
        isShow = true;
    } else if (isShow) {
        console.log(isShow);
        profileModal.style.display = "none";
        isShow = false;
    }
});

// 전체 HTML을 클릭하는 이벤트 리스너 추가
document.addEventListener("click", (event) => {
    if (isShow && event.target !== profileModal && event.target !== profileBtn) {
        console.log(isShow);
        profileModal.style.display = "none";
        isShow = false;
    }
});


// 토글 버튼 누르기
const toggleButtons = document.querySelectorAll(".toggleButton");
const feeLists = document.querySelectorAll(".feeLists");

toggleButtons.forEach((button, index) => {
    let isOpen = false;

    button.addEventListener("click", () => {
        isOpen = !isOpen;
        if (isOpen) {
            feeLists[index].style.maxHeight = "1000px"; // 최대 높이로 설정하여 나타남
        } else {
            feeLists[index].style.maxHeight = "0"; // 최소 높이로 설정하여 사라짐
        }
        button.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
    });
});


// pagination 버튼 생성 Js
function createPaginationButtons() {

    const ulElement = document.querySelector('.pageButtonLists');
    ulElement.innerHTML = ''; // 기존 버튼을 지웁니다.


    for (let i = paginationInfo.startPage; i <= paginationInfo.endPage; i++) {
        const liElement = document.createElement('li');
        liElement.classList.add('li-ml');

        const buttonElement = document.createElement('button');
        buttonElement.type = 'button';
        buttonElement.classList.add('buttonNumber');

        const spanElement = document.createElement('span');
        spanElement.classList.add('content-primary');
        spanElement.textContent = i; // 페이지 번호

        if (i === paginationInfo.startPage) {
            spanElement.classList.add('blueText'); // 첫 번째 페이지 번호에 blueText 클래스 추가
        }

        buttonElement.appendChild(spanElement);
        liElement.appendChild(buttonElement);
        ulElement.appendChild(liElement);
    }
}


const pagination = document.getElementById('pagination');
const first = document.querySelector('.first');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentPage = 1; // 현재 페이지

// pagination 생성 코드
function createPaginationButtons() {

    console.log("createPaginationButtons가 실행이됨.");

    const ulElement = document.querySelector('.pageButtonLists');
    ulElement.innerHTML = ''; // 기존 버튼을 지웁니다.


    for (let i = paginationInfo.startPage; i <= paginationInfo.endPage; i++) {
        const liElement = document.createElement('li');
        liElement.classList.add('li-ml');

        const buttonElement = document.createElement('button');
        buttonElement.type = 'button';
        buttonElement.classList.add('buttonNumber');

        const spanElement = document.createElement('span');
        spanElement.classList.add('content-primary');
        spanElement.textContent = i; // 페이지 번호

        if (i == currentPage) {
            spanElement.classList.add('blueText'); // 현재 페이지 번호에 blueText 클래스 추가
            console.log(currentPage, "에 blueText추가")
        }

        buttonElement.appendChild(spanElement);
        liElement.appendChild(buttonElement);
        ulElement.appendChild(liElement);
    }
}

// 페이지 번호 클릭 이벤트 처리
pagination.addEventListener('click', function (event){
    if (event.target.classList.contains('buttonNumber') || event.target.classList.contains('content-primary')  ) {
        currentPage = parseInt(event.target.textContent);
        if (isSearchMode) {
            // 검색 모드에서 이전 버튼을 누를 때
            updatePaginationAfterSearch();
            console.log(currentPage);
        } else {
            // 검색 모드가 아닌 경우
            updatePagination();
            console.log(currentPage);
        }
    }
})


// 이전 페이지 버튼 클릭 이벤트 처리
prevButton.addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
    } else if(currentPage<=1 ){
        currentPage = 1;
    }
    if (isSearchMode) {
        // 검색 모드에서 이전 버튼을 누를 때
        updatePaginationAfterSearch();
        console.log(currentPage);
    } else {
        // 검색 모드가 아닌 경우
        updatePagination();
        console.log(currentPage);
    }
});


// 다음 페이지 버튼 클릭 이벤트 처리
nextButton.addEventListener('click', function () {
    const pageButtons = document.querySelectorAll('.content-primary'); // 모든 페이지 번호 요소를 선택합니다.
    const maxPage = pageButtons.length; // 페이지 번호 요소의 개수를 최대 페이지로 설정합니다.

    if (currentPage < maxPage){
        // 다음 페이지로 이동
        currentPage++;

    } else if(currentPage = maxPage) {
        currentPage=maxPage;
    }else if (currentPage > maxPage){
        currentPage--;
    }

    if (isSearchMode) {
        // 검색 모드에서 이전 버튼을 누를 때
        updatePaginationAfterSearch();
        console.log(currentPage);
    } else {
        // 검색 모드가 아닌 경우
        updatePagination();
        console.log(currentPage);
    }


});



// 페이지 업데이트 함수
function updatePagination() {
    getPosts(currentPage);
    console.log("getPosts-updatePagination함수 실행됨.");
}

// 서버에서 데이터를 가져오는 메소드
async function getPosts(page) {


    const url = `/lists/api/announcement/1?page=${page}`; // 실제 서버 API 엔드포인트를 사용해야 합니다.


    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            // 데이터 가져오기 성공
            console.log(data);
            renderData(data);
            const initialCount = response.headers.get('X-Initial-Total-Count');
            paginationInfo.total = initialCount;
            paginationInfo.startPage = 1;
            paginationInfo.endPage = Math.ceil(initialCount / 10);
            createPaginationButtons();
            console.log(initialCount);
            totalNumberElement.innerText = `총 ${initialCount}건`;
        } else {
            console.error('데이터를 가져오는데 실패했습니다.');
        }
    } catch (error) {
        console.error('데이터를 가져오는데 실패했습니다.', error);
    }
}


// 데이터를 화면에 렌더링하는 함수
function renderData(data) {
    first.innerHTML = ''; // 기존 데이터 지우기
    console.log(data);

    data.forEach((announcement) => {
        // 이곳에 검색 후 참고하기
        appendPost(announcement);
    });

    // 요소의 텍스트 내용 변경
    if (totalNumberElement) {
        totalNumberElement.innerText = `총 ${total}건`;
    }
}

// appendPost 함수 (이전 코드 예제에서 정의한 함수 그대로 사용)
function appendPost(announcement) {
    const li = document.createElement('li');
    li.innerHTML = `
         <div class="maintenanceFeeList">
            <div class="barBtnOne">${announcement.announcementCategoryName}</div>
            <div class="barBtnOne">${announcement.adminName}</div>
            <div style="width: 300px; text-align: left;" class="barBtnOne">${announcement.announcementTitle}</div>
            <div class="barBtnOne">${announcement.announcementDate}</div>
        </div>
    `;

    first.appendChild(li);
}

// 페이지 로딩 시 데이터를 가져오고 렌더링하는 함수
function showList() {
    getPosts(currentPage);
}

showList();

// 검색 기능

let total = 0;
let startPage = 0;
let endPage = 0;
// ID가 'totalNumber'인 요소 가져오기
const totalNumberElement = document.getElementById('totalNumber');

async function fetchData(page) {
    let searchCategory = document.getElementById("categorySpan2").textContent;
    const searchTitle = document.getElementById("searchTitle").value.trim();

    if(searchCategory == '카테고리 선택'){
        searchCategory = null;
    }

    const id = 1;  // 예시로 사용한 ID
    const baseUrl = `/lists/api/announcement/result/${id}`;

    let url = baseUrl;
    const params = [];
    params.push(`page=${page}`);


    // 변환 함수 추가

    if (searchCategory) {
        params.push(`announcementCategoryName=${searchCategory}`);
    }
    if (searchTitle) {
        params.push(`announcementTitle=${searchTitle}`);
    }



    // URL에 검색 조건 추가
    if (params.length > 0) {
        console.log(params);
        const paramString = params.join("&");
        url = `${baseUrl}?${paramString}`;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }
        // HTTP 응답 헤더에서 pagination 정보를 읽어옴
        total = response.headers.get('X-Total-Count');
        startPage = response.headers.get('X-Start-Page');
        endPage = response.headers.get('X-End-Page');
        console.log(response);
        console.log(total);
        const data = await response.json(); // JSON 데이터를 가져옵니다.
        console.log(data); // 데이터 출력
        return data; // 가져온 데이터를 반환

    } catch (error) {
        // 오류 처리
        console.error("오류 발생: ", error);
        return null; // 실패한 경우 null 반환
    }
}

// 페이지 업데이트 함수
function updatePaginationAfterSearch() {
    fetchData(currentPage).then((data) => {
        if (data !== null) { // 데이터가 유효한 경우에만 렌더링

            console.log("검색 후 랜더링 페이지는 ",currentPage);
            paginationInfo.total = total;
            paginationInfo.startPage = startPage;
            paginationInfo.endPage = endPage;
            console.log(paginationInfo);
            createPaginationButtons(); // pagination 정보를 업데이트한 후 버튼을 다시 생성
            renderData(data);
            // 요소의 텍스트 내용 변경
            if (totalNumberElement) {
                totalNumberElement.innerText = `총 ${total}건`;
            }
        }
    });
    console.log("fetchData-updatePagination함수 실행됨.");
}

let isSearchMode = false;
document.getElementById("search").addEventListener("click", () => {
    currentPage = 1;
    isSearchMode = true; // 검색 버튼을 누를 때 검색 모드로 설정
    fetchData(currentPage).then((data) => {
        if (data !== null) { // 데이터가 유효한 경우에만 렌더링
            console.log("검색 후 렌더링 시작!")
            currentPage = 1;
            paginationInfo.total = total;
            paginationInfo.startPage = startPage;
            paginationInfo.endPage = endPage;
            console.log(paginationInfo);
            createPaginationButtons(); // pagination 정보를 업데이트한 후 버튼을 다시 생성
            renderData(data);
            // 요소의 텍스트 내용 변경
            if (totalNumberElement) {
                totalNumberElement.innerText = `총 ${total}건`;
            }
        }
    });
});



// 현재 페이지를 새로고침합니다.
document.querySelector(".resetSpan").addEventListener("click", function() {
    location.reload();
});
