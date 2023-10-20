import { timeForToday, handleTopBarBackward} from './common.js';

handleTopBarBackward();


async function getPosts() {
    const infiniteLoadingContainer = document.querySelector(".infiniteLoadingContainer");

    // fetch에 데이터를 가져 올 주소 입력
    const response = await fetch("/lists/api/complain/1")
    const posts = await response.json();
    const reversedPosts = posts.reverse(); // 최신순으로 가져오도록 역순으로 정렬
    //데이터 없으면 "없어요" 하는 페이지 보여주기
    if (reversedPosts.length === 0) {
        infiniteLoadingContainer.style.display = "block";
    }
    return reversedPosts;
}

function appendPost(complain)
{
    const first = document.querySelector(".first");
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="community-list">
        <div class="my-page-community-list">
            <div class="c-typography">
                <div class="justify-content-between">
                    <div class="align-items-center">
                    <div class="f-semi-bold">${complain.categoryComplainName}</div>
                    </div>
                    <div class="align-items-center">
                    <button type="button" class="c-narrow-button">
                    <div class="c-narrow-button--icon"></div>
                        취소
                    <div class="c-narrow-button--icon"></div>
                    </button>
                    </div>
                </div>
                <div class="my-page-community">${complain.complainTitle}</div>
                <div class="flex-column">
                    <div class="text-right">${timeForToday(complain.complainDate)}</div>
                </div>
            </div>
        </div>
      </div>
      <hr class="horizontal line">
      `
    // 게시글 목록 항목에 클릭 이벤트 핸들러 추가
    div.addEventListener('click', function () {
        const complainId = complain.id;
        window.location.href = `/mypage/complain-detail/${complainId}`;

    });
    first.appendChild(div);
}

let page = 1;
let isLoading = false;

function showList() {

    if (isLoading) return;

    isLoading = true;
    getPosts().then((posts) => {
        const rowCount = 5;
        const offset = (page - 1) * rowCount;
        const limit = offset + rowCount;
        posts = posts.slice(offset, limit);

        if (posts.length > 0) {
            posts.forEach((post) => {
                appendPost(post);
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

window.addEventListener("scroll", handleScroll);
showList();


