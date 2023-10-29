package com.app.usearth.service;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;
import com.app.usearth.repository.RecyclingAgentDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class RecyclingAgentServiceImpl implements RecyclingAgentService {

    private final RecyclingAgentDAO recyclingAgentDAO;


    @Override
    public List<PostDTO> getByRecycling() {
        return recyclingAgentDAO.selectByRecycling();
    }

    @Override
    public Optional<PostDTO> getByRecyclingReadId(Long id) {

        return recyclingAgentDAO.findByRecyclingReadId(id);
    }
    @Override
    public List<PostDTO> getRelatedPostsById(Long id) {

        return recyclingAgentDAO.findRelatedPostsById(id);
    }


    //   postId를 매개변수로 받아 해당 ID의 게시글에 달린 댓글들을 가져옴
//   DAO의 selectCommentsByPostId 메서드를 호출하여 이 작업을 수행하여 그 결과를 반환
    @Override
    public List<CommentDTO> getCommentsByPostId(Long postId) {
        return recyclingAgentDAO.selectCommentsByPostId(postId);
    }

//  CommentDTO 객체를 매개변수로 받아 댓글 정보를 DB에 추가
//  즉, DAO의 insertComment 메서드를 호출하여 댓글을 DB에 삽입
    @Override
    public void addComment(CommentDTO commentDTO) {
        recyclingAgentDAO.insertComment(commentDTO);
    }

    // 재활용 대행 신청
    @Override
    public void addPost(PostDTO postDTO) {

        recyclingAgentDAO.insertPost(postDTO);

    }

    @Override
    public void updatePost(PostDTO postDTO) {
        recyclingAgentDAO.updatePost(postDTO);
    }


      @Override
    public PostDTO getPostById(Long id) {
        return recyclingAgentDAO.getPostById(id);
    }

}
