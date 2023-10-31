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


// 전역 이벤트 리스너 추가
document.addEventListener("click", (event) => {
    const target = event.target;

    // 모달 영역인지 확인
    if (rangeBuilding && categoryBtn && rangeCategory) {
        const isModalContent = rangeBuilding.contains(target) || categoryBtn.contains(target) || rangeCategory.contains(target);

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
    }
});


// 호 및 제목/내용 검색창 클릭 시, borderColor 변경하는 코드입니다.


const searchTitle = document.getElementById("searchTitle");
const searchHo = document.getElementById("searchHo");


// input 요소가 클릭되었을 때
searchTitle.addEventListener("focus", function () {
    // 테두리 색상 변경
    this.style.borderColor =  "rgb(54,128,175)";
});

// 다른 곳을 클릭하면
document.addEventListener("click", function (event) {
    // 클릭된 요소가 검색창(input)이 아니라면
    if (event.target !== searchTitle) {
        // 테두리 색상 초기 상태로 변경
        searchTitle.style.borderColor = "rgba(0, 0, 0, 0.1)";
    }
});

// input 요소가 클릭되었을 때
searchHo.addEventListener("focus", function () {
    // 테두리 색상 변경
    this.style.borderColor =  "rgb(54,128,175)";
});

// 다른 곳을 클릭하면
document.addEventListener("click", function (event) {
    // 클릭된 요소가 검색창(input)이 아니라면
    if (event.target !== searchHo) {
        // 테두리 색상 초기 상태로 변경
        searchHo.style.borderColor = "rgba(0, 0, 0, 0.1)";
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


// 방문 차량등록 모달창 열기
const registerCarBtn = document.querySelector(".registerCarBtn");
const registrationModalWrap = document.querySelector(".registrationModalWrap");
const registrationModalGray = document.querySelector(".registrationModalGray");

registerCarBtn.addEventListener("click", () => {
    registrationModalWrap.style.display = 'block';
    registrationModalGray.style.display = 'block';
})

// 방문 차량등록 모달창 내 취소버튼 클릭 시 모달창 닫기
const cancelRegistrationBtn = document.querySelector(".cancelRegistrationBtn");

cancelRegistrationBtn.addEventListener("click", () => {
    registrationModalWrap.style.display = 'none';
    registrationModalGray.style.display = 'none';
})
function showStatus(button) {
        let isToggled = false;

        // 버튼을 클릭할 때마다 토글 작업을 수행합니다.
        button.addEventListener('click', function () {
            if (isToggled) {
                // 이미 토글된 상태인 경우 처리완료로 변경
                this.style.backgroundColor = 'rgb(212, 227, 255)';
                this.innerText = '취소하기';
            } else {
                // 처음 클릭하는 경우 진행중으로 변경
                this.style.backgroundColor = 'rgb(231,231,231)';
                this.innerText = '취소완료';
            }
            isToggled = !isToggled;
        });
}
//----------------------------------------------------------------------------------------
//검색 초기화 함수
function resetSearchFields() {
    document.getElementById("searchTitle").value = "";
    document.querySelector(".searchContainer input[type='date']:nth-of-type(1)").value = "";
    document.querySelector(".searchContainer input[type='date']:nth-of-type(2)").value = "";
    document.getElementById("categorySpan").textContent = "전체 동";
    document.getElementById("searchHo").value = "";
}
document.querySelector(".resetBtn").addEventListener("click", function() {
        resetSearchFields();
//초기화 검색 다시
    document.getElementById("registerMaintenanceFeeBtn").click();
});

let total = 0;
let startPage = 0;
let endPage = 0;
let currentPage = 1; // 현재 페이지

const maintenanceFeeSpan = document.querySelector("#total");
const maintenanceFeeContent = document.querySelector(".maintenanceFeeContent");

//처음 화면에 뿌릴 데이터
async function getVisit(){
    //데이터 경로
    const response=await fetch(`/lists/api/visit/${adminId}`)
   if(response.ok){
       return await response.json();
   }
}

//시간 바꾸는 함수!!!(시분초 자르기)
function timeChange(visit){
    const startDate = visit.visitBookingStartDate.split(' ')[0];
    const endDate = visit.visitBookingEndDate.split(' ')[0];

    return { startDate, endDate };
}

//기존 데이터를 넣어서 html만들어서 뿌리기
function appendVisit(visit) {
    const first = document.querySelector('.first');
    if (visit) {
        const li = document.createElement('li');
        const time = timeChange(visit);
    li.innerHTML = `
         <div class="maintenanceFeeList">
                <div class="barBtnOne">${visit.userDong}</div>
                <div class="barBtnOne">${visit.userHo}</div>
                <div  style="width: 140px;" class="barBtnOne">${visit.visitBookingCarNumber}</div>
                <div style="width: 200px;" class="barBtnOne">${time.startDate + "~" + time.endDate}</div>
                <div  style="width: 140px;" class="barBtnOne">${visit.visitBookingPurpose}</div>
                <div style="width: 140px;"  class="barBtnOne">
                  <button type="button" class="showDetailBtn">취소하기</button>
                </div>
              </div>
    `;

    first.appendChild(li);

    // 예약취소 버튼 만들고 삭제
    const showDetailButton = li.querySelector('.showDetailBtn');
        showStatus(showDetailButton);
        // //예약 취소 눌르면 삭제
        showDetailButton.addEventListener("click",async ()=>{
            const visitId=visit.id;
            const deleteEndpoint = `/lists/api/delete/${visitId}`;
            const response =await fetch(deleteEndpoint, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json', // Adjust the content type if needed
                }
            });
            if(response.ok){
                window.location.reload();
            }
        })
}
else{
    maintenanceFeeContent.style.display='flex';
}
}
//여기서 위쪽데이터 foreach로하나씩 다뿌리는걸 사용
async function showList() {
    const visit = await getVisit();
    visit.forEach((visit) => {
        appendVisit(visit);
    });
}
//처음화면 뿌려보자~~
showList();
// ____________________________________________
async function getPosts(page) {
    const id=adminId;
    const url = `/lists/api/visit/${id}?page=${page}`; // 실제 서버 API 엔드포인트를 사용해야 합니다.
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            //페이지이동후 랜더링
            renderData(data);
            const initialCount = response.headers.get('X-Initial-Total-Count');
            maintenanceFeeSpan.innerText = `총 ${initialCount}건`;
        } else {
            console.error('데이터를 가져오는데 실패했습니다.');
        }
    } catch (error) {
        console.error('데이터를 가져오는데 실패했습니다.', error);
    }
}
//검색 하기전 페이지 이동
async function updatePagination() {
    await getPosts(currentPage);
}

// 데이터를 화면에 렌더링하는 함수
function renderData(data) {
    const first = document.querySelector('.first');
    first.innerHTML = ''; // 기존 데이터 지우기
    data.forEach((resident) => {
        appendVisit(resident);
    });
    // 요소의 텍스트 내용 변경 검색시 바뀔 총 데이터 수
    if (maintenanceFeeSpan) {
        maintenanceFeeSpan.innerText = `총 ${total}건`;
    }
}
// --------------------------------------------------------------------------------------
//검색 !!


//검색할 키워드들 데이터 가지고오기  페이지도 붙여서
async function fetchData(page) {
// 검색 버튼 클릭 이벤트 핸들러
        // 여기에서 필요한 데이터 가져오는 로직을 작성합니다.
        const searchTitle = document.getElementById("searchTitle").value.trim();
        const startDate = document.querySelector(".searchContainer input[type='date']:nth-of-type(1)").value;
        const endDate = document.querySelector(".searchContainer input[type='date']:nth-of-type(2)").value;
        const searchDong = document.getElementById("categorySpan").textContent.match(/\d+/g);
        const searchHo = document.getElementById("searchHo").value.trim();
        const id = adminId;  // 예시로 사용한 ID
        const baseUrl = `/lists/api/results/search/${id}`;
        let url = baseUrl;
        const params = [];
        //페이지도 붙여서 보내자
        params.push(`page=${page}`);
        if (searchTitle) {
            params.push(`visitBookingCarNumber=${searchTitle}`);
        }
        if (startDate) {
            params.push(`visitBookingStartDate=${startDate}`);
        }
        if (endDate) {
            params.push(`visitBookingEndDate=${endDate}`);
        }
        if (searchDong && searchDong.length > 0) {
            params.push(`userDong=${searchDong}`);
        }
        if (searchHo) {
            params.push(`userHo=${searchHo}`);
        }

        // URL에 검색 조건 추가
        if (params.length > 0) {
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
            return await response.json(); // JSON 데이터를 가져옵니다.
        } catch (error) {
            // 오류 처리
            console.error("오류 발생: ", error);
        }
    }

// 검색 버튼 클릭 이벤트 fetchData여기서 받은 데이터 가져와서 사용
//none 처리를 위한 선언
const maintenanceFeeBar=document.querySelector(".maintenanceFeeBar");
const pageBtn=document.querySelector("#pagination");
//검색버튼눌렀을때 아닐때 구분을 위해 isSearchMode 선언
let isSearchMode = false;
document.getElementById("registerMaintenanceFeeBtn").addEventListener("click", async () => {
         currentPage =1; //처음 페이지 이동하고 검색하면 안나옴 페이지 초기화
        isSearchMode = true; // 검색 버튼을 누를 때 검색 모드로 설정
    const visit = await fetchData(currentPage);
    if(visit.length>0){
        await updatePaginationAfterSearch(visit);
        maintenanceFeeContent.style.display='none';
        maintenanceFeeBar.style.display='';
        pageBtn.style.display='block';
    }
    else {
            createPaginationButtons();
            renderData(visit)
            maintenanceFeeContent.style.display='flex';
            maintenanceFeeBar.style.display='none';
            pageBtn.style.display='none';
        }
});
//기존에 페이지 이동후  검색후 페이지 이동식 데이터
async function updatePaginationAfterSearch(data) {
            pagination.total = total;
            pagination.startPage = startPage;
            pagination.endPage = endPage;
            createPaginationButtons(); // pagination 정보를 업데이트한 후 버튼을 다시 생성
            renderData(data);//검색결과에 따라 랜더링
}
// ______________________________________________________________________________________________-
//  버튼 만들기 버튼 클래스 타입 추가

function createPaginationButtons() {
    const ulElement = document.querySelector('.pageButtonLists');
    ulElement.innerHTML = ''; // Clear existing buttons

    for (let i = pagination.startPage; i <= pagination.endPage; i++) {
        const liElement = document.createElement('li');
        liElement.classList.add('li-ml');

        const buttonElement = document.createElement('button');
        buttonElement.type = 'button';
        buttonElement.classList.add('buttonNumber');

        const spanElement = document.createElement('span');
        spanElement.classList.add('content-primary');
        spanElement.textContent = i; // Page number

        if (i === pagination.startPage) {
            spanElement.classList.add('blueText');
        }

        buttonElement.appendChild(spanElement);
        liElement.appendChild(buttonElement);
        ulElement.appendChild(liElement);
    }
}
//페이지 번호 클릭시 이동
async function handlePageNumberClick(event) {
    if (event.target.classList.contains('buttonNumber')) {
        const newPage = parseInt(event.target.textContent);
        if (!isNaN(newPage)) {
            currentPage = newPage;
            //검색인지 아닌지 검색일떄 구분
            if (isSearchMode) {
                await  updatePaginationAfterSearch(await fetchData(currentPage));
            } else {
                await  updatePagination();
            }
            updateButtonHighlights();
        }
    }
}

//이전버튼
async function handlePrevButtonClick() {
    if (currentPage > 1) {
        currentPage--;
        if (isSearchMode) {
            await updatePaginationAfterSearch(await fetchData(currentPage));
        } else {
            await updatePagination();
        }
        updateButtonHighlights();
    }
}

//다음버튼
async function handleNextButtonClick() {
    const pageButtons = document.querySelectorAll('.content-primary');
    const maxPage = pageButtons.length;

    currentPage++;

    if (currentPage > maxPage) {
        currentPage--;
    }
    if (isSearchMode) {
        await updatePaginationAfterSearch(await fetchData(currentPage));
    } else {
        await updatePagination();
    }
    updateButtonHighlights();
}
//검색하고 버튼 색 초기화 험수
function updateButtonHighlights() {
    const pageButtons = document.querySelectorAll('.content-primary');
    pageButtons.forEach((button, index) => {
        if (index === currentPage - pagination.startPage) {
            button.classList.add('blueText');
        } else {
            button.classList.remove('blueText');
        }
    });
}

//검색 만들기 실행 !!
createPaginationButtons();
const pageNumber = document.getElementById('pagination');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// 클릭이벤트 걸기
pageNumber.addEventListener('click', handlePageNumberClick);
prevButton.addEventListener('click', handlePrevButtonClick);
nextButton.addEventListener('click', handleNextButtonClick);

// _____________________________________________________________________________--
// 방문 차량등록 모달창 내 확인버튼 클릭 시 입력받은 데이터 보내고 모달창 닫기
const confirmRegistrationBtn = document.querySelector(".confirmRegistrationBtn");
// 성공 시 동작
function success(){
    // 모든 필드가 유효하면 모달을 닫고 메시지를 표시
    registrationModalWrap.style.display = 'none';
    registrationModalGray.style.display = 'none';
    registrationMessageUpDown();
}

const registrationMessageWrapError=document.querySelector(".registrationMessageWrap-error");
//에러 메시지 뛰우는 메소드
function error(){
    registrationMessageWrapError.style.display = 'flex';
    registrationMessageWrapError.classList.remove('slideDown');
    registrationMessageWrapError.classList.add('slideUp');
    setTimeout(() => {
        registrationMessageWrapError.classList.remove('slideUp');
        registrationMessageWrapError.classList.add('slideDown');
        setTimeout(() => {
            registrationMessageWrapError.style.display = 'none';
        }, 200);
    }, 2000);
}

// 등록완료 메시지 뛰우는 메소드
const registrationMessageWrap = document.querySelector(".registrationMessageWrap");
function registrationMessageUpDown() {
    registrationMessageWrap.style.display = 'flex';

    registrationMessageWrap.classList.remove('slideDown');
    registrationMessageWrap.classList.add('slideUp');
    setTimeout(() => {
        registrationMessageWrap.classList.remove('slideUp');
        registrationMessageWrap.classList.add('slideDown');
        setTimeout(() => {
            registrationMessageWrap.style.display = 'none';
        }, 200);
    }, 2000);
}
//유효성 검사
const inputFields = [
    document.querySelector(".startVisitDateInput"),
    document.querySelector(".endVisitDateInput"),
    document.querySelector(".visitPurposeInput"),
    document.querySelector("input[name=userDong]"),
    document.querySelector("input[name=userHo]"),
    document.querySelector(".vehicleNumberInput")
];

// 유효성 검사
function validateInputFields(inputFields) {
    return inputFields.some(field => field.value.trim() === '');
}

confirmRegistrationBtn.addEventListener("click", async () => {
    const isAnyFieldEmpty = validateInputFields(inputFields);
    if (isAnyFieldEmpty) {
        // 입력 필드 중 하나라도 비어 있으면 오류 메시지를 표시하고 버튼 클릭을 막습니다
        error();
    }
    else if(!flag) {
        alert("없는 동 호수 입니다!");
    }else {
        success();
        // 모든 필드가 유효하면 서버로 데이터를 보내고 페이지를 새로 고칩니다
        const data = {
            visitBookingStartDate: document.querySelector("input[name='visitBookingStartDate']").value,
            visitBookingEndDate: document.querySelector("input[name='visitBookingEndDate']").value,
            visitBookingPurpose: document.querySelector("input[name='visitBookingPurpose']").value,
            userDong: document.querySelector("input[name='userDong']").value,
            userHo: document.querySelector("input[name='userHo']").value,
            visitBookingCarNumber: document.querySelector("input[name='visitBookingCarNumber']").value
        };

        await postDataToServer(data);
        window.location.reload();
    }
});

async function postDataToServer(data) {
    try {
        const response = await fetch('/lists/api/visit-update', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return await response.text();

        } else {
            console.error('서버에서 오류 응답을 받았습니다.');
            return null; // 또는 다른 오류 처리
        }
    } catch (error) {
        console.error('POST 요청 중 오류 발생: ', error);
        return null; // 또는 다른 오류 처리
    }
}
