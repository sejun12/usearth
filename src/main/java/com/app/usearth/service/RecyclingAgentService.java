package com.app.usearth.service;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;

import java.util.List;
import java.util.Optional;

public interface RecyclingAgentService {

    public List<PostDTO> getByRecycling();

    public Optional<PostDTO> selectByRecyclingRead(Long id);

    //  선택된 게시글의 ID (postId)를 매개변수로 받아 해당 게시글에 연결된
    //  댓글 목록을 CommentDTO 형태의 리스트로 반환하는 메서드
    public List<CommentDTO> getCommentsByPostId(Long postId);

    //  댓글을 추가하는 기능, 즉 CommentDTO 객체를 받아 해당 댓글 정보를 DB에 추가
    public void addComment(CommentDTO commentDTO);

}
