const writeContainers = document.querySelectorAll(".writeContainer");
const writeModalWrap = document.querySelector(".writeModalWrap")
writeContainers.forEach((writeContainer) => writeContainer.addEventListener("click", () => {
    const writeWrap = document.querySelector(".writeWrap");
    // writeContainer 내부의 close 클래스를 가진 요소를 찾음
    const closeElement = writeWrap.querySelector('.close');

    if(!closeElement) {
        writeModalWrap.style.display = 'block';
        writeContainer.classList.add("close");
    }else {
        writeModalWrap.style.display = 'none';
        writeContainer.classList.remove("close");
    }
}))


const postsListRecycling = document.getElementById('postsList');

fetch('/agents/api/recycling')
    // fetch의 응답을 response 객체로 받고, 그 후의 처리를 위한 함수를 정의
    .then(response => {
        // HTTP 요청의 응답 상태를 확인
        // response.ok는 요청이 성공적인지 여부를 불린 값으로 반환
        if (!response.ok) {
            // 응답이 성공적이지 않은 경우 (response.ok가 false인 경우), 오류 메시지를 생성하고 예외를 발생
            //  response.statusText는 HTTP 응답 상태의 메시지를 포함
            throw new Error('네트워크가 올바르지 않습니다.' + response.statusText);
        }
        // 응답이 성공적인 경우, response 객체를 JSON 형식으로 파싱하고 다음 .then() 함수에 전달
        return response.json();
    })
    // JSON 형식으로 파싱된 데이터를 data 매개변수로 받아와 그 안에서 처리를 위한 함수를 정의
    .then(data => {
        // data 배열의 각 항목 즉 post에 대해 함수를 실행
        data.forEach(post => {
            // post.title과 post.content가 유효한 값 즉, undefined나 null이 아닌 값인지 여부를 확인
            if (post.postTitle && post.postContent) {
                // post.title과 post.content를 화면에 표시하기 위해 postsListRecycling 요소의 innerHTML을 업데이트
                // 템플릿 리터럴을 사용하여 HTML 코드 내에 변수의 값을 삽입
                postsListRecycling.innerHTML += `
                    <a href="">
                        <div class="agentContentTitle">${post.postTitle}</div>
                        <div class="agentContent">${post.postContent}<span class="moreText">더보기</span></div>
                    </a>
                    `;
            } else {
                console.log(post);
            }
        });
    });







// // 무한스크롤
// // DOM 선택: .postsGrid 클래스를 가진 HTML 엘리먼트를 찾아서 postsGrid 상수에 저장
// // 이 엘리먼트는 나중에 게시물을 표시하는 데 사용될 것
// const postsGrid = document.querySelector(".postsGrid");
// // 페이지 변수 초기화: page 변수를 선언하고, 초기값으로 1을 할당
// // 이 변수는 현재 보고 있는 페이지 번호를 추적
// let page = 1;
// // 로딩 상태 변수 초기화: isLoading 변수를 선언하고, 초기값으로 false를 할당
// // 이 변수는 데이터를 불러오는 중인지의 상태를 표현
// let isLoading = false;
//
// // 비동기 함수 정의: getList라는 이름의 비동기 함수를 정의
// // async 키워드는 이 함수 내에서 await 키워드를 사용할 수 있게 함
// async function getList() {
//     // 콘텐츠 클리어: postsGrid 엘리먼트의 내부 HTML을 빈 문자열로 설정
//     // 이전에 불러온 게시물이 화면에서 사라집니다.
//     postsGrid.innerHTML = '';
//
//     // 데이터 요청: fetch 함수를 사용하여 데이터를 요청할 주소 입력
//     // 사용 시에는 해당 부분에 API 주소를 입력
//     //  await는 비동기 호출의 결과를 기다림
//     const response = await fetch("")
//     // JSON 파싱: 응답된 데이터(response)를 JSON 형식으로 파싱
//     // .json() 메서드는 프로미스를 반환하기 때문에 await를 사용하여 결과를 기다림
//     const posts = await response.json();
//     console.log(posts);
//     return posts.reverse(); // reverse()를 사용하여 최신순으로 가져오도록 역순으로 정렬하고 결과 반환
//
// }
//
// function showPost() {  // showPost() 함수정의
//     // 중복되어 실행되는 경우가 있어 그것을 막기위해 로딩 유무 파악
//     if (isLoading) return; // isLoading이 true(데이터 로딩 중)이면 함수를 종료, 중복 데이터 요청 방지
//
//     isLoading = true;   //  isLoading을 true로 설정하여, 데이터 로딩이 시작
//     // getList 함수를 호출하여 데이터를 비동기적으로 요청, 요청이 완료되면 다음의 코드 블록을 실행
//     // lists는 요청으로부터 반환된 데이터
//     getList().then((lists) => {
//         // 한 페이지에 표시될 목록의 개수를 rowCount로 정의
//         const rowCount = 10;
//         // 현재 페이지에서 보여줘야 하는 목록의 시작 인덱스를 계산
//         const offset = (page - 1) * rowCount;
//         // 현재 페이지에서 보여줄 목록의 마지막 인덱스를 계산
//         const limit = offset + rowCount;
//         // offset과 limit을 사용하여 전체 데이터에서 현재 페이지에 표시할 부분만 잘라내어 lists에 저장
//         lists = lists.slice(offset, limit);
//         // 개발자 도구 콘솔에 offset, limit, 그리고 슬라이스된 lists를 출력
//         console.log(offset);
//         console.log(limit);
//         console.log(lists);
//
//         // lists의 길이가 0보다 크면, 즉 로딩된 데이터가 있으면, 다음의 코드 블록을 실행
//         if(lists.length > 0) {
//             //  lists에 있는 각 항목(list)에 대하여 appendList 함수를 호출하여 UI에 추가
//             lists.forEach((list) => {
//                 appendList(list);
//             });
//             // 다음 데이터를 로드하기 위해 page 값을 1 증가
//             page++;
//         }
//         // 데이터 로딩이 완료되었으므로 isLoading을 false로 설정
//         isLoading = false;
//     })
// }
// // showPost() 함수는 특정 목록(lists)을 페이지 단위로 불러와서 UI에 추가하는 역할
// // 페이지네이션을 구현할 때 사용될 수 있는 로직
// // getList 함수의 정의와 appendList 함수의 정의, 그리고
// // page와 isLoading 변수의 초기값이 코드에서 주어지지 않았기 때문에 이들은 이 코드의 외부에서 정의
//
//
//
// // 스크롤의 위치를 검색하고 조건에 맞춰 실행하는 함수
// function handleScroll() {
//     // 현재 문서의 상단에서 스크롤바의 위치까지의 거리를 나타내는 값을 가져온다.
//     const scrollTop = document.documentElement.scrollTop;
//     // 현재 창의 뷰포트 높이를 나타낸다.
//     const windowHeight = window.innerHeight;
//     // 문서의 총 높이를 나타내는 값을 가져온다.
//     const totalHeight = document.documentElement.scrollHeight;
//     // 스크롤바가 문서의 아래쪽 끝에 도달했을 때 아래의 코드를 실행한다.
//     if (scrollTop + windowHeight >= totalHeight - 1) {
//         showPost();
//     }
// }
// // 스크롤 이벤트가 발생할 때마다 스크롤바의 위치를 검사하여 새로운 콘텐츠를 불러오게 된다.
// window.addEventListener("scroll", handleScroll);
// showPost();
//
//
//
// // 한번에 보여줄 리스트의 갯수를 정하고 차츰 페이지를 증가시킨다
//
// function showList() {
//     // 중복되어 실행되는 경우가 있어 그것을 막기위해 로딩 유무 파악
//     if (isLoading) return;
//
//     isLoading = true;
//     getPosts().then((posts) => {
//         const rowCount = 10;
//         const offset = (page - 1) * rowCount;
//         const limit = offset + rowCount;
//         posts = posts.slice(offset, limit);
//
//         if(posts.length > 0) {
//             posts.forEach((post) => {
//                 appendPost(post);
//             });
//             page++;
//         }
//         isLoading = false;
//     })
// }
//
// // 스크롤의 위치를 검색하고 조건에 맞춰 실행하는 함수
// function handleScroll() {
//     // 현재 문서의 상단에서 스크롤바의 위치까지의 거리를 나타내는 값을 가져온다.
//     const scrollTop = document.documentElement.scrollTop;
//     // 현재 창의 뷰포트 높이를 나타낸다.
//     const windowHeight = window.innerHeight;
//     // 문서의 총 높이를 나타내는 값을 가져온다.
//     const totalHeight = document.documentElement.scrollHeight;
//     // 스크롤바가 문서의 아래쪽 끝에 도달했을 때 아래의 코드를 실행한다.
//     if (scrollTop + windowHeight >= totalHeight - 1) {
//         showList();
//     }
// }
// // 스크롤 이벤트가 발생할 때마다 스크롤바의 위치를 검사하여 새로운 콘텐츠를 불러오게 된다.
// window.addEventListener("scroll", handleScroll);
// // 최초 실행하여 1페이지를 보여준다
//
// showList();