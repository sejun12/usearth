const topBarBackward = document.querySelector(".topBarBackward");
topBarBackward.addEventListener("click", () => {
    window.location.href = "/mypage/mypage";
});
const fileInput = document.getElementById('imageUpLoadWrapper');
const imageElement = document.querySelector('.avatar.image.large');
const send =document.querySelector("#send");
const avatarContainer=document.querySelector(".avatarContainer");
fileInput.addEventListener('change', function (event) {
    send.style.display='block';
    avatarContainer.style.bottom='20px';
    const selectedFile = event.target.files[0];
    //업로드된 파일 이름(원본 이름)
    const name = selectedFile.name;
    const formData = new FormData();
    //input name 으로 보내는거랑 같음
    formData.append("uploadFile",selectedFile);

    fetch("/file/upload", {
        method: "POST",
        body: formData
    }).then((response) => response.text())
        .then((uuid) => {
            let profileUuid =uuid
            let now = new Date();
            let year = now.getFullYear();
            let month = now.getMonth() + 1;
            let date = now.getDate();
            month = month < 10 ? '0' + month : month;
            date = date < 10 ? '0' + date : date;
            let fileName = `${year}/${month}/${date}/t_${profileUuid}_${name}`;
            imageElement.setAttribute("src", `/file/display?fileName=${fileName}`);
            let input = document.createElement("input");
            input.name = "uuid";
            input.value = profileUuid;
            input.type = "hidden";
            form.append(input);
        })
})
const form=document.querySelector("form[name='file-form']")

send.addEventListener("click",()=>{
    form.submit();
})