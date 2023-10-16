package com.app.usearth.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/*")
@RequiredArgsConstructor
@Slf4j
public class ComplainController {
    @GetMapping("admin-login")
    public void goToAdminLogin(){;}

    @GetMapping("complain")
    public void goToAdminComplain(){;}

    @GetMapping("complain-reply")
    public void goToAdminComplainReply(){;}
}
