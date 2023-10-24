package com.app.usearth.controller;


import com.app.usearth.domain.PostDTO;
import com.app.usearth.service.FreeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/board/*")
@Slf4j
public class FreeController {

    @GetMapping("/freeboard")
    public void goToFree(PostDTO postDTO){;}
}
