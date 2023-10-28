package com.app.usearth.mapper;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface FreeMapper {
    public List<PostDTO> selectByFreeBoard();

    public Optional<PostDTO> selectByFreeRead(Long id);

    public List<PostDTO> selectByReadRecycling(Long id);

    public List<CommentDTO> selectCommentsByPostId(Long postId);
    public void insertComment(CommentDTO comment);
}
