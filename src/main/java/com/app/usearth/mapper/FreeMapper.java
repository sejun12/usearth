package com.app.usearth.mapper;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface FreeMapper {
    // 게시글 작성
    public void insertFree(PostDTO postDTO);

    // 자유게시판 목록
    public List<PostDTO> selectByFreeBoard();
    // 게시판 상세보기
    public Optional<PostDTO> selectByFreeRead(Long id);
    // 재활용 게시글 가져오기
    public List<PostDTO> selectByReadRecycling(Long id);
    // 댓글
    public List<CommentDTO> selectCommentsByPostId(Long postId);
    // 댓글 추가
    public void insertComment(CommentDTO comment);




}
