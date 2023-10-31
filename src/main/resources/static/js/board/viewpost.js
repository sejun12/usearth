
// 상세보기, 댓글, 함께 읽는 글

const postId=window.location.href.split('/').pop();

const postReadService=(function (){
    async function getPostDetail(){
        const response=await fetch(`/free-reads/api/read/${postId}`);
        const json=await response.json();
        console.log(json);

        const mainPost=json.mainPost;
        await appendPost(mainPost);

        const randomRecyclePosts=json.randomRecyclePosts;
        await appendRandomRecyclePosts(randomRecyclePosts);
    }
    async function getComment(){
        const response=await  fetch(`/free-reads/api/comment/${postId}`);
        const json=await response.json();
        console.log(json);

        document.querySelector(".answerTextNumber").textContent=json.commentCount;
        document.querySelector(".answerCommentBox1").innerHTML='';
        const postComments=json.postComments;
        postComments.forEach((postComment)=>{
            const div=document.createElement('div');
            document.querySelector(".answerCommentBox1").appendChild(div);
            appendComments(div, postComment);
        })
    }

    async function writeComment(commentContent){
        const data={
            postId:postId,
            commentContent:commentContent
        }
        const respon=await fetch(`/free-reads/api/setComment`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
        });
       if (respon.ok){
           await getComment();
       }else {
           console.error('업데이트 실패');
       }
    }
    return {detail:getPostDetail, comment:getComment, writeComment:writeComment}
})();
postReadService.detail();
postReadService.comment();

const postedBox=document.querySelector(".postedBox");

function appendPost(mainPost){
    console.log(mainPost);

    document.querySelector(".userInfoName").textContent=`${mainPost.userName}`;
    document.querySelector(".aptBuildingNumber").textContent=`${mainPost.userDong}동 ${mainPost.userHo}호`;
    document.querySelector(".headlineTitle").textContent=`${mainPost.postTitle}`;
    document.querySelector(".contentText").textContent=`${mainPost.postContent}`;
    document.querySelector(".contentDate").textContent=`${mainPost.postModifyDate=mainPost.postWriteDate ? mainPost.postWriteDate.split(' ')[0]: mainPost.postModifyDate.split(' ')[0]}`;
}

function appendRandomRecyclePosts(randomRecyclePosts){
    randomRecyclePosts.forEach((randomRecyclePost, i)=>{
        document.querySelector(`#postListTitleLine${i+1}`).textContent=`${randomRecyclePost.postTitle}`;
        document.querySelector(`#contentWrapper${i+1}`).textContent=`${randomRecyclePost.postContent}`;
        console.log(randomRecyclePost);
        console.log(i);
    })
}
// 제목, 내용 수정
document.getElementById("modifyPostButton").addEventListener("click", function (){
    window.location.href=`/board/freeboard-write/${postId}`;
});

// 댓글 목록
function appendComments(div, postComment){
    div.innerHTML=`
    <div class="betweenJust">
            <div class="commentUserInformation normal">
                <div class="avatarWrapper">
                    <div>
                        <div class="commentAvatar container">
                            <img class="avatarComment nickName1" th:src="@{${postComment.userProfileName != null ? '/file/display?fileName=?' + postComment.userProfilePath + '/t_' + postComment.userProfileName : postComment.userKakaoProfileUrl}}" style="background: rgb(145, 207, 211);"></img>
                        </div>
                    </div>
                </div>
                <div class="informationWrapper">
                    <div class="nameCompanyWrapper">
                        <div class="nameIconWrapper">
                            <div class="nameWrapper">
                                <div class="infomationUserName bodyComment commentBody" style="color: inherit; font-weight: 600;">${postComment.userName}</div>
                            </div>
                            <div class="userInfoWrapper"></div>
                        </div>
                    </div>
                    <div class="otherWrapper">
                        <div class="commentTypography c-caption1" type="normal" style="color: rgb(173, 179, 184);">${postComment.commentWriteDate}</div>
                    </div>
                </div>
            </div>
            <div class="commentDrawer contentActionDropdownBottomSheet"></div>
        </div>
        <div class="commentTypography commentBody1" style="color: rgb(60, 65, 68); margin-bottom: 20px">
            <span class="purifiedHtml">${postComment.commentContent}</span>
        </div>
 
    
    `
}
document.querySelector(".buttonMedium").addEventListener("click",()=>{
    let commentContent=document.querySelector(".inputFieldOutline");
    postReadService.writeComment(commentContent.value);
    commentContent.value="";
})
document.querySelector(".arrowBackButton").addEventListener("click", () => {
    window.history.back();
})
function modifyButtonStatus(){
    if(post.userId === user.id){
        console.log("같음")
        document.querySelector(".buttonIconMedium").style.display='flex';

    }else {
        console.log("다름")
        document.querySelector(".buttonIconMedium").style.display='none'
    }
}
modifyButtonStatus();




// function openModal(modalId) {
//     const modal = document.getElementById(modalId);
//     const overlay = document.getElementById("overlay");
//
//     modal.style.transform = "translateY(0)";
//     modal.style.height = "33%";
//     overlay.style.display = "block";
// }

// function closeModal(modalId) {
//     const modal = document.getElementById(modalId);
//     const overlay = document.getElementById("overlay");
//
//     modal.style.transform = "translateY(100%)";
//     modal.style.height = "0";
//     overlay.style.display = "none";
// }
//
// const singoButtons = document.querySelectorAll(".singo");
// const application = document.querySelector(".application");
// const overlay = document.getElementById("overlay");
//
// // 초기에 overlay를 숨김
// overlay.style.display = "none";
// application.style.display = "none"; // 세준씨 코드에 이 줄 추가 modalFirst 대신 application 클래스 사용해 봄
//
// singoButtons.forEach((singo) => {
//     singo.addEventListener("click", () => {
//         const modalId = "modalFirst";
//         closeModal(modalId);
//         application.style.display = "block";  //세준씨 코드에 이 줄 추가
//     });
// });
//
// // singo 클래스 버튼 : 이벤트리스너 설정해봄
// const singoCloseBtn = document.querySelector('.modalCloseButton');
// singoCloseBtn.addEventListener('click', closeSingoModal);
//
// function closeSingoModal() {
//     application.style.display = "none"; // application 숨기기
//
//     const overlay = document.getElementById("overlay");
//     overlay.style.display = "none";
// }



