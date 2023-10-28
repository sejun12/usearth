package com.app.usearth.service;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;

import java.util.List;
import java.util.Optional;

public interface FreeService {
    public List<PostDTO> freeList();

    public Optional<PostDTO>freeBoardRead(Long id);

    public List<PostDTO> findByRecycling(Long id);

    public List<CommentDTO> getCommentsByPostId(Long postId);

    public void addComment(CommentDTO commentDTO);
}
