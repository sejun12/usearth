package com.app.usearth.controller;

import com.app.usearth.domain.PostDTO;
import com.app.usearth.service.RecyclingAgentService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("recycling-list")
    public List<PostDTO> getByRecycling() {
//      recyclingAgentService의 getByRecycling 메소드를 호출하고 그 결과를 반환
        return recyclingAgentService.getByRecycling();
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

}
