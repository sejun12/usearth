package com.app.usearth.service;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.CommentVO;
import com.app.usearth.domain.FindPostCommentDTO;
import com.app.usearth.domain.PostDTO;

import java.util.List;
import java.util.Optional;

public interface RecyclingAgentService {

    // 재활용대행 게시글 목록
    public List<PostDTO> getByRecycling();

    // 재활용대행 게시글 상세보기
    public Optional<PostDTO> getByRecyclingReadId(Long id);

    // 재활용대행 신청
    public void addPost(PostDTO postDTO);

    // 재활용대행 게시글 수정하기
    public void updatePost(PostDTO postDTO);

    public  PostDTO getPostById(Long id);

    // 재활용대행 조회수
    public Long updateViewCount(Long id);

    // 자유게시판 글(함께 읽는 글)
    public List<PostDTO> getRelatedPostsById(Long id);

    // 댓글
    //   postId를 매개변수로 받아 해당 ID의 게시글에 달린 댓글들을 가져옴
    //  DAO의 selectCommentsByPostId 메서드를 호출하여 이 작업을 수행하여 그 결과를 반환
    public List<CommentDTO> getCommentsByPostId(Long postId);

    //  댓글을 추가하는 기능, 즉 CommentDTO 객체를 받아 해당 댓글 정보를 DB에 추가
    public void addComment(CommentVO commentVO);

    // 댓글의 수
    public int getCommentCountByPostId(Long postId);

    public FindPostCommentDTO getCommentInfo(Long postId);

}
