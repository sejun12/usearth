package com.app.usearth.controller;

import com.app.usearth.domain.AdminVO;
import com.app.usearth.domain.Pagination;
import com.app.usearth.domain.SearchVisitDTO;
import com.app.usearth.service.MypageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/admin/*")
@RequiredArgsConstructor
@Slf4j
public class AdminVisitController {
    private final MypageService mypageService;
    @GetMapping("visit-vehicle")
    public String allVisit(@RequestParam(required = false) Boolean dong,SearchVisitDTO searchVisitDTO, Pagination pagination, Model model, HttpSession session){
        //동 호수 없으시
        model.addAttribute("dong", dong);
       AdminVO adminVO= ((AdminVO)session.getAttribute("admin"));
        Long id=adminVO.getId();
        pagination.setTotal(mypageService.getTotal(searchVisitDTO,id));
        pagination.progress();
        model.addAttribute("pagination", pagination);
        return "/admin/visit-vehicle";
    }

}

