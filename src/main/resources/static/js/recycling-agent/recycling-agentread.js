// 첫번째 모달창
// function openModal(modalId) {
//     const modal = document.getElementById(modalId);
//     const overlay = document.getElementById("overlay");
//
//     modal.style.transform = "translateY(0)";
//     modal.style.height = "33%";
//     overlay.style.display = "block";
// }
//
// function closeModal(modalId) {
//     const modal = document.getElementById(modalId);
//     const overlay = document.getElementById("overlay");
//
//     modal.style.transform = "translateY(100%)";
//     modal.style.height = "0";
//     overlay.style.display = "none";
// }


// 상세보기 및 댓글, 함께 읽는 글
// getCurrentPostId()는 URL의 마지막 부분을 가져옴
function getCurrentPostId() {
    return window.location.href.split('/').pop();
}

// 게시물 데이터를 서버에서 가져옴
// const postId = getCurrentPostId();
async function getPostData(postId) {
    const response = await fetch(`/recycling-agent/api/recycling-agents/recycling-read/recycling-agentread/${postId}`);
    return response.json();
}

// postId를 받아 해당 id를 가진 게시물에 대한 모든 댓글들을 서버에서 가져옴
async function getCommentsForPost(postId) {
    const response = await fetch(`/recycling-agent/api/recycling-agents/recycling-read/recycling-agentread/${postId}/comments`);
    return response.json();
}

// 관련 게시물들을 서버에서 가져옴
async function getRelatedPosts(postId) {
    const response = await fetch(`/recycling-agent/api/recycling-agents/recycling-read/recycling-agentread/${postId}/related`);
    return response.json();
}

// 게시물 상세보기를 표시하는 함수
function viewPost(post) {
    const postSelect = document.getElementById('selectPost');
    postSelect.innerHTML = `
        <h2 class="contentTitle" style="color: rgb(4, 5, 5);">${post.title}</h2>
        <div class="post-title">${post.title}</div>
        <div class="post-content">${post.content}</div>
        <p class="contentDate" style="color: rgb(207, 212, 215);">${post.date}</p>
    `;
}

async function loadPostDetails() {
    const postId = getCurrentPostId();
    const postData = await getPostData(postId);
    viewPost(postData);
}

loadPostDetails();

// 게시물에 대한 댓글들을 표시하는 함수
function viewComments(comments) {
    console.log(comments);
    const postComments = document.getElementById('commentsPost');
    postComments.innerHTML = '<h2></h2>';
    comments.forEach(comment => {
        postComments.innerHTML += `
            <div class="comment-title">${comment.title}</div>
            <div class="comment-content">${comment.content}</div>
        `;

    });
}

// 함께 읽을 글을 표시하는 함수
function viewRelatedPosts(relatedPosts) {
    const postsRelated = document.getElementById('relatedPosts');
    postsRelated.innerHTML = '<h2>함께 읽을 글</h2>';
    relatedPosts.forEach(post => {
        postsRelated.innerHTML += `
            <a href="/details/${post.id}">
                <div class="related-post-title">${post.title}</div>
            </a>
        `;
    });
}

window.onload = async function() {
    const postId = getCurrentPostId();
    const post = await getPostData(postId);
    const comments = await getCommentsForPost(postId);
    const relatedPosts = await getRelatedPosts(postId);


    viewPost(post);
    viewComments(comments);
    viewRelatedPosts(relatedPosts);
}
