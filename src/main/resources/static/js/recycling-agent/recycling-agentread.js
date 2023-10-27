// 상세보기 및 댓글, 함께 읽는 글
// getCurrentPostId()는 URL의 마지막 부분을 가져옴
function getCurrentPostId() {
    // 웹브라우저에서 현재 페이지의 전체 URL을 가져옴 즉, 현재 웹 페이지의 URL에서 마지막 세그먼트나 경로 이름을 가져옴
    // split('/') : 문자열 메소드인 split을 사용하여 URL을 '/' 문자를 기준으로 나눔
    // .pop() : 배열 메소드인 pop을 사용하여 배열의 마지막 요소를 가져옴
    return window.location.href.split('/').pop();
}


const postId = getCurrentPostId();

// 게시물 데이터를 서버에서 가져옴
async function getPostDetail() {
    // postId를 사용하여 서버에서 해당 게시물의 정보를 가져옴
    const response = await fetch(`/recycling-reads/api/read/${postId}`);
    console.log();
    // 요청이 성공적이지 않은 경우 오류를 발생(오류 메시지에는 HTTP 응답의 상태 코드를 포함)
    if (!response.ok) {
        //  JSON 형식으로 파싱하여 반환
        throw new Error(`HTTP 오류 상태 : ${response.status}`);
    }
    return await response.json();
}


const postedBox=document.querySelector(".postedBox");

function appendPost(post) {
    if (!post || typeof post !== 'object') {
        // post 객체가 없거나 객체가 아닌 경우
        console.error("게시물 데이터가 유효하지 않습니다.");
        return;
    }
    // post 객체의 postWriteDate 속성을 사용하여 특정 포맷의 날짜 문자열을 추출 후
    // 그 날짜를 보여주기 위한 새로운 <div> 요소를 생성하는 작업을 수행
    console.log(post);
    // post 객체의 postWriteDate 속성 값을 startDate라는 상수에 할당
    // postWriteDate가 없을 경우 빈 문자열로 초기화

    const startDate = post.mainPost.postWriteDate;
    // startDate를 공백(' ')을 기준으로 나눠줌 즉, 날짜와 시간 부분을 분리
    // 날짜 부분(즉, 첫 번째 세그먼트)을 '-'로 분리하여 년, 월, 일을 배열의 형태로 startDateParts에 저장
    // .split(' ')공백부분을 기준으로 앞뒤로 잘라줌 공백기준 앞은 [0], 공백기준 뒤는 [1]
    const startDateParts = startDate.split(' ')[0];
    // 문자열 리터럴 템플릿을 사용하여 startDateParts 배열의 각 세그먼트(년, 월, 일)를 하나의 문자열로 조합
    // startDateFormatted는 "2023-10-24"와 같은 형태의 문자열을 가지게 됨

    // 웹 페이지의 DOM에 새로운 <div> 요소를 생성 후, postContainer라는 상수에 할당
    const postContainer = document.createElement('div');
    // 생성된 postContainer <div> 요소의 클래스 이름을 'postContainer'로 설정
    // CSS 스타일링이나 JavaScript 조작을 위한 선택자로 사용 가능
    postContainer.className = 'postContainer';
    postContainer.innerHTML = `
         <article class="postedBox" style="background-color: rgb(255, 255, 255); padding: 32px 16px 16px;">
           <div>
             <div class="dropDownBottom"></div>
           </div>
         
<!--            유저이름-->
<!--   게시글 -->
            <div id="selectPost">
                <h2 class="contentTitle" style="color: rgb(4, 5, 5);">
                    <span class="headlineTitle" style="color: inherit;">${post.mainPost.postTitle}</span>
                </h2>
                <p class="contentBox" style="color: rgb(32, 35, 37);">
                    <span class="contentText">${post.mainPost.postContent}</span>
                </p>
            </div>
            <p class="contentDate" style="color: rgb(207, 212, 215);">${startDateParts}</p>
            <div>
            <div class="cardActionContainer">
                <div class="cardActionWrapper">
                    <div class="hits">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg" class="hitsSVG" style="fill: rgb(148, 155, 160);">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8766 8C11.3452 12.6334 4.65478 12.6334 2.12331 8C4.65478 3.36658 11.3452 3.36658 13.8766 8ZM14.8923 7.78461C12.0525 2.10504 3.94746 2.10504 1.10767 7.78461C1.03988 7.9202 1.03988 8.07979 1.10767 8.21538C3.94746 13.895 12.0525 13.895 14.8923 8.21538C14.9601 8.07979 14.9601 7.9202 14.8923 7.78461Z"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5ZM8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z"></path>
                        </svg>
                        <div class="hitsCount" style="color: rgb(148, 155, 160);">${post.mainPost.postViewCount}</div>
                    </div>
                </div>
                <hr class="dividerLineVertical" style="border-color: rgb(234, 236, 238); height: 16px;">
                <div class="cardActionWrapper">
                    <button class="detailLikeInfoButton">
                        <svg data-v-bd9f2bcc="" data-v-fbfe33cc="" width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg" class="heartIcon" style="fill: rgb(148, 155, 160);">
                            <path data-v-bd9f2bcc="" fill-rule="evenodd" clip-rule="evenodd" d="M8 5.79179L7.16516 4.5257C6.75467 3.90318 6.05854 3.5 5.27273 3.5C4.02534 3.5 3 4.5219 3 5.8C3 6.46253 3.27323 7.21871 3.78425 8.03207C4.28965 8.8365 4.98019 9.62153 5.69810 10.3215C6.41239 11.0179 7.13067 11.6079 7.67232 12.0246C7.79109 12.116 7.90097 12.1988 8 12.2722C8.09904 12.1988 8.20892 12.116 8.32768 12.0246C8.86934 11.6079 9.58761 11.0179 10.3019 10.3215C11.0198 9.62153 11.7103 8.8365 12.2157 8.03207C12.7268 7.21871 13 6.46253 13 5.8C13 4.5219 11.9747 3.5 10.7273 3.5C9.94146 3.5 9.24533 3.90318 8.83485 4.5257L8 5.79179ZM8 13.5C8 13.5 2 9.5 2 5.8C2 3.97746 3.46525 2.5 5.27273 2.5C6.04320 2.5 6.75149 2.76846 7.31061 3.21768C7.57757 3.43217 7.81052 3.68786 8 3.97522C8.18948 3.68786 8.42244 3.43217 8.68940 3.21768C9.24851 2.76846 9.95680 2.5 10.7273 2.5C12.5348 2.5 14 3.97746 14 5.8C14 9.5 8 13.5 8 13.5Z"></path>
                        </svg>
                        <div class="detailLikeInfoNumber" style="color: rgb(148, 155, 160);">${post.mainPost.likeCount}</div>
                    </button>
                </div>
            </div>
            </div>
        </article>`;
    postedBox.appendChild(postContainer);
}



// 함께 읽을 수 있는 글
// 관련 게시물들을 서버에서 가져옴 (주어진 게시물 ID와 관련된 다른 게시물들을 가져옴)
async function getRelatedPost() {
    const response = await fetch(`/recycling-reads/api/read/${postId}`);
    if (!response.ok) {
        throw new Error(`HTTP 오류 상태 : ${response.status}`);
    }
    return response.json();
}

function appendRelatedPosts(li, relatedPost){
    if (relatedPost) {
        li.innerHTML = `
            <div class="postListTitleLine" style="color: inherit;">
                <span>${relatedPost.title}</span>
            </div>
            <div class="contentWrapper" style="color: rgb(60, 65, 68);">${relatedPost.content}</div>
            <div class="postAuthor">${relatedPost.author}</div>
            <div class="postDate">${relatedPost.date}</div>`;
    } else {
        console.error("relatedPost가 제공되지 않았습니다.");
    }
}


function renderData(relatedPosts) {
    console.log(relatedPosts);

    // 관련 게시물들을 추가할 ul 요소를 선택
    const relatedPostsUl = document.querySelector(".postListTable");
    // const postsRelatedContainer = document.createElement('div');
    // 생성된 postContainer <div> 요소의 클래스 이름을 'postContainer'로 설정
    // CSS 스타일링이나 JavaScript 조작을 위한 선택자로 사용 가능

    relatedPosts.forEach((relatedPost) => {
        const li = document.createElement('li');
        relatedPostsUl.appendChild(li);
        appendRelatedPosts(li, relatedPost)
    })
}

async function showList() {
    try {
        const postDetail = await getPostDetail(postId);
        appendPost(postDetail);

        const relatedPostsData = await getRelatedPost(postId);
        console.log(relatedPostsData);  // relatedPostsData의 값 확인

        const relatedPosts = relatedPostsData.randomFreePosts;

        if (Array.isArray(relatedPosts)) {  // relatedPosts가 배열인지 확인
            relatedPosts.forEach((post) => {
                const li = document.createElement('li');
                document.querySelector(".postListTable").appendChild(li);
                appendRelatedPosts(li, post);
            });
        } else {
            console.error("relatedPosts가 배열이 아닙니다:", relatedPosts);
        }
    } catch (error) {
        console.error("게시글을 불러오는 중 에러 발생:", error);
    }
}

showList();

window.onload = async function() {
    try {
        // 현재 페이지의 게시글 ID를 가져옴
        const postId = getCurrentPostId();
        console.log(postId);

        // 게시물의 정보를 가져옴
        const post = await getPostDetail(postId);
        console.log(post);

        // 관련 게시글들을 가져옴
        const relatedPosts = await getRelatedPost(postId);
        console.log(relatedPosts);

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