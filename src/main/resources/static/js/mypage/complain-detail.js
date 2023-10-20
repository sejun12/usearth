const topBarBackward=document.querySelector(".topBarBackward");
topBarBackward.addEventListener("click",()=>{
    window.location.href="/mypage/community"
})

// 현재 페이지의 URL을 가져옵니다.
const currentUrl = window.location.href;

// URL에서 아이디를 추출합니다.
const match = currentUrl.match(/\/mypage\/complain-detail\/(\d+)/);
const complainId = match[1];
const first=document.querySelector(".application .newRow.first");
async function getPosts() {
    // fetch에 데이터를 가져 올 주소 입력
    const response = await fetch(`/lists/api/detail/${complainId}`)
    return await response.json();
}
function appendPost(complain) {

    const startDate = complain.complainDate;
    const startDateParts = startDate.split(' ')[0].split('-');
    const startDateFormatted = `${startDateParts[0]}-${startDateParts[1]}-${startDateParts[2]}`;
    const newDiv = document.createElement('div');
    newDiv.className='application newCol1 readCaseContainer newColSm4 newColLg12'
    newDiv.innerHTML = `
        <div class="application newGrid fluid" style="background-color: rgb(255,255,255);">
            <div class="application newRow">
                <div class="application newCol1 newColLg8 newOffsetLg2">
                    <article class="application cBox" style="background-color: rgb(255,255,255); padding: 32px 16px 16px;">
                        <div class="flex justifyBetweeen">
                            <div class="application userInformation caseDetailQuestionUserInfo simple mb16">
                                <div class="informationWrapper">
                                    <div class="nameCompanyWrapper">
                                        <div class="nameIconWrapper">
                                            <div class="nameWrapper">
                                                <div class="application typography userInformationName ellipsis caption1" style="color: inherit; font-weight: 600;">${complain.categoryComplainName}</div>
                                            </div>
                                            <div class="infoArea userInfoWrapper"></div>
                                        </div>
                                    </div>
                                    <div class="otherWrapper"></div>
                                </div>
                            </div>
                        </div>
                        <h2 class="topTitle application typography content headline7 contentTitle" style="color: rgb(4,5,5);">
                            <span class="topTitle application typography" style="color: rgb(42,125,225);">Q.</span>
                            <span class="topTitle application typography headline7 medium purifiedHtml" style="color: inherit;">${complain.complainTitle}</span>
                        </h2>
                        <p class="topTitle application typography content body1 contentBody" style="color: rgb(32,35,37);">
                            <span class="topTitle purifiedHtml">
                                ${complain.complainContent};
                            </span>
                        </p>
                        <p class="topTitle application typography application content body2 contentCaption" style="color: rgb(207,212,215);">
                            ${startDateFormatted}
                        </p>
                    </article>
                </div>
            </div>
        </div>
      `
    first.appendChild(newDiv);
    if (complain.replyId !== null) {
        // 답변을 추가
        const replyLayoutBox = document.createElement('div');
        replyLayoutBox.className = 'replyLayoutBox';
        replyLayoutBox.style.backgroundColor = 'rgb(243, 244, 245)';
        const Date = complain.complainReplyDate;
        const DateParts = Date.split(' ')[0].split('-');
        const DateFormatted = `${DateParts[0]}-${DateParts[1]}-${DateParts[2]}`;
        // 예시로 "complainReplyTitle" 추가
        const complainReplyTitle = document.createElement('div');
        complainReplyTitle.className = 'complainReplyTitle';
        complainReplyTitle.innerHTML =
            `<div class="replyLayoutBox" style="background-color: rgb(243, 244, 245);">
                <div class="replyBox">
                    <div class="layoutBox" style="background-color: inherit;">
                        <div class="layoutReplyBox">
                            <div class="boxReply">
                                <div class="answerLayoutBox">
                                    <div class="commentSectionWrapper">
                                        <article id="answer" class="textAnswerBox" style="border-color: rgb(234, 236, 238); padding: 0px;">
                                           <div id="comment" class="commentBoxLine" style="background-color: rgb(255, 255, 255); padding: 24px 16px;">
                                                <div className="emptyComment"></div>
                                                <div className="commentAnswerLine">
                                                    <div class="answerCommentBox">
                                                        <div class="wrapperAvatar">
                                                            <div>
                                                                <div class="avatarContainerMedium">
                                                                    <i data-v-16c10fa5="" class="avatarImageMedium" style="background-image: url(https://cdn.comento.kr/images/user/profile/pf_Cf0dXlKRF4.png?s=60x60;);"></i>
                                                                    <div class="itemAvatar"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="infoWrapper">
                                                           <div class="userNameWrapper">
                                                                <div class="iconNameWrapper">
                                                                    <div class="nameWrapper">
                                                                        <div class="userInfoNameEllipsis" style="color: inherit; font-weight: 600;">${complain.complainReplyTitle} </div>
                                                                    </div>
                                                                    <div class="userInfoWrapper">
                                                                        <div class="adminInfoCompany">
                                                                            <div class="adminCompanyName" style="color: rgb(148, 155, 160);"> Us Earth </div>
                                                                            <svg data-v-bd9f2bcc="" data-v-5427d8e4="" width="12" height="12" viewBox="0 0 12 12" fill="black" xmlns="http://www.w3.org/2000/svg" className="checkIcon" style="fill: rgb(42, 125, 225);">
                                                                                <path data-v-bd9f2bcc="" fill-rule="evenodd" clip-rule="evenodd" d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM8.35355 5.35355C8.54882 5.15829 8.54882 4.84171 8.35355 4.64645C8.15829 4.45118 7.84171 4.45118 7.64645 4.64645L5.5 6.79289L4.35355 5.64645C4.15829 5.45118 3.84171 5.45118 3.64645 5.64645C3.45118 5.84171 3.45118 6.15829 3.64645 6.35355L5.14645 7.85355C5.34171 8.04882 5.65829 8.04882 5.85355 7.85355L8.35355 5.35355Z"></path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                             <div class="userNickName" style="margin-top: 4px;">
                                                                <div class="nickName" type="full" style="color: rgb(173, 179, 184);">
                                                               ${complain.categoryComplainName}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p class="contentBody" style="color: rgb(32, 35, 37);">
                                                        <span>
                                                         ${complain.complainReplyContent}
                                                        </span>
                                                    </p>
                                                    <p class="dateContent" style="color: rgb(207, 212, 215);">${DateFormatted}</p>
                                               </div>
                                                <hr class="dividerDashLine" style="border-color: rgb(234, 236, 238); background: white;">
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        // 위에서 생성한 요소를 추가합니다.
        replyLayoutBox.appendChild(complainReplyTitle);

        // 답변 레이아웃을 게시글에 추가합니다.
        newDiv.appendChild(replyLayoutBox);
    }
}

function showList() {
    getPosts().then((post) => {
        appendPost(post);
    })
}
showList();