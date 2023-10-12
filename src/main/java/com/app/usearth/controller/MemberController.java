package com.app.usearth.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    @GetMapping("/recycling-agent/recycling-agent")
    public void goToRecyclingagent(){;}

    @GetMapping("/member/join")
    public void goToRecyclingagentread(){;}

}
