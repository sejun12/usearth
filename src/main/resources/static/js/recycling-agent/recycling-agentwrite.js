// 'recyclingForm'이라는 ID를 가진 form에 'submit' 이벤트 리스너를 추가
// 즉, recyclingForm' 폼을 submit하려고 시도하면 이벤트 리스너가 작동
document.getElementById("recyclingForm").addEventListener("submit", function(e) {
    // 기본적으로 폼 submit시 페이지가 새로고침 되는 동작을 막기 위해 preventDefault() 함수를 사용
    // e.preventDefault(); // 폼의 기본 submit 동작을 중단
    console.log("submit 성공")

    // 현재 이벤트가 발생한 폼의 데이터를 FormData 객체로 가져옴
    // const formData = new FormData(e.target);

    // fetch 함수를 사용하여 서버로 POST 요청을 보냄
    // fetch('/recycling-agent/recycling-agentwrite', {
    //     method: 'POST',      // 요청 방식을 POST로 지정
    //     body: formData      // body 부분에 위에서 생성한 formData를 넣어줌
    // })
    //     .then(response => {
    //         // fetch의 결과로 반환된 response 객체를 JSON 형태로 파싱
    //         // 이때 response.json() 함수를 사용하면 Promise 형태로 JSON 데이터가 반환
    //         return response.json();
    //     })
    //     .then(data => {
    //         // response.json()의 결과인 JSON 데이터가 이 then 부분의 data로 들어옴
    //
    //         // 서버로부터 받아온 데이터에 success라는 키가 true라면
    //         if(data.success) {
    //             alert("신청이 완료되었습니다.");   // 사용자에게 완료 메시지를 알림
    //             window.location.reload();       // 페이지를 새로고침
    //         } else {
    //             // 만약 success가 true가 아니라면, 서버로부터의 오류 메시지나 기본 메시지를 알림
    //             alert(data.message || "오류가 발생했습니다.");
    //         }
    //     });
});

// textBox에 사용자가 남기는 글자 수 표시 기능
const textArea = document.querySelector(".writeTextArea");
const characterLengthDisplay = document.getElementById("characterLength");

textArea.addEventListener("input", function() {
    const length = textArea.value.length;
    characterLengthDisplay.innerText = length;
});

// 'writeTextArea' 클래스를 가진 textarea의 입력 내용이 변경될 때마다
// 이벤트를 발생시키는 이벤트 리스너를 추가
document.querySelector('.writeTextArea').addEventListener('input', function() {
    // 현재 textarea의 입력 내용의 길이를 가져옴
    let currentLength = this.value.length;

    // 'characterLength' ID를 가진 요소 (화면에 표시되는 글자수 부분)의 내용을 현재 길이로 업데이트
    document.getElementById('characterLength').textContent = currentLength;

    // 1000에서 현재 길이를 뺀 값을 'remainingLength' ID를 가진 요소에 표시
    document.getElementById('remainingLength').textContent = 1000 - currentLength;
});

