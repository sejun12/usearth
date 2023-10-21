const openModalBtn= document.getElementById("openModal");
const modal=document.getElementById("quitModal");
const closeModalBtn=document.getElementById("closeModal");
const button = document.querySelector('.primary2');
function openModal(){
    modal.style.display="block";
}
function closeModal(){
    radioButtons.forEach((radio) => {
        radio.checked = false;
    });

    // 모든 라벨에서 "checked" 클래스를 제거
    labels.forEach((label) => {
        label.classList.remove('checked');
    });
    modal.style.display="none";
    button.style.backgroundColor = ''
}
// 버튼 클릭시 이벤트
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

window.addEventListener("click",(e)=>{
    if(e.target === modal){
        closeModal();
    }
});

const iconLink =document.querySelector(".iconLink ");

iconLink .addEventListener("click",()=>{
    window.location.href="/mypage/inquiry";
})


const radioButtons = document.querySelectorAll('.radioCheck input[type=radio]');
const labels = document.querySelectorAll('.radioCheck label');

// 라디오 버튼에 이벤트 리스너를 추가
radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        // 모든 라벨에서 "checked" 클래스를 제거
        labels.forEach((label) => {
            label.classList.remove('checked');
        });
        // 현재 선택한 라디오 버튼의 라벨에 "checked" 클래스를 추가
        labels[index].classList.add('checked');

        // 체크된 라디오 버튼이 하나라도 있다면 버튼의 스타일을 변경
        const isAnyChecked = [...radioButtons].some((radio) => radio.checked);
        if (isAnyChecked) {
            button.style.backgroundColor = '#2a7de1';
            button.removeAttribute('disabled'); // 버튼을 활성화
        } else {
            button.style.backgroundColor = ''; // 원래 스타일로 복원
            button.setAttribute('disabled', 'true'); // 버튼을 비활성화
        }
    });
});

button.addEventListener('click', () => {
    const isAnyChecked = [...radioButtons].some((radio) => radio.checked);

    if (isAnyChecked&&!button.hasAttribute('disabled')) {

        // 폼 요소 생성
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = '/mypage/member-withdrawal';

        // 폼을 body에 추가하고 자동으로 제출
        document.body.appendChild(form);
        form.submit();
    }
});
