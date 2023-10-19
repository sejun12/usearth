// 아파트 주소 검색창 클릭 시 모달창 열기
const aptAddress = document.getElementById("aptAddress");
const modalFin= document.querySelector(".modalFin");

aptAddress.addEventListener("click", () => {
    modalFin.style.display = "block";
})

// X버튼 클릭 시 아파트 주소 검색 모달창 닫기
const boxRemove= document.querySelector(".boxRemove");

boxRemove.addEventListener("click", ()=>{
    modalFin.style.display = "none";
});

// 검색 버튼 클릭 시 검색 결과 뿌리기
document.querySelector(".aptAddressSearchBTN").addEventListener("click", async () => {
    let keyword = document.querySelector(".searchAptAddress").value;
    let response = await fetch(`/results/search-apts?keyword=${keyword}`)
    let json = await response.json();
    if(response.ok){
        let searchApts = json.searchApts;
        if(searchApts.length > 0){
            let searchAptData = '';
            searchApts.forEach(searchApt => {
                searchAptData += `<li>`
                searchAptData += `<div class="searchList">`
                searchAptData += `<input type="text" name="searchAddressResult" readonly class="searchAddressResult" value="${searchApt.apartmentAddress}">`
                searchAptData += `<button type="button" class="resultSelectBTN">선택하기</button>`
                searchAptData += `</div>`
                searchAptData += `</li>`
            });
            document.querySelector("section>ul").innerHTML = searchAptData;
        }else{
            let searchAptData = '';
            searchAptData += `<div style="font-size: 20px; font-weight: 600; display: block; margin-bottom: 20px; text-align: center;">`
            searchAptData += `<svg width="60" height="60" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" class="mobileIcon" style="fill: rgb(173, 179, 184);margin: 30px 0;">`
            searchAptData += `<path fill-rule="evenodd" clip-rule="evenodd" d="M11 16C14.3137 16 17 13.3137 17 10C17 6.68629 14.3137 4 11 4C7.68629 4 5 6.68629 5 10C5 13.3137 7.68629 16 11 16ZM11 18C15.4183 18 19 14.4183 19 10C19 5.58172 15.4183 2 11 2C6.58172 2 3 5.58172 3 10C3 14.4183 6.58172 18 11 18Z"></path>`
            searchAptData += `<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2929 15.2929C15.6834 14.9024 16.3166 14.9024 16.7071 15.2929L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929Z"></path>`
            searchAptData += `</svg>`
            searchAptData += `<p>아파트 검색결과가 없습니다</p>`
            searchAptData += `</div>`
            searchAptData += `<div style="font-size: 14px; display: flex; flex-wrap: wrap; justify-content: center; line-height: 140%;">`
            searchAptData += `<p>계약 단지의 경우에도 게약 등록된 아파트 단지 주소를</p>`
            searchAptData += `<p>정확히 입력하지 않으면 확인 안될 수 있습니다.</p>`
            searchAptData += `<p>아파트 단지 주소를 확인 후 검색해 보세요.</p>`
            searchAptData += `</div>`

            document.querySelector("section>ul").innerHTML = searchAptData;
        }

        // 선택 버튼 클릭 시 모달 창이 닫히면서 주소 정보 전달
        const resultSelectBTNs = document.querySelectorAll(".resultSelectBTN");

        resultSelectBTNs.forEach(resultSelectBTN => {
            resultSelectBTN.addEventListener("click", (e) => {
                aptAddress.value = e.target.previousElementSibling.value
                modalFin.style.display = "none";
            })
        })
    }
})

// 아파트 주소, 동, 호 중 하나라도 비어있다면 설정하기 버튼 비활성화
const aptAddressInputs = document.querySelectorAll('input[name="aptAddress"]');
const userDong = document.querySelector('#userDong');
const userHo = document.querySelector('#userHo');
const settingBtn = document.querySelector('.settingBtn');

function checkInputValue() {
    console.log(aptAddress.value)
    console.log(userDong.value)
    console.log(userHo.value)
    settingBtn.disabled = aptAddress.value === "" || userDong.value === "" || userHo.value === "";
}

// input 요소의 값이 변경될 때마다 checkInputValue 함수를 실행
aptAddressInputs.forEach(aptAddressInput => {
    aptAddressInput.addEventListener('change', checkInputValue);
})

checkInputValue();