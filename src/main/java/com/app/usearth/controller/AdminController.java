package com.app.usearth.controller;

import com.app.usearth.domain.Pagination;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.service.AdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

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
    public String goToResidentList(UserDTO userDTO, Pagination pagination, HttpSession session, Model model){
        Long id = 1L;
        pagination.setTotal(adminService.getTotal(userDTO, id));
        pagination.progress();
        model.addAttribute("pagination", pagination);
        model.addAttribute("residents", adminService.getResidentListByPagination(pagination, id));
        return "/admin/resident-list"; // 이 부분은 뷰 이름을 반환하는 것으로 가정하였습니다.
    }



}