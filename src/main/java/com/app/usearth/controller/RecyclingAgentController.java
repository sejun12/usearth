package com.app.usearth.controller;

import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.PostVO;
import com.app.usearth.service.RecyclingAgentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/recycling-agent/*")
@RequiredArgsConstructor
@Slf4j
public class RecyclingAgentController {

    private final RecyclingAgentService recyclingAgentService;

//    '/recycling-agent/recycling-list' 경로에 GET 요청이 오면 해당 메서드를 실행하도록 지정
    @RequestMapping(value = "/api/recycling-agents/recycling-list")
    @ResponseBody
    public List<PostDTO> getByRecycling() {
//      recyclingAgentService의 getByRecycling 메소드를 호출하고 그 결과를 반환
        return recyclingAgentService.getByRecycling();
    }

    @GetMapping("recycling-agent")
    public void showRecycling() {;
//      showRecycling()는 "recycling-agent"라는 뷰 이름을 반환
//        return "recycling-agent/recycling-agent";
    }

    @RequestMapping(value = "/api/recycling-agents/recycling-read")
    @ResponseBody
    public List<PostDTO> getByRecyclingRead(@PathVariable Long postId) {
        return recyclingAgentService.getByRecyclingRead(postId);
    }

    @GetMapping("recycling-agentread")
    public void showRecyclingRead(){;}


    @GetMapping("recycling-agentwrite")
    public String goToRecyclingWrite(){
//      goToRecyclingWrite()는  "recycling-agent/recycling-agentwrite"라는 뷰 이름을 반환
        return "recycling-agent/recycling-agentwrite";
    }

}

