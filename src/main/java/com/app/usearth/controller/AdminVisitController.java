package com.app.usearth.controller;

import com.app.usearth.domain.Pagination;
import com.app.usearth.service.MypageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/*")
@RequiredArgsConstructor
public class AdminVisitController {
    private final MypageService mypageService;
    @GetMapping("visit-vehiclemanager")
    public void allVisit(Pagination pagination, Model model){
        pagination.setTotal(mypageService.getTotal());
        pagination.progress();
        model.addAttribute("pagination", pagination);
        model.addAttribute("visits", mypageService.visitBookingList(pagination));
    }
}
