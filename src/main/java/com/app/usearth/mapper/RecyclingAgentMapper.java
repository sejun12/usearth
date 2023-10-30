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
public interface RecyclingAgentMapper {
    public List<PostDTO> selectByRecycling();

    public Optional<PostDTO> selectByRecyclingRead(Long id);

    public List<PostDTO> selectByReadFree(Long id);

    public List<CommentDTO> selectCommentsByPostId(Long postId);
    public void insertComment(CommentVO commentVO);

//    재활용대행 신청
    public void insertPost(PostDTO postDTO);

    // 재활용대행 수정하기

    public void updatePost(PostDTO id);
    public PostDTO getPostById(Long id);

    public int selectCommentCountByPostId(Long postId);

    //    포스트 아이디로 해당 댓글 전체 조회
    public List<PostCommentDTO> selectAllCommentByPostId(Long id);

    //    포스트 아이디로 해당 댓글 전체 개수 조회
    public int selectCommentCount(Long id);

    public Long updateViewCount(Long id);
}
