function confirmPassword(){
    const newPassword=document.getElementById('password').value;
    const confirmPassword=document.getElementById('passwordConfirm').value;
    const resultDiv=document.getElementById('result');
    const passwordRegex=/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;


    if (passwordRegex.test(newPassword)) {
        if (newPassword === confirmPassword) {
            resultDiv.innerHTML = '비밀번호가 일치하며 유효합니다.';
            resultDiv.style.color = 'green';

        }else{
            resultDiv.innerHTML = '비밀번호가 일치하지 않습니다.';
            resultDiv.style.color = 'red';
        }
    }else{
        resultDiv.innerHTML = '비밀번호는 최소 8자에서 16자까지, 영문자, 숫자 및 특수 문자를 포함해야 합니다.';
        resultDiv.style.color = 'red';
    }

}
const iconLink =document.querySelector(".iconLink ");

iconLink.addEventListener("click",()=>{
    window.location.href="/mypage/inquiry";

})