// 상세보기 및 댓글, 함께 읽는 글
// 웹브라우저에서 현재 페이지의 전체 URL을 가져옴 즉, 현재 웹 페이지의 URL에서 마지막 세그먼트나 경로 이름을 가져옴
// split('/') : 문자열 메소드인 split을 사용하여 URL을 '/' 문자를 기준으로 나눔
// .pop() : 배열 메소드인 pop을 사용하여 배열의 마지막 요소를 가져옴
const postId = window.location.href.split('/').pop();

const postReadService = (function (){
    async function getPostDetail() {
        // postId를 사용하여 서버에서 해당 게시물의 정보를 가져옴
        const response = await fetch(`/recycling-reads/api/read/${postId}`);
        const json = await response.json();
        console.log(json);

        const mainPost = json.mainPost;
        await appendPost(mainPost);

        const randomFreePosts = json.randomFreePosts;
        await appendRandomFreePosts(randomFreePosts);
    }

    return {detail: getPostDetail}
})();

postReadService.detail();

// 전달 받은 매개변수 json을 사용하여 상세보기 HTML을 만들어주는 함수
const postedBox= document.querySelector(".postedBox");
function appendPost(mainPost) {
    console.log(mainPost);

    // 이 자리에 src 자리에 들어갈 꺼 만들어 부시면 됩니다.
    document.querySelector(".userInfomationName").textContent = `${mainPost.userName}`;
    document.querySelector(".aptBuildingNumber").textContent = `${mainPost.userDong}동 ${mainPost.userHo}호`;
    document.querySelector(".headlineTitle").textContent = `${mainPost.postTitle}`;
    document.querySelector(".purifiedHtml").textContent = `${mainPost.postContent}`;
    document.querySelector(".contentDate").textContent = `${mainPost.postModifyDate = mainPost.postWriteDate ? mainPost.postWriteDate.split(' ')[0] : mainPost.postModifyDate.split(' ')[0]}`;
    document.querySelector("#postViewCount").textContent = `${mainPost.postViewCount}`;
    document.querySelector("#likeCount").textContent = `${mainPost.likeCount}`;
}

function appendRandomFreePosts(randomFreePosts){
    // List타입을 반복해서 값을 가져오되 인덱스 번호도 함께 가져와서 활용
    randomFreePosts.forEach((randomFreePost, i) => {
        document.querySelector(`#postListTitleLine${i+1}`).textContent = `${randomFreePost.postTitle}`;
        document.querySelector(`#contentWrapper${i+1}`).textContent = `${randomFreePost.postContent}`;
        console.log(randomFreePost);
        console.log(i);
    })

}

// 제목 및 내용 수정하기
document.getElementById("modifyPostButton").addEventListener("click", function() {
    window.location.href = `/recycling-agent/recycling-agentwrite/${postId}`;
});



// 댓글 관련
// HTML 문서에서 ID : "submitCommentButton"를 가진 요소를 찾아 반환
// 위에서 찾아낸 요소에 클릭 이벤트를 감지하는 리스너를 추가, 버튼이 클릭되면 괄호 안의 함수를 실행
document.getElementById("submitCommentButton").addEventListener("click", function() {
    // ID : "textField"라는 ID를 가진 요소를 찾아 textField 변수에 저장
    // 사용자가 댓글을 입력할 수 있는 입력 필드
    let textField = document.getElementById("textField");
    // textField 요소의 현재 값을 가져와 commentText 변수에 저장
    // 이 값은 사용자가 입력한 댓글의 텍스트
    let commentText = textField.value;

    // trim() 함수는 문자열 양쪽의 공백을 제거를 의미하고 사용자가 공백만 입력했는지 확인하기 위한 것
    // 공백만 입력되었다면, 댓글을 추가하지 않음
    if (commentText.trim() !== "") {
        // 새로운 댓글을 표시하기 위해 새로운 <div> 요소를 생성
        let newCommentDiv = document.createElement("div");
        // 생성한 <div> 요소의 내부 텍스트를 사용자의 댓글 텍스트로 설정
        newCommentDiv.innerText = commentText;

        // ID : "commentsPost"를 가진 요소를 찾아 commentsPost 변수에 저장
        // 웹 페이지에 이미 존재하는 댓글들이 표시되는 곳
        let commentsPost = document.getElementById("commentsPost");
        // 생성한 새로운 댓글 <div> 요소를 commentsPost 요소의 마지막 자식 요소로 추가
        // 즉, 웹 페이지에 새로운 댓글이 추가
        commentsPost.appendChild(newCommentDiv);

        // 댓글 입력 필드의 값을 빈 문자열로 설정하여 초기화
        textField.value = "";
    }
});

