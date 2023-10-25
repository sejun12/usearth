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
        try {
            return recyclingAgentDAO.selectByRecycling();
        } catch(Exception e) {
            System.err.println("게시글을 가져오는 중에 오류가 발생했습니다.: " + e.getMessage());
            throw new RuntimeException("게시글을 가져올 수 없습니다.", e);
        }
    }


    @Override
    public Optional<PostDTO> selectByRecyclingRead(Long id) {
        try {
            return recyclingAgentDAO.selectByRecyclingRead(id);
        } catch(Exception e) {
            System.err.println("ID가 포함된 게시글을 가져오는 중 오류가 발생했습니다.: " + id + " - " + e.getMessage());
            throw new RuntimeException("ID가 있는 게시글을 가져올 수 없습니다.: " + id, e);
        }
    }

//   postId를 매개변수로 받아 해당 ID의 게시글에 달린 댓글들을 가져옴
//   DAO의 selectCommentsByPostId 메서드를 호출하여 이 작업을 수행하여 그 결과를 반환
    @Override
    public List<CommentDTO> getCommentsByPostId(Long postId) {
        try {
            return recyclingAgentDAO.selectCommentsByPostId(postId);
        } catch(Exception e) {
            System.err.println("ID가 있는 게시글의 댓글을 가져오는 중 오류가 발생했습니다.: " + postId + " - " + e.getMessage());
            throw new RuntimeException("ID가 있는 게시글에 대한 댓글을 가져올 수 없습니다. : " + postId, e);
        }
    }

//  CommentDTO 객체를 매개변수로 받아 댓글 정보를 DB에 추가
//  즉, DAO의 insertComment 메서드를 호출하여 댓글을 DB에 삽입
    @Override
    public void addComment(CommentDTO commentDTO) {
        try {
            recyclingAgentDAO.insertComment(commentDTO);
        } catch(Exception e) {
            System.err.println("댓글 삽입 중 오류 발생: " + e.getMessage());
            throw new RuntimeException("댓글 삽입 불가", e);
        }
    }

}
