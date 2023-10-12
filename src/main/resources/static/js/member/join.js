// 회원가입 성공시
const modalFin=document.querySelector(".modalFin");
const boxRemove=document.querySelector(".boxRemove");
const applyBtn=document.querySelector(".applyBtn");

// 성공시 나와야할텐디

boxRemove.addEventListener("click", ()=>{
    modalFin.style.display="none";
});
applyBtn.addEventListener("click",()=>{
    modalFin.style.display="none";
});


// 아이디 비번 입력
const inputs =document.querySelectorAll("input");
const loginBtn=document.querySelector(".loginBtn");
const  caption2 =document.querySelector(".caption2");


let  spanElement = document.querySelectorAll('.add span');
// Create a new div element
let newDiv = document.createElement('div');
newDiv.innerHTML = `<div  class="caption2">
  <svg  width="12" height="12" viewBox="0 0 12 12" fill="black" xmlns="http://www.w3.org/2000/svg" class="applicationIcon">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6ZM6 3.25C6.27614 3.25 6.5 3.47386 6.5 3.75V6.25C6.5 6.52614 6.27614 6.75 6 6.75C5.72386 6.75 5.5 6.52614 5.5 6.25V3.75C5.5 3.47386 5.72386 3.25 6 3.25ZM6 8.75C6.41421 8.75 6.75 8.41421 6.75 8C6.75 7.58579 6.41421 7.25 6 7.25C5.58579 7.25 5.25 7.58579 5.25 8C5.25 8.41421 5.58579 8.75 6 8.75Z"></path></svg> 번호 아이디 비밀번호를 입력해주세요. </div>`
loginBtn.addEventListener("click", validation);
function validation() {
    let isAnyInputEmpty = false;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isAnyInputEmpty = true;
        }
    });
    if (isAnyInputEmpty) {
        spanElement[2].parentNode.insertBefore(newDiv, spanElement[2].nextSibling);
    } else {
        spanElement[2].parentNode.removeChild(newDiv)
    }
}
