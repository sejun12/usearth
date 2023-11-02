
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

    console.log("rangeCategory :", rangeCategory);
    console.log("categoryBtn2 :", categoryBtn2);
    console.log(target);


    // 모달 영역인지 확인
    const isModalContent = rangeCategory.contains(target) || categoryBtn2.contains(target);

    if (!isModalContent && isShowCategory) {


        if (isShowCategory) {
            toggleModal(rangeCategory, categoryBtn2, categorySpan2, categorySvg, isShowCategory);
            isShowCategory = false;
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

// 토글버튼

const approvalBtns = document.querySelectorAll('.approvalBtn');

approvalBtns.forEach((btn) => {
    let isHandledOnRight = false;
    btn.addEventListener('click', function() {
        const handled = btn.querySelector('.handled');
        if (handled) {
            if (isHandledOnRight) {
                handled.style.left = '2px';
                btn.style.backgroundColor = '#ccc'; // 연한 회색
            } else {
                handled.style.left = 'calc(100% - 18px)';
                btn.style.backgroundColor = '#3e90e0'; // 파란색
            }
            isHandledOnRight = !isHandledOnRight;
        }
    });
});

let announcementCategoryIdValue = null;

async function findCategoryId() {
    try {
        const response = await fetch("/lists/api/announcement/category");
        const data = await response.json();

        const categorySpan2 = document.getElementById("categorySpan2");
        const buttonText = categorySpan2.textContent.trim();

        data.forEach(category => {
            if (category.announcementCategoryName === buttonText) {
                announcementCategoryIdValue = category.id;
                console.log("buttonText:", buttonText);
                console.log("category.announcementCategoryName:", category.announcementCategoryName);
                console.log("category.id:", category.id);
                console.log("announcementCategoryId:", announcementCategoryIdValue);
            }
        });

        // 이제 announcementCategoryId를 사용하여 적절한 동작 수행
    } catch (error) {
        console.error("Error fetching category data:", error);
    }
}


    // 등록하기 버튼 클릭 이벤트 처리
    const insertBtn = document.querySelector("#insertBtn");
    insertBtn.addEventListener("click", () => {

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = '/admin/announcement-write';
        findCategoryId().then(async () => {
        console.log("최종:", announcementCategoryIdValue);
        // 이제 fetch를 실행할 때 올바른 announcementCategoryId가 사용될 것입니다.

        const announcementTitle = document.createElement('input');
        const announcementContent = document.createElement('input');
        const announcementCategoryId = document.createElement('input');
        announcementTitle.type = 'hidden';
        announcementContent.type = 'hidden';
        announcementCategoryId.type = 'hidden';
        announcementTitle.name = 'announcementTitle'; // 이건 바꾸지말아주세요
        announcementContent.name = 'announcementContent'; // 이건 바꾸지말아주세요
        announcementCategoryId.name = 'announcementCategoryId'; // 이건 바꾸지말아주세요
        announcementTitle.value = document.querySelector("#announcementTitle").value;
        announcementContent.value =  document.querySelector("#announcementContent").value;
        announcementCategoryId.value =  announcementCategoryIdValue;
        form.appendChild(announcementTitle);
        form.appendChild(announcementContent);
        form.appendChild(announcementCategoryId);

        document.body.appendChild(form);
        form.submit();
        });
    });




