package com.app.usearth.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/recycling-agent/*")
@RequiredArgsConstructor
public class RecyclingAgentViewController {

    @GetMapping("recycling")
    public void showRecycling() {
        ;
    }

    @GetMapping("recycling-agentread")
    public String goToRecyclingRead(){

        return "recycling-agent/recycling-agentread";
    }

    @GetMapping("recycling-agentwrite")
    public String goToRecyclingWrite(){

        return "recycling-agent/recycling-agentwrite";
    }

}
