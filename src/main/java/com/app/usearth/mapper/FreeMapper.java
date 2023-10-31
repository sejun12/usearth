package com.app.usearth.mapper;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.CommentVO;
import com.app.usearth.domain.PostCommentDTO;
import com.app.usearth.domain.PostDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Mapper
@Repository
public interface FreeMapper {
    // 자유게시판 목록
    public List<PostDTO> selectByFreeBoard();
    // 게시판 상세보기
    public Optional<PostDTO> selectByFreeRead(Long id);
    // 재활용 게시글 가져오기
    public List<PostDTO> selectByReadRecycling(Long id);
    // 댓글
    public List<CommentDTO> selectCommentsByPostId(Long postId);
    // 댓글 추가
    public void insertComment(CommentVO comment);

    // 게시글 작성
    public void insertPost(PostDTO postDTO);

    // 게시글 수정
    public void updatePost(PostDTO id);
    public PostDTO getPostById(Long id);

    public int selectCommentCountByPostId(Long postId);
    // 댓글 전체 조회
    public List<PostCommentDTO> selectAllCommentByPostId(Long id);
    // 댓글 개수 조회
    public int selectCommentCount(Long id);

    public Long updateViewCount(Long id);


}
