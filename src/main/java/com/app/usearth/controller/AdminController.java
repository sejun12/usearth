package com.app.usearth.controller;

import com.app.usearth.domain.Pagination;
import com.app.usearth.service.AdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/*")
@Slf4j
public class AdminController {
    private final AdminService adminService;

    @GetMapping("announcement-list")
    public void goToAdminAnnouncementList(){;}

    @GetMapping("announcement-write")
    public void goToAdminAnnouncementWrite(){;}

    @GetMapping("maintenance-fee-detail")
    public void goToMaintenanceFeeDetail(){;}

    @GetMapping("maintenance-fee-upload")
    public void goToMaintenanceFeeUpload(){;}

    @GetMapping("maintenance-fee-view")
    public void goToMaintenanceFeeView(){;}

    @GetMapping("resident-list")
    public void goToResidentList(Pagination pagination, Model model){
        pagination.setTotal(adminService.getTotal());
        pagination.progress();
        model.addAttribute("pagination", pagination);
        model.addAttribute("residents",adminService.getResidentListByPagination(pagination));
    }

    @GetMapping("visit-vehicle")
    public void goToVisitVehicle(){;}

}