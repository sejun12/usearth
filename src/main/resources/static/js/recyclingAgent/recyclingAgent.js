const writeContainers = document.querySelectorAll(".writeContainer");
const writeModalWrap = document.querySelector(".writeModalWrap")
writeContainers.forEach((writeContainer) => writeContainer.addEventListener("click", () => {
    const writeWrap = document.querySelector(".writeWrap");
    // writeContainer 내부의 close 클래스를 가진 요소를 찾음
    const closeElement = writeWrap.querySelector('.close');

    if(!closeElement) {
        writeModalWrap.style.display = 'block';
        writeContainer.classList.add("close");
    }else {
        writeModalWrap.style.display = 'none';
        writeContainer.classList.remove("close");
    }
}))
