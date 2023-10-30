package com.app.usearth.service;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;

import java.util.List;
import java.util.Optional;

public interface FreeService {
   //자유게시판 글 작성
    public void addFree(PostDTO postDTO);

    public void updatePost(PostDTO postDTO);

    public PostDTO getPostById(Long id);


    // 자유게시판 게시글 목록
    public List<PostDTO> freeList();

    // 게시글 상세보기
    public Optional<PostDTO>freeBoardRead(Long id);

    // 재활용 글 가져오기
    public List<PostDTO> findByRecycling(Long id);

    // 댓글
    public List<CommentDTO> getCommentsByPostId(Long postId);

    // 댓글 추가
    public void addComment(CommentDTO commentDTO);

    // 댓글 수
    public int getCommentCountByPostId(Long postId);
}
