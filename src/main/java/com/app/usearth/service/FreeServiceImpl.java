package com.app.usearth.service;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.PostVO;
import com.app.usearth.repository.FreeDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
@Slf4j
public class FreeServiceImpl implements FreeService{
    private final FreeDAO freeDAO;

    @Override
    public List<PostDTO> freeList(){return freeDAO.freeBoardList();}
    @Override
    public Optional<PostDTO> freeBoardRead(Long id){return freeDAO.freeBoardRead(id);}
    @Override
    public List<CommentDTO> getCommentsByPostId(Long postId){
        return freeDAO.selectCommentsByPostId(postId);
    }
    @Override
    public void addComment(CommentDTO commentDTO){
        freeDAO.insertComment(commentDTO);
    }
}
