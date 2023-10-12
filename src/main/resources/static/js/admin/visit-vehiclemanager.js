// 삭제 버튼 클릭 시 삭제 모달창 열기
const modalWindow = document.querySelector(".modalWindow");
const modalWrapperGray = document.querySelector(".modalWrapperGray");
const postDeleteBTNs = document.querySelectorAll(".postDeleteBTN")

postDeleteBTNs.forEach((postDeleteBTN) => postDeleteBTN.addEventListener("click", () => {
    console.log(modalWindow.style.display);
    if(modalWindow.style.display === 'none'){
        modalWindow.style.display = 'block';
        modalWrapperGray.style.display = 'block';
    }
}))

// 취소 버튼으로 모달창 닫기
const cancelBtn = document.querySelector(".cancelBtn");

cancelBtn.addEventListener("click", () => {
    if(modalWindow.style.display === 'block'){
        modalWindow.style.display = 'none';
        modalWrapperGray.style.display = 'none';
    }
})

// 확인 버튼을 클릭 시 해당 게시글 삭제 후 모달창 닫기
const confirmBtn = document.querySelector(".confirmBtn");

confirmBtn.addEventListener("click", () => {
    modalWindow.style.display = 'none';
    modalWrapperGray.style.display = 'none';
    deleteMessageUpDown();
})

// 삭제완료 메시지 뛰우는 메소드
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

// 연도 정렬 방식 클릭 이벤트
const sortYearBTN = document.querySelector(".sortYearBTN");
const years = document.querySelector(".years");
const yearsListBTNs =document.querySelectorAll(".yearsListBTN");

sortYearBTN.addEventListener("click", () => {
    //
    sortMonthBTN.style.borderColor = 'rgba(0,0,0,.1)';
    month.style.display = 'none';
    //
    sortPriorityBTN.style.borderColor = 'rgba(0,0,0,.1)';
    priority.style.display = 'none';

    if(sortYearBTN.style.borderColor === "rgb(91, 68, 234)") {
        sortYearBTN.style.borderColor = 'rgba(0,0,0,.1)';
        years.style.display = 'none';
    }else {
        sortYearBTN.style.borderColor = 'rgb(91, 68, 234)';
        years.style.display = 'block';
    }

})

yearsListBTNs.forEach((yearsListBTN) => yearsListBTN.addEventListener("click", (e) => {
    const targetText = e.target.innerText;
    const sortYear = document.querySelector(".sortYear");

    sortYear.textContent = targetText;
    sortYearBTN.style.borderColor = 'rgba(0,0,0,.1)';
    years.style.display = 'none';
}))

// 월 정렬 방식 클릭 이벤트
const sortMonthBTN = document.querySelector(".sortMonthBTN");
const month = document.querySelector(".month");
const monthListBTNs =document.querySelectorAll(".monthListBTN");

sortMonthBTN.addEventListener("click", () => {
    //
    sortYearBTN.style.borderColor = 'rgba(0,0,0,.1)';
    years.style.display = 'none';
    //
    sortPriorityBTN.style.borderColor = 'rgba(0,0,0,.1)';
    priority.style.display = 'none';

    if(sortMonthBTN.style.borderColor === "rgb(91, 68, 234)") {
        sortMonthBTN.style.borderColor = 'rgba(0,0,0,.1)';
        month.style.display = 'none';
    }else {
        sortMonthBTN.style.borderColor = 'rgb(91, 68, 234)';
        month.style.display = 'block';
    }

})

monthListBTNs.forEach((monthListBTN) => monthListBTN.addEventListener("click", (e) => {
    const targetText = e.target.innerText;
    const sortMonth = document.querySelector(".sortMonth");

    sortMonth.textContent = targetText;
    sortMonthBTN.style.borderColor = 'rgba(0,0,0,.1)';
    month.style.display = 'none';
}))

// 우선순위 정렬 방식 클릭 이벤트
const sortPriorityBTN = document.querySelector(".sortPriorityBTN");
const priority = document.querySelector(".priority");
const priorityListBTNs =document.querySelectorAll(".priorityListBTN");

sortPriorityBTN.addEventListener("click", () => {
    //
    sortYearBTN.style.borderColor = 'rgba(0,0,0,.1)';
    years.style.display = 'none';
    //
    sortMonthBTN.style.borderColor = 'rgba(0,0,0,.1)';
    month.style.display = 'none';

    if(sortPriorityBTN.style.borderColor === "rgb(91, 68, 234)") {
        sortPriorityBTN.style.borderColor = 'rgba(0,0,0,.1)';
        priority.style.display = 'none';
    }else {
        sortPriorityBTN.style.borderColor = 'rgb(91, 68, 234)';
        priority.style.display = 'block';
    }

})

priorityListBTNs.forEach((priorityListBTN) => priorityListBTN.addEventListener("click", (e) => {
    const targetText = e.target.innerText;
    const sortPriority = document.querySelector(".sortPriority");

    sortPriority.textContent = targetText;
    sortPriorityBTN.style.borderColor = 'rgba(0,0,0,.1)';
    priority.style.display = 'none';
}))

// 방문 차량등록 모달창 열기
const registrationBTN = document.querySelector(".registrationBTN");
const registrationModalWrap = document.querySelector(".registrationModalWrap");
const registrationModalGray = document.querySelector(".registrationModalGray");

registrationBTN.addEventListener("click", () => {
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
}