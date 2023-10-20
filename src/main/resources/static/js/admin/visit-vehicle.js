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


// 민원 처리 버튼
// 모든 showDetailBtn 버튼 요소를 선택합니다.
const showDetailButtons = document.querySelectorAll('.showDetailBtn');

showDetailButtons.forEach(button => {
    let isToggled = false;

    // 버튼을 클릭할 때마다 토글 작업을 수행합니다.
    button.addEventListener('click', function() {
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


