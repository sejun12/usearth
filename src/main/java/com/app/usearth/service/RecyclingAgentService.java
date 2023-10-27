package com.app.usearth.service;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;

import java.util.List;
import java.util.Optional;

public interface RecyclingAgentService {

    public List<PostDTO> getByRecycling();

    public Optional<PostDTO> getByRecyclingReadId(Long id);

    public List<PostDTO> getRelatedPostsById(Long id);

    //  선택된 게시글의 ID (postId)를 매개변수로 받아 해당 게시글에 연결된
    //  댓글 목록을 CommentDTO 형태의 리스트로 반환하는 메서드
    public List<CommentDTO> getCommentsByPost(Long postId);

    //   postId를 매개변수로 받아 해당 ID의 게시글에 달린 댓글들을 가져옴
//   DAO의 selectCommentsByPostId 메서드를 호출하여 이 작업을 수행하여 그 결과를 반환
    public List<CommentDTO> getCommentsByPostId(Long postId);

    //  댓글을 추가하는 기능, 즉 CommentDTO 객체를 받아 해당 댓글 정보를 DB에 추가
    public void addComment(CommentDTO commentDTO);

}
