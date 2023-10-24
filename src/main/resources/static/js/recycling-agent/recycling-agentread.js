// 상세보기 및 댓글, 함께 읽는 글
// getCurrentPostId()는 URL의 마지막 부분을 가져옴
function getCurrentPostId() {
    return window.location.href.split('/').pop();
}


const postId = getCurrentPostId();

// 게시물 데이터를 서버에서 가져옴
async function getPostDetail(postId) {
    // postId를 사용하여 서버에서 해당 게시물의 정보를 가져옴
    const response = await fetch(`/recycling-agent/recycling-agentread/${postId}`);
    console.log(await response.json());
    // 요청이 성공적이지 않은 경우 오류를 발생(오류 메시지에는 HTTP 응답의 상태 코드를 포함)
    if (!response.ok) {
        //  JSON 형식으로 파싱하여 반환
        throw new Error(`HTTP 오류 상태 : ${response.status}`);
    }
    return await response.json();
}


const postedBox=document.querySelector(".postedBox");

function appendPostHTML(post) {
    const startDate = post.postWriteDate;
    const startDateParts = startDate.split(' ')[0].split('-');
    const startDateFormatted = `${startDateParts[0]}-${startDateParts[1]}-${startDateParts[2]}`;
    const postContainer = document.createElement('div');
    postContainer.className = 'postContainer';
    postContainer.innerHTML = `
         <article class="postedBox" style="background-color: rgb(255, 255, 255); padding: 32px 16px 16px;">
            <div class="nickNameLine">
                <div class="nickNameLineBox">
                    <div class="avatarWrapper">
                        <div>
                            <div class="avatarMark">
                                <i class="avatarNickName" style="background: rgb(172, 197, 234);"></i>
                                <div class="avatarItem">
                                    <div class="avatarItemIcon" style="color: rgb(255, 255, 255);"> R </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="informationWrapper">
                        <div class="nameCompanyWrapper">
                            <div class="nameIconWrapper">
                                <div class="nameWrapper">
                                    <div class="userInfoName" style="color: inherit; font-weight: 600;">${post.userName}</div>
                                </div>
                                <div class="userInfoWrapper"></div>
                            </div>
                        </div>
                        <div class="otherWrapper"></div>
                    </div>
                </div>
                <div>
                    <div class="dropDownBottom"></div>
                </div>
            </div>
            <p class="aptBuildingNumber" style="color: rgb(173, 179, 184);">${post.userName}</p>
            <!-- 게시글 -->
            <div id="selectPost">
                <h2 class="contentTitle" style="color: rgb(4, 5, 5);">
                    <span class="headlineTitle" style="color: inherit;">${post.postTitle}</span>
                </h2>
                <p class="contentBox" style="color: rgb(32, 35, 37);">
                    <span class="contentText">${post.postContent}</span>
                </p>
            </div>
            <p class="contentDate" style="color: rgb(207, 212, 215);">${startDateFormatted}</p>
            <div class="cardActionContainer">
                <div class="cardActionWrapper">
                    <div class="hits">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg" class="hitsSVG" style="fill: rgb(148, 155, 160);">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8766 8C11.3452 12.6334 4.65478 12.6334 2.12331 8C4.65478 3.36658 11.3452 3.36658 13.8766 8ZM14.8923 7.78461C12.0525 2.10504 3.94746 2.10504 1.10767 7.78461C1.03988 7.9202 1.03988 8.07979 1.10767 8.21538C3.94746 13.895 12.0525 13.895 14.8923 8.21538C14.9601 8.07979 14.9601 7.9202 14.8923 7.78461Z"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5ZM8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z"></path>
                        </svg>
                        <div class="hitsCount" style="color: rgb(148, 155, 160);">${post.postViewCount}</div>
                    </div>
                </div>
                <hr class="dividerLineVertical" style="border-color: rgb(234, 236, 238); height: 16px;">
                <div class="cardActionWrapper">
                    <button class="detailLikeInfoButton">
                        <svg data-v-bd9f2bcc="" data-v-fbfe33cc="" width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg" class="heartIcon" style="fill: rgb(148, 155, 160);">
                            <path data-v-bd9f2bcc="" fill-rule="evenodd" clip-rule="evenodd" d="M8 5.79179L7.16516 4.5257C6.75467 3.90318 6.05854 3.5 5.27273 3.5C4.02534 3.5 3 4.5219 3 5.8C3 6.46253 3.27323 7.21871 3.78425 8.03207C4.28965 8.8365 4.98019 9.62153 5.69810 10.3215C6.41239 11.0179 7.13067 11.6079 7.67232 12.0246C7.79109 12.116 7.90097 12.1988 8 12.2722C8.09904 12.1988 8.20892 12.116 8.32768 12.0246C8.86934 11.6079 9.58761 11.0179 10.3019 10.3215C11.0198 9.62153 11.7103 8.8365 12.2157 8.03207C12.7268 7.21871 13 6.46253 13 5.8C13 4.5219 11.9747 3.5 10.7273 3.5C9.94146 3.5 9.24533 3.90318 8.83485 4.5257L8 5.79179ZM8 13.5C8 13.5 2 9.5 2 5.8C2 3.97746 3.46525 2.5 5.27273 2.5C6.04320 2.5 6.75149 2.76846 7.31061 3.21768C7.57757 3.43217 7.81052 3.68786 8 3.97522C8.18948 3.68786 8.42244 3.43217 8.68940 3.21768C9.24851 2.76846 9.95680 2.5 10.7273 2.5C12.5348 2.5 14 3.97746 14 5.8C14 9.5 8 13.5 8 13.5Z"></path>
                        </svg>
                        <div class="detailLikeInfoNumber" style="color: rgb(148, 155, 160);">${post.likeCount}</div>
                    </button>
                </div>
            </div>
        </article>`;
    postedBox.appendChild(postContainer);
}


// function viewPost(post) {
//     // 게시물의 정보를 웹 페이지에 표시하는 코드
//
//     // 제목 채우기
//     document.querySelector('.headlineTitle').textContent = post.postTitle;
//     // 내용 채우기
//     document.querySelector('.contentText').textContent = post.postContent;
//     // 날짜 채우기
//     document.querySelector('.contentDate').textContent = post.postWriteDate;
//     // 조회수 채우기
//     document.querySelector('.hitsCount').textContent = post.postViewCount;
//     // 좋아요 수 채우기
//     document.querySelector('.detailLikeInfoNumber').textContent = post.likeCount;
//
//     // 댓글, 이미지 등 추가적인 내용들도 웹 페이지에 표시
// }



// 함께 읽을 수 있는 글
// 관련 게시물들을 서버에서 가져옴 (주어진 게시물 ID와 관련된 다른 게시물들을 가져옴)
async function getRelatedPost(postId) {
    const response = await fetch(`/recycling-agent/recycling-agentread/${postId}/related`);
    if (!response.ok) {
        throw new Error(`HTTP 오류 상태 : ${response.status}`);
    }
    return response.json();
}

async function showList(postId) {
    try {
        const postDetail = await getPostDetail(postId);
        appendPost(postDetail);
    } catch (error) {
        console.error("게시물을 불러오는 중 에러 발생:", error);
    }
}

showList(postId);



window.onload = async function() {
    try {
        // 각각의 함수를 호출하여 게시물의 정보, 댓글, 관련 게시물들을 가져옴
        // 가져온 데이터를 웹 페이지에 표시
        // 현재 페이지의 게시물 ID를 가져옴
        const postId = getCurrentPostId();
        console.log(postId);
        const post = await getPostDetail(postId);
        console.log(post);
        const relatedPosts = await getRelatedPost(postId);
        // console.log('들어옴3');

        // viewPost(post);
        // viewRelatedPosts(relatedPosts);
    } catch (error) {
        console.error("데이터를 불러오는데 오류가 발생했습니다.", error);
    }
}




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

