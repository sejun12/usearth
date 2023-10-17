package com.app.usearth.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/*")
@Slf4j
public class AdminController {

    @GetMapping("announcement-list")
    public void goToAdminAnnouncementList(){;}

    @GetMapping("announcement-write")
    public void goToAdminAnnouncementWrite(){;}

    @GetMapping("complain-management")
    public void goToAdminComplainManagement(){;}

//    @GetMapping("complain-reply")
//    public void goToComplainReply(){;}

    @GetMapping("maintenance-fee-detail")
    public void goToMaintenanceFeeDetail(){;}

    @GetMapping("maintenance-fee-upload")
    public void goToMaintenanceFeeUpload(){;}

    @GetMapping("maintenance-fee-view")
    public void goToMaintenanceFeeView(){;}

    @GetMapping("resident-list")
    public void goToResidentList(){;}
}
