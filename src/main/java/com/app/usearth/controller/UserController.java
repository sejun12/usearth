package com.app.usearth.controller;

import com.app.usearth.domain.UserDTO;
import com.app.usearth.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/user/*")
@RequiredArgsConstructor
@Slf4j
public class UserController {
    private final UserService userService;
    @GetMapping("address-settings")
    public String goToJoin(){ return "user/address-settings";}

    @PostMapping("address-settings")
    public RedirectView addressSettings(HttpSession session, @RequestParam("aptAddress")List<String> aptAddresses){
        UserDTO userDTO = ((UserDTO)session.getAttribute("user"));

        userDTO.setApartmentId(userService.getAptName(aptAddresses.get(0)));
        userDTO.setUserDong(aptAddresses.get(1));
        userDTO.setUserHo(aptAddresses.get(2));

        userService.updateAptAddress(userDTO);

        if (!userDTO.isUserApproval()) {
            return new RedirectView("/user/blocking");
        }else {
            return new RedirectView("/");
        }

    }

    @GetMapping("login")
    public String goToLogin(){ return "user/login";}

    @GetMapping("blocking")
    public String goToBlocking(){ return "user/blocking";}

}
