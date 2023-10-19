package com.app.usearth.controller;

import com.app.usearth.domain.UserDTO;
import com.app.usearth.service.KakaoService;
import com.app.usearth.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpSession;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@Slf4j
public class KakaoController {
    private final KakaoService kakaoService;
    private final UserService userService;
    @GetMapping("kakao/login")
    public RedirectView login(String code, HttpSession session){
        String token = kakaoService.getKakaoAccessToken(code);
        Optional<UserDTO> foundInfo = kakaoService.getKakaoInfo(token);

        if(foundInfo.isPresent()) {
            userService.join(foundInfo.get());
            UserDTO userDTO = userService.getUser(foundInfo.get().getUserKakaoEmail()).get();
            session.setAttribute("user", userDTO);
            if(userDTO.getApartmentId() == null){
                return new RedirectView("/user/address-settings");
            }else{
                return new RedirectView("/user/blocking");
            }
        }
        return new RedirectView("/user/login");
    }
}
