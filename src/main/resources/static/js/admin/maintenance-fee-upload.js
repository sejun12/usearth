window.onload = function () {
    const target = document.getElementById('csvFile');
    const fileName = document.getElementById('fileName');
    const fileResult = document.querySelector('.fileResult');
    const fileDeleteBtn = document.querySelector('.fileDeleteBtn');
    let jsonData = [];
    target.addEventListener('change', handleFileUpload);

    fileDeleteBtn.addEventListener('click', clearFileUpload);

    function handleFileUpload() {
        const file = target.files[0];

        if (file) {
            if (file.name.endsWith('.csv')) {
                fileName.innerHTML = file.name;
                fileResult.style.display = 'block';

                const reader = new FileReader();
                reader.onload = function (e) {
                    const csvData = e.target.result;
                    try {
                        jsonData = convertCSVtoJSON(csvData);
                        // sendJSONDataToAPI(jsonData); // API로 JSON 데이터를 보냅니다.
                    } catch (error) {
                        alert('Error converting CSV to JSON: ' + error.message);
                        clearFileUpload();
                    }
                };
                reader.readAsText(file);
            } else {
                alert("Please upload a valid CSV file.");
                clearFileUpload();
            }
        } else {
            clearFileUpload();
        }
    }

    function clearFileUpload() {
        target.value = '';
        fileName.innerHTML = '';
        fileResult.style.display = 'none';
    }

    function convertCSVtoJSON(csvData) {
        const lines = csvData.split('\n');
        const headers = lines[0].split(",");
        const result = [];

        for (let i = 1; i < lines.length; i++) {
            const currentLine = lines[i].split(",");
            if (currentLine.length === headers.length) {
                const obj = {};
                for (let j = 0; j < headers.length; j++) {
                    const cleanedKey = headers[j].replace(/\s/g, '').replace(/\r/g, '').trim();
                    const cleanedValue = currentLine[j].replace(/\r/g, '').trim().replace(/\\/g, ''); // \ 문자를 제거
                    obj[cleanedKey] = cleanedValue;
                }
                result.push(obj);
            }
        }
        return result;
    }

    function removeNewlines(data) {
        return data.map(item => {
            const cleanedItem = {};
            for (const key in item) {
                if (item.hasOwnProperty(key)) {
                    const cleanedKey = key.replace(/\s/g, '').replace(/\r/g, '').trim();
                    const cleanedValue = item[key].replace(/\r/g, '').trim();
                    cleanedItem[cleanedKey] = cleanedValue;
                }
            }
            return cleanedItem;
        });
    }





    // 등록하기 버튼 클릭 이벤트 처리
    const insertBtn = document.querySelector("#insertBtn");
    insertBtn.addEventListener("click", () => {
        console.log(jsonData);
        // jsonData는 예제로 주어진 JSON 데이터
        for (let i = 0; i < jsonData.length; i++) {
            const item = jsonData[i];
            if (item.hasOwnProperty) {
                console.log(item);
            }
        }

        // 'categorySpan2'와 'categorySpan' 값을 가져와 부가년월로 설정
        const feeImposingYear = document.getElementById("categorySpan2").innerText;
        const feeImposingMonth = document.getElementById("categorySpan").innerText;
        const dueDateInput = document.getElementById("dueDate");
        const dueDateValue = dueDateInput.value;
        const monthString = feeImposingMonth.replace('월', '');
// 날짜 형식 변환 (예: '2023-10-15')
        const date = new Date(dueDateValue);
        const formattedDueDate = date.toISOString().split('T')[0]; // 'YYYY-MM-DD'


        // JSON 데이터에 부가년월 값을 추가
        jsonData.forEach(item => {
            item.FEE_IMPOSING_YEAR = feeImposingYear;
            item.FEE_IMPOSING_MONTH = monthString;
            item.DUE_DATE = formattedDueDate;
        });

// jsonData에는 이제 바뀐 키로 저장된 데이터가 들어 있을 것입니다.

        jsonData = JSON.stringify(jsonData);
        console.log(jsonData);
        fetch('/admin/maintenance-fee-upload', {
            method: 'POST',
            body: jsonData,
            headers: {
                'Content-Type': 'application/json', // JSON 데이터를 보내므로 Content-Type을 application/json으로 설정
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Controller Response:', data);
            })


})
}


// API로부터 데이터 가져오기
fetch("/lists/api/maintenance-fee/month")
    .then(response => response.json())
    .then(data => {
        const ul = document.querySelector(".modal2");

        data.forEach(category => {
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.type = "button";
            button.className = "rangeModalBtn categoryBtns";
            button.textContent = category.imposingMonth + '월';

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

// API로부터 데이터 가져오기
fetch("/lists/api/maintenance-fee/year")
    .then(response => response.json())
    .then(data => {
        const ul = document.querySelector(".modal1");

        data.forEach(category => {
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.type = "button";
            button.className = "rangeModalBtn categoryBtns2";
            button.textContent = category.imposingYear + '년도';

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

document.querySelector(".resetBtn").addEventListener("click", function() {
    location.reload(); // 현재 페이지를 새로고침합니다.
});


