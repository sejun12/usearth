package com.app.usearth.controller;

import com.app.usearth.domain.Pagination;
import com.app.usearth.domain.ReserveCarDTO;
import com.app.usearth.service.MypageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/admin/*")
@RequiredArgsConstructor
public class AdminVisitController {
    private final MypageService mypageService;
    @GetMapping("visit-vehicle")
    public void allVisit(Pagination pagination, Model model, HttpSession session){
        Long id=1L;
        pagination.setTotal(mypageService.getTotal(id));
        pagination.progress();
        model.addAttribute("pagination", pagination);

    }
    @PostMapping("visit-vehicle")
    public RedirectView adminBooking(@RequestBody ReserveCarDTO reserveCarDTO){
        mypageService.adminBooking(reserveCarDTO);
        return new RedirectView("/admin/visit-vehicle");
    }
}

