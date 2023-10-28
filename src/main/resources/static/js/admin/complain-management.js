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

// 검색 초기화 버튼 클릭 시 새로고침
document.querySelector(".resetBtn").addEventListener("click", function() {
    location.reload(); // 현재 페이지를 새로고침합니다.
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

// 페이지 버튼 만들기
function createPaginationButtons(json) {

    const ulElement = document.querySelector('.pageButtonLists');
    ulElement.innerHTML = ''; // 기존 버튼을 지웁니다.
    let pagination = json.pagination;

    for (let i = pagination.startPage; i <= pagination.endPage; i++) {

        const liElement = document.createElement('li');
        liElement.classList.add('li-ml');

        const buttonElement = document.createElement('button');
        buttonElement.type = 'button';
        buttonElement.classList.add('buttonNumber');

        const spanElement = document.createElement('span');
        spanElement.classList.add('content-primary');
        spanElement.textContent = i; // 페이지 번호

        if (i === currentPage) {
            spanElement.classList.add('blueText'); // 첫 번째 페이지 번호에 blueText 클래스 추가
        }

        buttonElement.appendChild(spanElement);
        liElement.appendChild(buttonElement);
        ulElement.appendChild(liElement);
    }
}

// 페이징 버튼 이벤트
const pagination = document.getElementById('pagination');
const complainList = document.querySelector(".complainList");
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentPage = 1; // 현재 페이지

// 페이지 번호 클릭 이벤트 처리
pagination.addEventListener('click', function (event) {
    if (event.target.classList.contains('buttonNumber')) {
        // 모든 페이지 번호에서 파란색 스타일 제거
        const pageButtons = document.querySelectorAll('.content-primary');
        pageButtons.forEach(button => button.classList.remove('blueText'));

        const newPage = parseInt(event.target.textContent);
        if (!isNaN(newPage)) {
            currentPage = newPage;
            complainService.allList(currentPage);

            // 클릭한 페이지 번호에 파란색 스타일 추가
            event.target.querySelector('.content-primary').classList.add('blueText');
        }
    }
});


// 이전 페이지 버튼 클릭 이벤트 처리
prevButton.addEventListener('click', function () {
    if (currentPage > 1) {
        // 모든 페이지 번호에서 파란색 스타일 제거
        const pageButtons = document.querySelectorAll('.content-primary');
        if (currentPage > 0 && currentPage <= pageButtons.length) {
            pageButtons[currentPage - 1].classList.remove('blueText');
        }

        currentPage--;

        // 현재 페이지 번호에 파란색 스타일 추가
        if (currentPage > 0 && currentPage <= pageButtons.length) {
            pageButtons[currentPage - 1].classList.add('blueText');
        }

    }

    complainService.allList(currentPage);
});

// 다음 페이지 버튼 클릭 이벤트 처리
nextButton.addEventListener('click', function () {
    const pageButtons = document.querySelectorAll('.content-primary'); // 모든 페이지 번호 요소를 선택합니다.
    const maxPage = pageButtons.length; // 페이지 번호 요소의 개수를 최대 페이지로 설정합니다.

    // 현재 페이지 번호에서 파란색 스타일 제거
    pageButtons[currentPage - 1].classList.remove('blueText');

    // 다음 페이지로 이동
    currentPage++;

    if (currentPage > maxPage) {
        currentPage--;
    }

    // 다음 페이지 번호에 파란색 스타일 추가
    pageButtons[currentPage - 1].classList.add('blueText');

    // 페이지 업데이트 함수
    complainService.allList(currentPage);
});

// 서버에서 민원 목록을 가져오는 함수
const complainService = (function(){
    async function showAllList(page) {
        let url = createUrl(page);

        const response = await fetch(url);
        const json = await response.json();
        console.log(json)

        renderData(json);
        createPaginationButtons(json);
    }

    async function updateRequesr(complainId, complainStatus){
        const url = '/complains/api/update';
        if (complainStatus === '진행중'){
            complainStatus = '처리완료'
        }else{
            complainStatus = '진행중'
        }

        const data = {
            id: complainId,
            complainStatus: complainStatus
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });

        if (response.ok) {
            console.log('업데이트 성공');
            await showAllList(currentPage);
        } else {
            console.log(response);
            console.error('업데이트 실패');
        }
    }

    return {allList: showAllList, update: updateRequesr};
})();

function createUrl(page){
    const categoryComplainName = document.getElementById("categorySpan2").textContent;
    const keyword = document.getElementById("searchTitle").value;
    const complainStatus = document.getElementById("categorySpan").textContent;
    const startDate = document.querySelector("input[name='startDate']").value;
    const endDate = document.querySelector("input[name='endDate']").value;
    const params = [];

    let url = `/complains/api/complains-list?page=${page}`;

    if(categoryComplainName){
        if(categoryComplainName !== '카테고리 선택'){
            params.push(`categoryComplainName=${categoryComplainName}`)
        }
    }
    if(keyword){
        params.push(`keyword=${keyword}`)
    }
    if(complainStatus){
        if(complainStatus !== '전체'){
            params.push(`complainStatus=${complainStatus}`)
        }
    }
    if(startDate){
        params.push(`startDate=${startDate}`)
    }
    if(endDate){
        params.push(`endDate=${endDate}`)
    }

    // URL에 검색 조건 추가
    if (params.length > 0) {
        const paramString = params.join("&");
        url = `/complains/api/complains-list?${paramString}`;
    }

    return url;
}

// 민원 조회 버튼 클릭 시 검색 실행
document.querySelector(".registerMaintenanceFeeBtn").addEventListener("click", () => {
    complainService.allList(currentPage);
})

// json데이터로 반복 해주는 함수
function renderData(json){
    complainList.innerHTML = '';

    const complainAdmins = json.complainAdmins;
    document.getElementById("total").textContent = `총 ${json.searchTotalCount}건`;
    document.getElementById("receptionCount").textContent = `접수완료 ${json.receptionCount}`;
    document.getElementById("processingCount").textContent = `진행중 ${json.processingCount}`;
    document.getElementById("completeCount").textContent = `처리완료 ${json.completeCount}`;


    if(complainAdmins.length !== 0){
        document.querySelector(".listNone").innerHTML = '';
        complainAdmins.forEach((complainAdmin) => {
            const li = document.createElement('li');
            complainList.appendChild(li);
            appendComplains(li, complainAdmin);
        })
    }else{
        complainList.innerHTML = '';
        appendNone();
    }
}

// 컴플레인으로 리스트 생성
function appendComplains(li, complain){
    li.innerHTML = `
        <div class="maintenanceFeeList">
            <div class="barBtnOne">${complain.categoryComplainName}</div>
            <div class="barBtnOne">${complain.userName}</div>
            <div style="width: 180px;" class="barBtnOne">${complain.complainTitle}</div>
            <div style="width: 140px;" class="barBtnOne">${complain.complainDate.split(' ')[0]}</div>
            <div style="width: 140px;" class="barBtnOne">${complain.complainProcessingDate === null ? '-' : complain.complainProcessingDate}</div>
            <div class="barBtnOne">${complain.complainStatus}</div>
            <div class="barBtnOne">
                <button type="button" class="showDetailBtn">${complain.complainStatus === `접수완료` ? `처리시작` : (complain.complainStatus === `진행중` ? `진행중` : `처리완료`)}</button>
            </div>
        </div>
    `;

    // 처리버튼에 대한 기능
    const showDetailBtn = li.querySelector(".showDetailBtn");

    showDetailBtn.addEventListener("click", () =>{
        const complainId = complain.id;

        if(showDetailBtn.textContent === '처리시작'){
            window.location.href = `/admin/complain-reply/${complainId}`;
        }else{
            complainService.update(complainId, complain.complainStatus);
        }
    })

    // 처리버튼의 텍스트에 따른 속성 변경
    if(showDetailBtn.textContent === `진행중`){
        showDetailBtn.style.backgroundColor = 'rgb(231,231,231)';
    }else if(showDetailBtn.textContent === `처리완료`){
        showDetailBtn.style.backgroundColor = 'rgb(252,236,206)';
    }

}

// 검색 결과가 없을 경우
function appendNone() {
    document.querySelector(".listNone").innerHTML = `
    <div class="maintenanceFeeContent">
        <svg width="101" height="97" fill="none" xmlns="http://www.w3.org/2000/svg">\`;
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.617 63.243c.462-.167 1.355-.362 2.03.311.933.93 1.125 2.136 1.092 3.153-.03.917-.252 1.848-.416 2.534l-.043.184c-.313 1.33-.79 2.55-1.57 3.582a6.838 6.838 0 0 1-.73.819c.88.089 1.763.138 2.636.136.238-.73.731-1.365 1.221-1.865a10.708 10.708 0 0 1 1.916-1.517c.624-.391 1.268-.714 1.76-.861.607-.18 1.732-.417 2.727-.315.489.05 1.127.198 1.62.657.566.529.733 1.265.6 2.022-.128.724-.537 1.266-.95 1.648-.41.38-.884.66-1.275.858-1.21.615-2.512 1.028-3.857 1.283.576.145 1.25.222 1.998.238 1.47.032 3.005-.172 4.201-.35.177-.026.36-.055.547-.084.904-.144 1.904-.303 2.807-.23 1.225.101 2.351.619 3.241 1.901.354.509.23 1.21-.275 1.565a1.112 1.112 0 0 1-1.555-.278c-.477-.686-.97-.896-1.593-.947-.612-.05-1.281.054-2.172.193l-.674.104c-1.202.178-2.901.41-4.575.373-1.631-.035-3.476-.326-4.791-1.402a3.126 3.126 0 0 1-.673-.748c-2.071.026-4.146-.216-6.059-.577-1.963.712-3.965 1.247-5.914 1.77-.087.022-.173.045-.26.069-2.273.609-4.477 1.21-6.598 2.067a1.114 1.114 0 0 1-1.452-.624c-.23-.576.048-1.23.62-1.461 2.265-.915 4.595-1.548 6.856-2.154l.22-.058c1.02-.274 2.026-.543 3.017-.833a2.453 2.453 0 0 1-.433-.603c-.354-.694-.344-1.463-.209-2.137.268-1.331 1.13-2.815 2.091-4.096.98-1.305 2.171-2.54 3.247-3.368.529-.408 1.09-.765 1.627-.959Zm-2.999 10.06.061-.023c1.024-.395 1.733-.947 2.253-1.634.53-.701.906-1.598 1.175-2.74l.037-.154c.17-.725.34-1.441.363-2.12.017-.54-.064-.938-.238-1.232-.221.098-.534.287-.922.586-.888.684-1.94 1.765-2.822 2.939-.9 1.198-1.517 2.355-1.683 3.186-.082.407-.028.599.006.666.014.028.072.14.408.222.446.108.901.21 1.362.305Zm3.878-7.98s-.01.004-.026.005c.018-.005.026-.004.026-.004Zm4.84 8.446c1.387-.204 2.705-.582 3.892-1.185.306-.156.575-.325.77-.505.192-.179.248-.309.262-.389l.001-.006a1.401 1.401 0 0 0-.247-.045c-.578-.059-1.382.09-1.866.234-.217.065-.667.271-1.213.614-.531.333-1.08.75-1.508 1.187a4.88 4.88 0 0 0-.09.095Z" fill="#020202"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M50.13 70.441a2.817 2.817 0 0 1 1.25 3.768 25.557 25.557 0 0 1-1.167 2.083l-.078.128a21.613 21.613 0 0 0-1.1 2 2.784 2.784 0 0 1-3.731 1.296 2.817 2.817 0 0 1-1.288-3.755 27.19 27.19 0 0 1 1.356-2.471c.023-.039.046-.077.07-.114.337-.556.61-1.005.944-1.677a2.784 2.784 0 0 1 3.744-1.258Z" fill="#000"></path>
            <path d="M80.91 12.434a3.337 3.337 0 0 1 4.481-.943l10.498 6.42a3.383 3.383 0 0 1 1.002 4.818L65.06 68.332c-.342.49-.808.879-1.349 1.128l-11.67 5.367a3.332 3.332 0 0 1-3.132-.185l-.66-.403a3.378 3.378 0 0 1-1.577-3.347l1.517-10.936c.074-.53.271-1.034.577-1.471L80.91 12.434Z" fill="#9D8DFF"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M86.885 21.214c-2.262-1.284-4.427-2.611-6.39-4.195a1.112 1.112 0 0 0-1.57.174 1.128 1.128 0 0 0 .173 1.579c2.106 1.699 4.396 3.097 6.69 4.4.78.443 1.555.872 2.324 1.297 1.519.842 3.015 1.67 4.488 2.57a1.113 1.113 0 0 0 1.534-.376c.32-.53.153-1.221-.374-1.544-1.513-.924-3.084-1.794-4.629-2.65-.758-.42-1.51-.837-2.246-1.255ZM65.758 68.348c-.3.542-.98.737-1.518.435-2.071-1.16-4.11-2.4-6.13-3.626l-1.32-.802c-2.462-1.49-4.907-2.938-7.416-4.22a1.127 1.127 0 0 1-.49-1.51c.279-.554.951-.775 1.501-.494 2.585 1.321 5.09 2.805 7.556 4.298l1.336.811c2.018 1.227 4.016 2.441 6.049 3.58.539.301.732.986.433 1.528Z" fill="#000"></path>
        </svg>
        <p class="noData">민원 내역이 없습니다.</p>
    </div>
    `;
}

complainService.allList(currentPage);