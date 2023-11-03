const writeContainers = document.querySelectorAll(".writeContainer");
const writeModalWrap = document.querySelector(".writeModalWrap")
writeContainers.forEach((writeContainer) => writeContainer.addEventListener("click", () => {
    const writeWrap = document.querySelector(".writeWrap");
    // writeContainer 내부의 close 클래스를 가진 요소를 찾음
    const closeElement = writeWrap.querySelector('.close');

    if(!closeElement) {
        writeModalWrap.style.display = 'block';
        writeContainer.classList.add("close");
    } else {
        writeModalWrap.style.display = 'none';
        writeContainer.classList.remove("close");
    }
}))

// 재활용 게시글 리스트를 선택
const postsListRecycling = document.getElementById('postsList');
let page = 1;
// const perPage = 10;  // 페이지당 데이터 개수

// 게시글 데이터를 가져오는 함수
async function getPosts() {
    // fetch에 데이터를 가져 올 주소 입력
    const response = await fetch(`/recycling-reads/api/recycling-list/${user}`)
    return await response.json();
}

    function getList(post){
                postsListRecycling.innerHTML += `
                    <a href="/recycling-agent/recycling-agentread/${post.id}">
                        <article class="agentCard">
                            <div class="agentWrap" style="padding: 20px;">
                                <div class="agentContentWrap">
                                    <div class="agentContentContainer">
<!--                                    post를 받아서 사용-->
                                        <div class="agentContentTitle" style="color: rgb(4, 5, 5); font-weight: 500;">${post.postTitle}</div>
                                        <div class="agentContent" style="color: rgb(89, 95, 99); font-weight: 400;">${post.postContent}<span class="moreText">더보기</span></div>
                                    </div>
                                </div>
                                <div class="bottomContentWrap">
                                    <div class="bottomContentContainer">
                                        <div class="hits">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg" class="hitsSVG" style="fill: rgb(148, 155, 160);">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8766 8C11.3452 12.6334 4.65478 12.6334 2.12331 8C4.65478 3.36658 11.3452 3.36658 13.8766 8ZM14.8923 7.78461C12.0525 2.10504 3.94746 2.10504 1.10767 7.78461C1.03988 7.9202 1.03988 8.07979 1.10767 8.21538C3.94746 13.895 12.0525 13.895 14.8923 8.21538C14.9601 8.07979 14.9601 7.9202 14.8923 7.78461Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5ZM8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z"></path>
                                            </svg>
                                            <div class="hitsCount" style="color: rgb(148, 155, 160);"> ${post.postViewCount} </div>
                                        </div>
                                        <div class="reply">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg" class="replySVG" style="fill: rgb(148, 155, 160);">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.69638 13.5299C4.05199 13.1404 4.04399 12.5417 3.67811 12.1619C2.63802 11.0821 2 9.6166 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14H3.26717L3.69638 13.5299ZM1 8C1 9.88557 1.74553 11.597 2.95789 12.8556L1.76434 14.1629C1.47131 14.4838 1.699 15 2.13358 15H8C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8Z"></path>
                                                <path d="M6 8C6 8.41421 5.66421 8.75 5.25 8.75C4.83579 8.75 4.5 8.41421 4.5 8C4.5 7.58579 4.83579 7.25 5.25 7.25C5.66421 7.25 6 7.58579 6 8Z"></path>
                                                <path d="M8.75 8C8.75 8.41421 8.41421 8.75 8 8.75C7.58579 8.75 7.25 8.41421 7.25 8C7.25 7.58579 7.58579 7.25 8 7.25C8.41421 7.25 8.75 7.58579 8.75 8Z"></path>
                                                <path d="M11.5 8C11.5 8.41421 11.1642 8.75 10.75 8.75C10.3358 8.75 10 8.41421 10 8C10 7.58579 10.3358 7.25 10.75 7.25C11.1642 7.25 11.5 7.58579 11.5 8Z"></path>
                                            </svg>
                                            <div class="replyCount" style="color: rgb(148, 155, 160);"> ${post.commentCount} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </a>
                    `;

    }


// (기존 경덕씨 코드) 무한스크롤
let isLoading = false;
// 한번에 보여줄 리스트의 갯수를 정하고 차츰 페이지를 증가시킨다
function showList() {
    // 중복되어 실행되는 경우가 있어 그것을 막기위해 로딩 유무 파악
    if (isLoading) return;

    isLoading = true;
    getPosts().then((posts) => {
        const rowCount = 10;
        const offset = (page - 1) * rowCount;
        const limit = offset + rowCount;
        posts = posts.slice(offset, limit);

        if(posts.length > 0) {
            posts.forEach((post) => {
                getList(post);
            });
            page++;
        }
        isLoading = false;
    })
}

// 스크롤의 위치를 검색하고 조건에 맞춰 실행하는 함수
function handleScroll() {
    // 현재 문서의 상단에서 스크롤바의 위치까지의 거리를 나타내는 값을 가져온다.
    const scrollTop = document.documentElement.scrollTop;
    // 현재 창의 뷰포트 높이를 나타낸다.
    const windowHeight = window.innerHeight;
    // 문서의 총 높이를 나타내는 값을 가져온다.
    const totalHeight = document.documentElement.scrollHeight;
    // 스크롤바가 문서의 아래쪽 끝에 도달했을 때 아래의 코드를 실행한다.
    if (scrollTop + windowHeight >= totalHeight - 1) {
        showList();
    }
}
// 스크롤 이벤트가 발생할 때마다 스크롤바의 위치를 검사하여 새로운 콘텐츠를 불러오게 된다.
window.addEventListener("scroll", handleScroll);

// 최초 실행하여 1페이지를 줌
showList();

// 재활용 대행 신청하기 위해 'agentWriteHeader' 요소 선택
const agentWriteBTM = document.querySelector(".agentWriteBTM");

agentWriteBTM.addEventListener("click", function() {
    location.href = "/recycling-agent/recycling-agentwrite";
});

