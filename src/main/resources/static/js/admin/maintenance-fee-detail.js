// API로부터 데이터 가져오기
fetch("/lists/api/maintenance-fee/dong")
    .then(response => response.json())
    .then(data => {
        const ul = document.querySelector(".rangeModalUl");

        data.forEach(category => {
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.type = "button";
            button.className = "rangeModalBtn categoryBtns";
            button.textContent = category.dongNumber + '동';

            // 클릭 이벤트 핸들러 추가
            button.addEventListener("click", function() {
                categorySpan.textContent = button.textContent.trim();
                rangeBuilding.style.display = "none";
                categoryBtn.style.borderColor = "rgba(0, 0, 0, 0.1)";
                isShowBuilding = false;
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
const categoryBtn = document.getElementById("rangeCategoryBtn");
const rangeBuilding = document.getElementById("rangeBuilding");
const categorySpan = document.querySelector("#categorySpan");
const categoryBtns = document.querySelectorAll(".categoryBtns");
const categorySvg = document.querySelector(".imposeYearSvg");
let isShowBuilding = false;

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


// 전역 이벤트 리스너 추가
document.addEventListener("click", (event) => {
    const target = event.target;

    // 모달 영역인지 확인
    const isModalContent = rangeBuilding.contains(target) || categoryBtn.contains(target);

    if (!isModalContent && (isShowBuilding)) {
        // 모달이 열려있고, 모달 영역 외부를 클릭한 경우 모달을 닫음
        if (isShowBuilding) {
            toggleModal(rangeBuilding, categoryBtn, categorySpan, categorySvg, isShowBuilding);
            isShowBuilding = false;
        }
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


document.querySelector(".resetBtn").addEventListener("click", function() {
    location.reload(); // 현재 페이지를 새로고침합니다.
});

// 호 및 제목/내용 검색창 클릭 시, borderColor 변경하는 코드입니다.

const searchInput = document.getElementById("searchNumber");


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


const first = document.querySelector('.first');
// 데이터를 화면에 렌더링하는 함수
function renderData(data) {
    first.innerHTML = ''; // 기존 데이터 지우기
    console.log(data);

    data.forEach((fee) => {
        // 이곳에 검색 후 참고하기
        appendPost(fee);
    });

}

// 데이터 키(key)와 필드 이름의 매핑
const fieldMapping = {
    GENERAL_FEE: '일반관리비',
    CLEANING_FEE: '청소비',
    ELEVATOR_FEE: '승강기유지비',
    REPAIR_FEE: '수선유지비',
    LONG_TERM_REPAIR_FUND: '장기수선충당금',
    SECURITY_FEE: '경비비',
    MANAGEMENT_COMMISSION: '위탁관리수수료',
    INSURANCE_FEE: '보험료',
    MEETING_OPERATING_FEE: '대표회의운영비',
    NETWORK_FEE: '네트워크유지비',
    UNIT_ELECTRICITY_FEE: '세대전기료',
    COMMON_ELECTRICITY_FEE: '공동전기료',
    TV_RECEPTION_FEE: 'TV수신료',
    UNIT_WATER_FEE: '세대수도료',
    COMMON_WATER_FEE: '공동수도료',
    UNIT_HEATING_FEE: '개별난방비',
    BASE_HEATING_FEE: '기본난방비',
    COMMON_HEATING_FEE: '공용열요금',
    UNIT_HOT_WATER_FEE: '세대급탕비',
    ELECTION_OPERATING_FEE: '선거관리운영비',
    VEHICLE_REGISTRATION_FEE: '차량등록비',
    COMMUNITY_USAGE_FEE: '커뮤니티이용료',
    ON_TIME: '납기내',
    AFTER_DUE_DATE: '납기후',
    ELECTRICITY_USAGE: '전기사용량',
    HOT_WATER_USAGE: '온수사용량',
    WATER_USAGE: '수도사용량',
    HEATING_USAGE: '난방사용량',
    GAS_USAGE: '가스사용량',
    CURRENT_MONTH_FEE: '당월부과금액',
    UNPAID_AMOUNT: '미납금액',
    UNPAID_LATE_FEE: '미납연체',
    LATE_FEE_AFTER_DUE_DATE: '납기후연체료'
};



// appendPost 함수 (이전 코드 예제에서 정의한 함수 그대로 사용)
function appendPost(fee) {
    console.log("appendPost 실행됨.")
    for (const key in fee) {
        if (fee.hasOwnProperty(key) && fee[key] && fieldMapping[key]) {
            const li = document.createElement('li');
            const fieldName = fieldMapping[key];
            li.innerHTML = `
                 <div class="maintenanceFeeList">
                    <div class="barBtnOne">${fieldName}</div>
                    <div class="barBtnOne">${fee[key] + '원'}</div>
                </div>
            `;

            first.appendChild(li);
        }
    }
}



async function fetchData() {
    let searchDong = document.getElementById("categorySpan").textContent.match(/\d+/g);
    const searchHo = document.getElementById("searchNumber").value.trim();

    if(searchDong == '동 선택'){
        searchDong = null;
    }


    const id = 1;  // 예시로 사용한 ID
    const baseUrl = `/lists/api/maintenance-fee/result/${id}`;

    let url = baseUrl;
    const params = [];
    params.push(`feeImposingMonth=7`);


    // 변환 함수 추가

    if (searchDong) {
        params.push(`userDong=${searchDong}`);
    }
    if (searchHo) {
        params.push(`userHo=${searchHo}`);
    }



    // URL에 검색 조건 추가
    if (params.length > 0) {
        console.log(params);
        const paramString = params.join("&");
        url = `${baseUrl}?${paramString}`;
    }

    try {
        const response = await fetch(url);
        console.log(url);
        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }
        console.log(response);
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
    fetchData().then((data) => {
        if (data !== null) { // 데이터가 유효한 경우에만 렌더링
            renderData(data);
            // 요소의 텍스트 내용 변경
        }
    });
    console.log("fetchData-updatePagination함수 실행됨.");
}

let isSearchMode = false;
document.getElementById("search").addEventListener("click", () => {
    let searchDong = document.getElementById("categorySpan").textContent;
    const searchHo = document.getElementById("searchNumber").value.trim();

    if (searchDong !== '동 선택' && searchHo) {
        isSearchMode = true; // 검색 버튼을 누를 때 검색 모드로 설정
        updatePaginationAfterSearch();
    }
});



