document.getElementById("freeForm").addEventListener("submit",function (){
    console.log("성공")
})

const textArea=document.querySelector(".writeTextArea");
const characterLengthDisplay = document.getElementById("characterLength");

textArea.addEventListener("input", function (){
    const length=textArea.value.length;
    characterLengthDisplay.innerText = length;
});

document.querySelector('.writeTextArea').addEventListener('input', function (){
    let currentLength=this.value.length;

    document.getElementById('characterLength').textContent=currentLength;

    document.getElementById('remainingLength').textContent=1000-currentLength;
});
document.querySelector(".arrowIcon").addEventListener("click",()=>{
    window.history.back();

})