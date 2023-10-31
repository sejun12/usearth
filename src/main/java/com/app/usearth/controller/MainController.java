package com.app.usearth.controller;

import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.service.FreeService;
import com.app.usearth.service.MainService;
import com.app.usearth.service.RecyclingAgentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;


@Controller
@RequiredArgsConstructor
@Slf4j
public class MainController {
    private final MainService mainService;
    @GetMapping("/")
    public String goToMain(HttpSession session) {
        UserDTO user = (UserDTO) session.getAttribute("user");
        if(user == null){
            return "/user/login";
        }else{
            return "main";
        }
    }



}
