package com.app.usearth.controller;

import com.app.usearth.domain.*;
import com.app.usearth.service.RecyclingAgentService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/recycling-reads/api/")
public class RecyclingAgentAPI {
    private final RecyclingAgentService recyclingAgentService;


    @ApiOperation(value = "재활용대행 정보 조회", notes = "재활용대행 정보를 조회할 수 있는 API")
    @ApiImplicitParam(
            name = "id",
            value = "게시글 번호",
            required = true,
            dataType = "long",
            paramType = "path",
            defaultValue = "None"
    )

    @GetMapping("recycling-list/{id}")
    public List<PostDTO> getByRecycling(@PathVariable("id") Long id) {
//      recyclingAgentService의 getByRecycling 메소드를 호출하고 그 결과를 반환
        return recyclingAgentService.getByRecycling(id);
    }

    // '/api/recycling-reads/{id}' 형태의 URL로 오는 GET 요청을 처리
    // ({id}는 URL의 일부로 들어오는 게시글의 ID)
    // URL에서 {id} 부분을 추출하여 Long 타입의 id 매개변수에 할당
    @GetMapping("read/{id}") // "read/{id}" URL에 대한 GET 요청이 들어왔을 때 getByRecyclingRead 메소드를 실행하게끔 지정
    public Map<String, Object> getByRecyclingRead(@PathVariable("id") Long id) {
        // Map 타입의 객체를 반환, URL의 {id} 부분을 메소드의 매개변수로 전달
        // 해당 id를 사용하여 리사이클링 게시글을 조회, Optional은 값이 존재할 수도, 존재하지 않을 수도 있는 컨테이너 객체
        Optional<PostDTO> foundRecyclingRead = recyclingAgentService.getByRecyclingReadId(id);

        // 서비스의 메소드를 호출하여 랜덤으로 3개의 자유게시판 글을 랜덤으로 반환
        List<PostDTO> randomFreePosts = recyclingAgentService.getRelatedPostsById(3L);

        // Map 인터페이스의 구현체인 HashMap 객체를 생성, key-value 쌍으로 데이터를 저장
        Map<String, Object> result = new HashMap<>();
        // "mainPost"라는 key로 리사이클링 게시글을 저장
        //  foundRecyclingRead에 값이 없다면 null을 저장
        result.put("mainPost", foundRecyclingRead.orElse(null));  // 상세보기 글
        // "randomFreePosts"라는 key로 랜덤 게시글 리스트를 저장
        result.put("randomFreePosts", randomFreePosts);  // 랜덤 자유게시판 글

        // 최종적으로 만든 result 맵을 반환
        return result;
    }

    @GetMapping("comment/{id}")
    public FindPostCommentDTO getComments(@PathVariable("id") Long id){
        return recyclingAgentService.getCommentInfo(id);
    }

    @PostMapping("setComment")
    public void setComment(@RequestBody CommentVO commentVO, HttpSession session){
        commentVO.setUserId(((UserDTO)session.getAttribute("user")).getId());
        recyclingAgentService.addComment(commentVO);
    }


    // 좋아요 수
    // 사용자가 게시글에 좋아요를 추가하려고 할 때 호출 즉, toggleLike를 호출하여 좋아요의 상태를 변경
    @GetMapping("posts/{postId}/likes")
    // addLike()는 좋아요를 추가하는 동작을 수행
    public Map<String, Boolean> addLike(@RequestParam Long userId, @PathVariable Long postId) {
        // 좋아요 상태를 토글 즉, 현재 상태가 좋아요 된 상태라면 좋아요를 취소하고, 그렇지 않으면 좋아요를 추가
        recyclingAgentService.toggleLike(userId, postId);
        // 응답을 위한 Map 객체를 생성, 'key : success, value : true'로 응답
        Map<String, Boolean> response = new HashMap<>();
        // response Map에 'key : success, value : true' 넣어줌, 요청이 성공적으로 처리되었음을 의미
        response.put("success", true);
        // 최종적으로 JSON 형태로 변환되어 클라이언트에게 전달
        return response;
    }


}
