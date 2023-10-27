package com.app.usearth.repository;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;
import com.app.usearth.mapper.RecyclingAgentMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

// 클래스가 데이터 저장소에서 데이터를 조작하는 DAO(Data Access Object) 역할을 한다는 것
// 해당 클래스를 Bean으로 등록, DB 관련 예외를 스프링의 DataAccessException으로 변환
@Repository
// final 또는 @NonNull로 표시된 필드에 대한 생성자를 자동으로 생성
// 즉, recyclingAgentMapper 필드를 초기화하는 생성자가 자동으로 생성
// 재활용 관련 정보를 DB에서 가져오는 로직을 포함
@RequiredArgsConstructor
public class RecyclingAgentDAO {

//  MyBatis와 연동하여 실제로 데이터베이스 작업을 수행
    private final RecyclingAgentMapper recyclingAgentMapper;

//  selectByRecycling() : 재활용 관련 글 목록을 반환하는 메서드
    public List<PostDTO> selectByRecycling() {

        return recyclingAgentMapper.selectByRecycling();
    }

//  주어진 id에 해당하는 재활용 관련 글을 반환
    public Optional<PostDTO> findByRecyclingReadId(Long id) {

        return recyclingAgentMapper.selectByRecyclingRead(id);
    }

//  주어진 id에 해당하는 자유 게피물 관련 글을 반환
    public List<PostDTO> findRelatedPostsById(Long id) {

        return recyclingAgentMapper.selectByReadFree(id);
    }

    //  postId에 해당하는 댓글 목록을 반환
    public List<CommentDTO> selectCommentsByPostId(Long postId) {
        return recyclingAgentMapper.selectCommentsByPostId(postId);
    }

//  매개변수로 받은 CommentDTO 객체를 사용하여 RecyclingAgentMapper의 insertComment 메소드를 호출
//  CommentDTO에 담긴 댓글 데이터가 DB에 저장
    public void insertComment(CommentDTO comment) {

        recyclingAgentMapper.insertComment(comment);
    }


}
