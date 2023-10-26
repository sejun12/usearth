package com.app.usearth.repository;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;
import com.app.usearth.mapper.FreeMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;

@Repository
@RequiredArgsConstructor
public class FreeDAO {
    private final FreeMapper freeMapper;
    public List<PostDTO> freeBoardList(){return freeMapper.selectByFreeBoard();}

    // 해당 자유게시판 글
    public Optional<PostDTO> freeBoardRead(Long id){return freeMapper.selectByFreeRead(id);}

    //postId의 댓글 목록
    public List<CommentDTO> selectCommentsByPostId(Long postId) {
        return freeMapper.selectCommentsByPostId(postId);}

    // 댓글 입력
    public void insertComment(CommentDTO comment) {
        freeMapper.insertComment(comment);
    }

}

