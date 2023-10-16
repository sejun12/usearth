package com.app.usearth.controller;

import com.app.usearth.domain.PostVO;
import com.app.usearth.service.RecyclingAgentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/agents/api/*")
@RequiredArgsConstructor
@Slf4j
public class RecyclingAgentController {

    private final RecyclingAgentService recyclingAgentService;

    @GetMapping("recycling")
    public List<PostVO> getByRecycling() {

        return recyclingAgentService.getByRecycling();
    }

}
