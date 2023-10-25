package com.app.usearth.controller;

import com.app.usearth.domain.PostDTO;
import com.app.usearth.service.RecyclingAgentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/recycling-reads/")
public class RecyclingAgentAPI {
    private final RecyclingAgentService recyclingAgentService;

    @GetMapping("recycling-list")
    public List<PostDTO> getByRecycling() {
//      recyclingAgentService의 getByRecycling 메소드를 호출하고 그 결과를 반환
        return recyclingAgentService.getByRecycling();
    }

    // '/api/recycling-reads/{id}' 형태의 URL로 오는 GET 요청을 처리
    // ({id}는 URL의 일부로 들어오는 게시글의 ID)
    // URL에서 {id} 부분을 추출하여 Long 타입의 id 매개변수에 할당
    @GetMapping("{id}")
    public PostDTO getByRecyclingRead(@PathVariable("id") Long id) {
        // else일때 PostDTO 반환
        return recyclingAgentService.selectByRecyclingRead(id).orElseGet(PostDTO::new);
    }

}
