package com.app.usearth.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/recycling-agent/")
public class RecyclingAgentController {

    @GetMapping("recycling")
    public String goToRecycling(){
        return "recycling-agent/recycling-agent";
    }

}
