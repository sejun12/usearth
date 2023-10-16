package com.app.usearth.controller;

import com.app.usearth.domain.UserDTO;
import com.app.usearth.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user/*")
@RequiredArgsConstructor
@Slf4j
public class UserController {
    private final UserService userService;
    @GetMapping("address-settings")
    public void goToJoin(){;}

    @GetMapping("login")
    public void goToLogin(){;}

    @GetMapping("blocking")
    public void goToBlocking(){;}

}
