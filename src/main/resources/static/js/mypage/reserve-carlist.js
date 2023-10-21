import { timeForToday, handleTopBarBackward} from './common.js';

handleTopBarBackward();
const newColSm4 =document.querySelector(".newColSm4 ");
async function getPosts() {
    const response = await fetch(`/lists/api/reserve/${user}`)
    const posts = await response.json();
    return posts.reverse(); // 최신순으로 가져오도록 역순으로 정렬
}
function appendPost(reserve) {
    // 시간 바꾸기
    const startDate = reserve.visitBookingStartDate; // Example: "YYYY-MM-DD HH:mm:ss"
    const endDate = reserve.visitBookingEndDate;     // Example: "YYYY-MM-DD HH:mm:ss"

    const startDateParts = startDate.split(' ')[0].split('-');
    const endDateParts = endDate.split(' ')[0].split('-');

    const startDateFormatted = `${startDateParts[0]}-${startDateParts[1]}-${startDateParts[2]}`;
    const endDateFormatted = `${endDateParts[0]}-${endDateParts[1]}-${endDateParts[2]}`;

    const div = document.createElement('div');
    div.innerHTML = `
    <div>
      <div class="application list myPageCommunityList">
        <div class="application listItem myPageCommunityListItem myPageCommunityCard medium pointer">
          <div class="topTitle application typography wFull body2" style="color: rgb(173,179,184);">
            <div class="application typography myPageCommunityListItemTitle body3" style="color: rgb(60,65,68)">방문목적:
                <span class="purpose">${reserve.visitBookingPurpose}</span>
                    <div class="topTitle flex alignItemsCenter">
                        <div class="application typography caption1 semiBold" style="color: rgb(60,65,68)">
                            차량번호:
                            <span class="carNumber">${reserve.visitBookingCarNumber}</span>
                           </div>
                        </div>
                        <div class="topTitle flex alignItemsCenter">
                            <div class="application typography caption1 semiBold" style="color: rgb(60,65,68)">
                                차량종류:
                                <span class="carNumber">${reserve.visitBookingCarType}</span>
                            </div>
                        </div>
                        <div class="topTitle application typography myPageCommunityListItemTitle body3" style="color: rgb(60,65,68)">방문시작일:
                            <span class="startDate">${startDateFormatted}</span>
                        </div>
                        <div class="topTitle application typography myPageCommunityListItemTitle body3" style="color: rgb(60,65,68)">방문종료일:
                            <span class="endDate">${endDateFormatted}</span>
                        </div>
                        <div class="topTitle flex flexColumn">
                            <div class="topTitle application typography textRight" style="color: rgb(173,179,184);">${timeForToday(reserve.visitBookingRegisterDate)}</div>
                        </div>
                    </div>
                    <hr class="application divider line horizontal my12" style="border-color: rgb(243,244,245)">
                </div>
            </div>
        </div>
    </div>
   `
    newColSm4.appendChild(div);
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

        if(posts.length > 0) {
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

