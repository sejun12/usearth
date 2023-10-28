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
    public List<PostDTO> findByRecycling(Long id){return freeDAO.findByRecycling(id);}

    @Override
    public List<CommentDTO> getCommentsByPostId(Long postId) {
        try {
            return freeDAO.selectCommentsByPostId(postId);
        } catch(Exception e) {
            System.err.println("ID가 있는 게시글의 댓글을 가져오는 중 오류가 발생했습니다.: " + postId + " - " + e.getMessage());
            throw new RuntimeException("ID가 있는 게시글에 대한 댓글을 가져올 수 없습니다. : " + postId, e);
        }
    }
    @Override
    public void addComment(CommentDTO commentDTO) {
        try {
            freeDAO.insertComment(commentDTO);
        } catch(Exception e) {
            System.err.println("댓글 삽입 중 오류 발생: " + e.getMessage());
            throw new RuntimeException("댓글 삽입 불가", e);
        }
    }
}
