package com.app.usearth.controller;

import com.app.usearth.domain.*;
import com.app.usearth.service.AdminComplainService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/admin/*")
@RequiredArgsConstructor
@Slf4j
public class AdminComplainController {
    private final AdminComplainService adminComplainService;
    @GetMapping("admin-login")
    public String goToAdminLogin(){return "admin/admin-login";}

    @PostMapping("admin-login")
    public RedirectView login(AdminVO adminVO, HttpSession session, RedirectAttributes redirectAttributes){
        Optional<AdminVO> foundAdmin = adminComplainService.login(adminVO);
        Optional<AdminVO> foundAdminIdentification = adminComplainService.getByIdentification(adminVO);
        if (foundAdmin.isPresent()){
            session.setAttribute("admin", foundAdmin.get());
            return new RedirectView("/admin/resident-list");
        }else{ // 로그인 실패
            if (foundAdminIdentification.isPresent()){ // 이메일은 존재하지만 비밀번호가 틀린 경우
                redirectAttributes.addFlashAttribute("loginPassword", "false");
            }else{ // 가입된 이메일 계정이 아닌 경우
                redirectAttributes.addFlashAttribute("loginId", "false");
            }
            return new RedirectView("/admin/admin-login");
        }
    }

    @GetMapping("logout")
    public RedirectView logout(HttpSession session){
        session.invalidate();
        return new RedirectView("/admin/admin-login");
    }

    @GetMapping("complain-management")
    public String goToAdminComplainManagement() {return "admin/complain-management";}

    @GetMapping("complain-reply/{id}")
    public String goToAdminComplainReply(@PathVariable Long id, HttpSession session, Model model){
        AdminVO adminVO = ((AdminVO)session.getAttribute("admin"));
        Optional<ComplainAdminDTO> foundComplain = adminComplainService.getComplainById(adminVO.getApartmentId(), id);
        foundComplain.ifPresent(complainAdminDTO -> model.addAttribute("complain", complainAdminDTO));

        return "admin/complain-reply";
    }

    @PostMapping("complain-reply/{id}")
    public RedirectView writeReply(@PathVariable Long id, @RequestParam("complainReplyContent")String complainReplyContent, @RequestParam("categoryComplainName")String categoryComplainName, HttpSession session){
        AdminVO adminVO = ((AdminVO)session.getAttribute("admin"));

        ComplainReplyDTO complainReplyDTO = new ComplainReplyDTO();
        complainReplyDTO.setComplainId(id);
        complainReplyDTO.setComplainReplyContent(complainReplyContent);
        complainReplyDTO.setAdminId(adminVO.getId());
        complainReplyDTO.setCategoryComplainName(categoryComplainName);

        adminComplainService.writeComplainReply(complainReplyDTO);

        return new RedirectView("/admin/complain-management");
    }
}
