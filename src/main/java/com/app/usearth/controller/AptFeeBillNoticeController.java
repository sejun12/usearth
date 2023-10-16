package com.app.usearth.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/notice/*")
public class AptFeeBillNoticeController {

    @GetMapping("announcement")
    public void goToAnnouncement(){
        ;
    }

    @GetMapping("notice")
    public void goToNotice(){
        ;
    }
}
