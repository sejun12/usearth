// 동과 카테고리 모달
const categoryBtn = document.getElementById("rangeCategoryBtn");
const categoryBtn2 = document.getElementById("rangeCategory2Btn");
const rangeBuilding = document.getElementById("rangeBuilding");
const rangeCategory = document.getElementById("rangeCategory");
const categorySpan = document.querySelector("#categorySpan");
const categorySpan2 = document.querySelector("#categorySpan2");
const categoryBtns = document.querySelectorAll(".categoryBtns");
const categoryBtns2 = document.querySelectorAll(".categoryBtns2");
const categorySvg = document.querySelector(".imposeYearSvg");
let isShowBuilding = false;
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

// 동 모달
categoryBtn.addEventListener("click", () => {
    toggleModal(rangeBuilding, categoryBtn, categorySpan, categorySvg, isShowBuilding);
    isShowBuilding = !isShowBuilding;
});

categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const buttonText = btn.textContent.trim();
        categorySpan.textContent = buttonText;
        rangeBuilding.style.display = "none";
        categoryBtn.style.borderColor = "rgba(0, 0, 0, 0.1)";
        isShowBuilding = false;
        categorySvg.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svgCategory">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.27 8.42a1.076 1.076 0 0 1 1.587-.13L12 14.832l7.143-6.544a1.076 1.076 0 0 1 1.586.13 1.26 1.26 0 0 1-.122 1.696L12 18l-8.607-7.885A1.26 1.26 0 0 1 3.27 8.42Z"></path>
            </svg>
        `;
    });
});

// 카테고리 모달
categoryBtn2.addEventListener("click", () => {
    toggleModal(rangeCategory, categoryBtn2, categorySpan2, categorySvg, isShowCategory);
    isShowCategory = !isShowCategory;
});

categoryBtns2.forEach((btn) => {
    btn.addEventListener("click", () => {
        const buttonText = btn.textContent.trim();
        categorySpan2.textContent = buttonText;
        rangeCategory.style.display = "none";
        categoryBtn2.style.borderColor = "rgba(0, 0, 0, 0.1)";
        isShowCategory = false;
        categorySvg.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svgCategory">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.27 8.42a1.076 1.076 0 0 1 1.587-.13L12 14.832l7.143-6.544a1.076 1.076 0 0 1 1.586.13 1.26 1.26 0 0 1-.122 1.696L12 18l-8.607-7.885A1.26 1.26 0 0 1 3.27 8.42Z"></path>
            </svg>
        `;
    });
});

// 전역 이벤트 리스너 추가
document.addEventListener("click", (event) => {
    const target = event.target;

    // 모달 영역인지 확인
    const isModalContent = rangeBuilding.contains(target) || categoryBtn.contains(target) || rangeCategory.contains(target) || categoryBtn2.contains(target);

    if (!isModalContent && (isShowBuilding || isShowCategory)) {
        // 모달이 열려있고, 모달 영역 외부를 클릭한 경우 모달을 닫음
        if (isShowBuilding) {
            toggleModal(rangeBuilding, categoryBtn, categorySpan, categorySvg, isShowBuilding);
            isShowBuilding = false;
        }

        if (isShowCategory) {
            toggleModal(rangeCategory, categoryBtn2, categorySpan2, categorySvg, isShowCategory);
            isShowCategory = false;
        }
    }
});


// 호 및 제목/내용 검색창 클릭 시, borderColor 변경하는 코드입니다.

const searchInput = document.getElementById("searchNumber");
const searchTitle = document.getElementById("searchTitle");

// input 요소가 클릭되었을 때
searchInput.addEventListener("focus", function () {
    // 테두리 색상 변경
    this.style.borderColor = "#9a9188";
});

// 다른 곳을 클릭하면
document.addEventListener("click", function (event) {
    // 클릭된 요소가 검색창(input)이 아니라면
    if (event.target !== searchInput) {
        // 테두리 색상 초기 상태로 변경
        searchInput.style.borderColor = "rgba(0, 0, 0, 0.1)";
    }
});

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

// 토글버튼

const totalNumber = document.querySelector('#totalNumber');
let orderNumber = 1;
let lastOrderNumber = 1;

const deleteMessageWrap = document.querySelector(".deleteMessageWrap");
function deleteMessageUpDown() {
    deleteMessageWrap.style.display = 'flex';

    deleteMessageWrap.classList.remove('slideDown');
    deleteMessageWrap.classList.add('slideUp');
    setTimeout(() => {
        deleteMessageWrap.classList.remove('slideUp');
        deleteMessageWrap.classList.add('slideDown');
        setTimeout(() => {
            deleteMessageWrap.style.display = 'none';
        }, 200);
    }, 2000);
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

    }
    if (currentPage = maxPage) {
        currentPage=maxPage;
    }
    if (currentPage > maxPage){
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


    const url = `/lists/api/resident/1?page=${page}&userApprovalNumber=3`; // 실제 서버 API 엔드포인트를 사용해야 합니다.


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

    data.forEach((resident) => {
        // 이곳에 검색 후 참고하기
        appendPost(resident);
    });

    // 요소의 텍스트 내용 변경
    if (totalNumberElement) {
        totalNumberElement.innerText = `총 ${total}건`;
    }
}



// appendPost 함수 (이전 코드 예제에서 정의한 함수 그대로 사용)
function appendPost(resident) {
    const li = document.createElement('li');
    const approvalText = resident.userApproval ? '승인' : '대기';
    const modifiedUserName = resident.userName.substring(0, 1) + '*' + resident.userName.substring(2);
    li.innerHTML = `
         <div class="maintenanceFeeList">
            <div style="width: 60px;" class="barBtnOne">${resident.userTempNo}</div>
            <div class="barBtnOne">${resident.userDong}</div>
            <div class="barBtnOne">${resident.userHo}</div>
            <div style="width: 120px;" class="barBtnOne">${modifiedUserName}</div>
            <div style="width: 280px;" class="barBtnOne">${resident.userJoinDate}</div>
            <div class="barBtnOne">${approvalText}</div>
            <div class="barBtnOne">
                <button type="button" role="switch" aria-checked="true" class="approvalBtn">
                    <div class="handled"></div>
                    <span class="toggle-inner"></span>
                    <div class="click-mode"></div>
                </button>
            </div>
        </div>
    `;

    first.appendChild(li);

    const approvalBtn = li.querySelector('.approvalBtn');
    let isHandledOnRight = false;
    approvalBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        const handled = approvalBtn.querySelector('.handled');
        if (handled) {
            if (isHandledOnRight) {
                handled.style.left = '2px';
                approvalBtn.style.backgroundColor = '#ccc';
                // 여기서 서버로 update 요청 보내기
                sendUpdateRequest(resident.id, false);
            } else {
                handled.style.left = 'calc(100% - 18px)';
                approvalBtn.style.backgroundColor = '#3e90e0';
                // 여기서 서버로 update 요청 보내기
                sendUpdateRequest(resident.id, true);
                deleteMessageUpDown();
            }
            isHandledOnRight = !isHandledOnRight;
        }
    });
}

// 서버로 업데이트 요청 보내는 함수
async function sendUpdateRequest(residentId, approvalStatus) {
    const url = 'http://localhost:10000/lists/api/update'; // 실제 서버 URL로 대체해야 함

    const data = {
        id: residentId,
        userApproval: approvalStatus
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            console.log('업데이트 성공');
            // 여기서 추가 작업을 수행할 수 있습니다.
        } else {
            console.log(response);
            console.error('업데이트 실패');
        }
    } catch (error) {
        console.error('요청 실패:', error);
    }
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
            const searchApproval = document.getElementById("categorySpan2").textContent;
            const searchDong = document.getElementById("categorySpan").textContent.match(/\d+/g);
            const searchHo = document.getElementById("searchNumber").value.trim();
            const searchTitle = document.getElementById("searchTitle").value.trim();



            const id = 1;  // 예시로 사용한 ID
            const baseUrl = `/lists/api/resident/result/${id}`;

            let url = baseUrl;
            const params = [];
            params.push(`page=${page}`);

            // 변환 함수 추가
            // 프론트엔드
            function convertApproval(approval) {
                if (approval === '대기') {
                    return 0;
                } else if (approval === '승인') {
                    return 1;
                } else {
                    return 3; // 다른 값이면 null
                }
            }


            if (searchApproval) {
                const userApproval = convertApproval(searchApproval);
                console.log(userApproval);
                console.log(searchApproval);
                if(userApproval){
                    params.push(`userApprovalNumber=${userApproval}`);
                }
            }
            if (searchDong && searchDong.length > 0) {
                params.push(`userDong=${searchDong.join(',')}`);
            }
            if (searchHo) {
                params.push(`userHo=${searchHo}`);
            }
            if (searchTitle) {
                params.push(`userName=${searchTitle}`);
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



