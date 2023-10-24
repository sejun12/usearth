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

// 방문 차량등록 모달창 내 확인버튼 클릭 시 입력받은 데이터 보내고 모달창 닫기
const confirmRegistrationBtn = document.querySelector(".confirmRegistrationBtn");

confirmRegistrationBtn.addEventListener("click", () => {
    registrationModalWrap.style.display = 'none';
    registrationModalGray.style.display = 'none';
    registrationMessageUpDown();
})

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
}alWrapperGray = document.querySelector(".modalWrapperGray");

document.querySelector(".resetBtn").addEventListener("click", function() {
    location.reload(); // 현재 페이지를 새로고침합니다.
});
//----------------------------------------------------------------------------------------

const maintenanceFeeSpan = document.querySelector("#total");
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

async function getVisit(){
    const response=await fetch("/lists/api/visit/1")
   if(response.ok){
       return await response.json();
   }
}
function appendVisit(visit) {
    const maintenanceFeeContent = document.querySelector(".maintenanceFeeContent");
    const first = document.querySelector('.first');
    if (visit) {
        const li = document.createElement('li');
        const time = timeChange(visit);
    li.innerHTML = `
         <div class="maintenanceFeeList">
                <div class="barBtnOne">${visit.userDong}</div>
                <div class="barBtnOne">${visit.userHo}</div>
                <div  style="width: 140px;" class="barBtnOne">${visit.visitBookingCarNumber}</div>
                <div style="width: 200px;" class="barBtnOne">${time.startDateFormatted + "~" + time.endDateFormatted}</div>
                <div  style="width: 140px;" class="barBtnOne">${visit.visitBookingPurpose}</div>
                <div style="width: 140px;"  class="barBtnOne">
                  <button type="button" class="showDetailBtn">취소하기</button>
                </div>
              </div>
    `;

    first.appendChild(li);
    const showDetailButton = li.querySelector('.showDetailBtn');
    showStatus(showDetailButton);
}
else{
    maintenanceFeeContent.style.display='flex';
}

}
//시간 바꾸기
function timeChange(visit){
    const startDate = visit.visitBookingStartDate;
    const endDate = visit.visitBookingEndDate;

    const startDateParts = startDate.split(' ')[0].split('-');
    const endDateParts = endDate.split(' ')[0].split('-');

    const startDateFormatted = `${startDateParts[0]}-${startDateParts[1]}-${startDateParts[2]}`;
    const endDateFormatted = `${endDateParts[0]}-${endDateParts[1]}-${endDateParts[2]}`;

    return { startDateFormatted, endDateFormatted };
}

let page = 1;
let isLoading = false;

function showList() {
    if (isLoading) return;

    isLoading = true;
    getVisit().then((visit) => {
        // maintenanceFeeSpan.innerHTML = `총 ${visit.length}건`;
        // const rowCount = 51;
        // const offset = (page - 1) * rowCount;
        // const limit = offset + rowCount;
        // visit = visit.slice(offset, limit);

        if(visit.length > 0) {
            visit.forEach((visit) => {
                appendVisit(visit);
            });
            page++;
        }
        isLoading = false;
    })
}
showList();

//검색 !!
async function fetchData() {
// 검색 버튼 클릭 이벤트 핸들러
        // 여기에서 필요한 데이터 가져오는 로직을 작성합니다.
        const searchTitle = document.getElementById("searchTitle").value.trim();
        const startDate = document.querySelector(".searchContainer input[type='date']:nth-of-type(1)").value;
        const endDate = document.querySelector(".searchContainer input[type='date']:nth-of-type(2)").value;
        const searchDong = document.getElementById("categorySpan").textContent.match(/\d+/g);
        const searchHo = document.getElementById("searchHo").value.trim();
        const id = 1;  // 예시로 사용한 ID
        const baseUrl = `/lists/api/results/search/${id}`;
        let url = baseUrl;
        const params = [];
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
            console.log(url)
        }

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
            }
            // 데이터를 처리
            return await response.json();
        } catch (error) {
            // 오류 처리
            console.error("오류 발생: ", error);
        }
    };

// 화면 업데이트
function updateUI(data) {
    const maintenanceFeeContent = document.querySelector(".maintenanceFeeContent");
    const first = document.querySelector('.first');
    first.innerHTML = ""; // 이전 내용을 지우고 새로운 내용으로 갱신

    if (data.length > 0) {
        data.forEach((visit) => {
            const li = document.createElement('li');
            const time = timeChange(visit);
            li.innerHTML = `
                <div class="maintenanceFeeList">
                    <div class="barBtnOne">${visit.userDong}</div>
                    <div class="barBtnOne">${visit.userHo}</div>
                    <div style="width: 140px;" class="barBtnOne">${visit.visitBookingCarNumber}</div>
                    <div style="width: 200px;" class="barBtnOne">${time.startDateFormatted + "~" + time.endDateFormatted}</div>
                    <div style="width: 140px;" class="barBtnOne">${visit.visitBookingPurpose}</div>
                    <div style="width: 140px;" class="barBtnOne">
                        <button type="button" class="showDetailBtn">취소하기</button>
                    </div>
                </div>
            `;
            first.appendChild(li);
            const showDetailButton = li.querySelector('.showDetailBtn');
            showStatus(showDetailButton);
            maintenanceFeeContent.style.display='none';
        });
    } else {
        maintenanceFeeContent.style.display = 'flex';
    }
}

// 검색 버튼 클릭 이벤트 핸들러
document.getElementById("registerMaintenanceFeeBtn").addEventListener("click", async () => {
    const ulElement = document.querySelector('.pageButtonLists');
    ulElement.innerHTML = '';
    fetchData().then((visit) => {
        maintenanceFeeSpan.innerHTML = `총 ${visit.length}건`;
        updateUI(visit);
    });
    createPaginationButtons(); // 검색 결과에 따라 새로운 페이지 버튼 생성

    // currentPage = 1; // 검색 결과에 따라 현재 페이지를 다시 1로 설정
    // await updatePagination(); // 첫 번째 페이지 데이터 가져오기
});


function createPaginationButtons() {

    const ulElement = document.querySelector('.pageButtonLists');
    ulElement.innerHTML = ''; // 기존 버튼을 지웁니다.


    for (let i = pagination.startPage; i <= pagination.endPage; i++) {
        const liElement = document.createElement('li');
        liElement.classList.add('li-ml');

        const buttonElement = document.createElement('button');
        buttonElement.type = 'button';
        buttonElement.classList.add('buttonNumber');

        const spanElement = document.createElement('span');
        spanElement.classList.add('content-primary');
        spanElement.textContent = i; // 페이지 번호

        if (i === pagination.startPage) {
            spanElement.classList.add('blueText'); // 첫 번째 페이지 번호에 blueText 클래스 추가
        }

        buttonElement.appendChild(spanElement);
        liElement.appendChild(buttonElement);
        ulElement.appendChild(liElement);
    }
}

createPaginationButtons();


const paginations = document.getElementById('pagination');
const first = document.querySelector('.first');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentPage = 1; // 현재 페이지

// 페이지 번호 클릭 이벤트 처리
paginations.addEventListener('click', async function (event) {
    if (event.target.classList.contains('buttonNumber')) {
        // 모든 페이지 번호에서 파란색 스타일 제거
        const pageButtons = document.querySelectorAll('.content-primary');
        pageButtons.forEach(button => button.classList.remove('blueText'));

        const newPage = parseInt(event.target.textContent);
        if (!isNaN(newPage)) {
            currentPage = newPage;
         await updatePagination();

            // 클릭한 페이지 번호에 파란색 스타일 추가
            event.target.querySelector('.content-primary').classList.add('blueText');
        }
    }
});


// 이전 페이지 버튼 클릭 이벤트 처리
prevButton.addEventListener('click', async function () {
    if (currentPage > 1) {
        // 모든 페이지 번호에서 파란색 스타일 제거
        const pageButtons = document.querySelectorAll('.content-primary');
        pageButtons.forEach(button => button.classList.remove('blueText'));

        currentPage--;
      await updatePagination();

        // 현재 페이지 번호에 파란색 스타일 추가
        const currentButton = document.querySelector(`.content-primary:nth-child(${currentPage})`);
        if (currentButton) {
            currentButton.classList.add('blueText');
        }
    }
});

// 다음 페이지 버튼 클릭 이벤트 처리
nextButton.addEventListener('click', async function () {
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

    await updatePagination();
});



// 페이지 업데이트 함수
async function updatePagination() {
    await getPosts(currentPage);
}
async function getPosts(page) {
    const id=1;
    const url = `/lists/api/visit/${id}?page=${page}`; // 실제 서버 API 엔드포인트를 사용해야 합니다.
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            // 데이터 가져오기 성공

            renderData(data);
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
        appendVisit(resident);
    });
}

//방문차량 등록
confirmRegistrationBtn.addEventListener("click", async () => {
    const data = {
        visitBookingStartDate: document.querySelector("input[name='visitBookingStartDate']").value,
        visitBookingEndDate: document.querySelector("input[name='visitBookingEndDate']").value,
        visitBookingPurpose: document.querySelector("input[name='visitBookingPurpose']").value,
        userDong: document.querySelector("input[name='userDong']").value,
        userHo: document.querySelector("input[name='userHo']").value,
        visitBookingCarNumber: document.querySelector("input[name='visitBookingCarNumber']").value
    };

   await postDataToServer(data);

})

async function postDataToServer(data) {
    try {
        const response = await fetch('/admin/visit-vehicle', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8"
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

