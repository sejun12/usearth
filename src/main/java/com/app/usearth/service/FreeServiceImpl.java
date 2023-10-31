package com.app.usearth.service;

import com.app.usearth.domain.*;
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
    // 게시글 작성
    @Override
    public void addFree(PostDTO postDTO){
        freeDAO.insertPost(postDTO);
    }
    // 게시글 목록
    @Override
    public List<PostDTO> freeList(){
        return freeDAO.freeBoardList();}
   // 게시글 상세보기
    @Override
    public Optional<PostDTO> freeBoardRead(Long id){
        return freeDAO.freeBoardRead(id);}
   // 재활용 글 가져오기
    @Override
    public List<PostDTO> findByRecycling(Long id){
        return freeDAO.findByRecycling(id);}


    @Override
    public void updatePost(PostDTO postDTO){
        freeDAO.updatePost(postDTO);
    }

    @Override
    public PostDTO getPostById(Long id){
        return freeDAO.getPostById(id);
    }
    // 댓글
    @Override
    public List<CommentDTO> getCommentsByPostId(Long postId) {

        return freeDAO.selectCommentsByPostId(postId);
    }
   // 댓글 추가
    @Override
    public void addComment(CommentVO commentVO) {
        freeDAO.insertComment(commentVO);}

    @Override
    public int getCommentCountByPostId(Long postId){return freeDAO.selectCommentCountByPostId(postId);}

    @Override
    public Long updateViewCount(Long id){return freeDAO.updateViewCount(id);}

    @Override
    public FindPostCommentDTO getCommentInfo(Long postId){
        FindPostCommentDTO findPostCommentDTO= new FindPostCommentDTO();
        findPostCommentDTO.setPostComments(freeDAO.findAllCommentByPostId(postId));
        findPostCommentDTO.setCommentCount(freeDAO.findCommentCount(postId));
        return findPostCommentDTO;
    }

}
