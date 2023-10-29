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
document.getElementById("submitCommentButton").addEventListener("click", function() {
    // 댓글 내용 가져오기(id가 "textField"인 입력란의 값을 가져와 commentText 변수에 저장)
    const commentText = document.getElementById("textField").value;

    // 사용자 정보 가져오기
    fetch("/recycling-agent/getCountComment")
        // JSON 형식으로 파싱하도록 설정
        .then(response => response.json())
        // JSON으로 파싱한 응답 데이터를 user 변수로 받아옴(사용자 정보를 담고 있음)
        .then(user => {
            // 댓글 생성하기 (나중에 생성한 댓글을 담을 컨테이너 역할)
            const commentDiv = document.createElement("div");
            commentDiv.className = "boxComment";
            // CSS 클래스 "boxComment"를 추가 (배경색을 설정)
            commentDiv.style.backgroundColor = "rgb(255, 255, 255)";
            // 패딩을 설정
            commentDiv.style.padding = "16px";

            // 사용자 정보 구조 생성
            // 즉, userInfo 변수에는 사용자 정보를 나타내는 HTML 문자열이 저장
            const userInfo = `
                <div class="betweenJust">
                    <div class="commentUserInformation normal">
                        <div class="avatarWrapper">
                            <div>
                                <div class="commentAvatar container">
                                    <i class="avatarComment nickName1" style="background: rgb(145, 207, 211);"></i>
                                    <div class="commentAvatarItem">
                                        <div class="commentBody boldSemi" style="color: rgb(255, 255, 255);">${session.user.userName}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="informationWrapper">
                            <div class="nameCompanyWrapper">
                                <div class="nameIconWrapper">
                                    <div class="nameWrapper">
                                        <div class="infomationUserName bodyComment commentBody" style="color: inherit; font-weight: 600;">${session.user.userName}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="otherWrapper">
                                <div class="commentTypography c-caption1" style="color: rgb(173, 179, 184);">${session.user.userJoinDate}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // 댓글 내용 추가 (사용자가 입력한 댓글 내용을 포함)
            const commentContent = `
                <div class="commentTypography commentBody1" style="color: rgb(60, 65, 68);">
                    <span class="purifiedHtml">${commentText}</span>
                </div>
            `;

            // 사용자 정보와 댓글 내용이 포함된 HTML이 commentDiv에 추가
            commentDiv.innerHTML = userInfo + commentContent;

            // 댓글 추가 (댓글을 화면에 추가)
            // 즉,  "userComments"라는 id를 가진 부모 엘리먼트에 commentDiv를 자식 엘리먼트로 추가
            document.getElementById("userComments").appendChild(commentDiv);

            // 댓글 입력란 초기화
            document.getElementById("textField").value = "";
        });
});


// document.getElementById("submitCommentButton").addEventListener("click", function() {
//     const postId = document.getElementById("postId").value; // 게시글의 ID를 가져옴
//     const commentText = document.getElementById("commentText").value; // 댓글 내용을 가져옴
//
//     // 서버로 댓글 작성 요청을 보낼 때 postId를 함께 보냄
//     fetch(`/recycling-agent/addComment/${postId}`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             commentText: commentText,
//         }),
//     })
//         .then(response => response.json())
//         .then(data => {
//             // 댓글 작성 후의 동작을 수행
//         })
//         .catch(error => {
//             // 에러 처리
//         });
// });

