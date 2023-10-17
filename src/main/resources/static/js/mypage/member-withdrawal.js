const openModalBtn= document.getElementById("openModal");
const modal=document.getElementById("quitModal");
const closeModalBtn=document.getElementById("closeModal");

function openModal(){
    modal.style.display="block";
}
function closeModal(){
    modal.style.display="none";
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