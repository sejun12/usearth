package com.app.usearth.controller;

import com.app.usearth.domain.*;
import com.app.usearth.service.AdminService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/*")
@Slf4j
public class AdminController {
    private final AdminService adminService;

    // 관리자 공지사항 페이지
    @GetMapping("announcement-list")
    public String goToAdminAnnouncementList(AdminAnnouncementDTO adminAnnouncementDTO,Pagination pagination, HttpSession session, Model model){
        AdminVO adminVO = ((AdminVO)session.getAttribute("admin"));
        pagination.setTotal(adminService.getTotalAnnouncement(adminAnnouncementDTO, adminVO.getId()));
        pagination.progress();
        model.addAttribute("pagination", pagination);
        model.addAttribute("announcement", adminService.getAnnouncement(pagination, adminVO.getId()));
        return "admin/announcement-list";
    }

    @GetMapping("announcement-write")
    public void goToAdminAnnouncementWrite(Model model, HttpSession session){
        AdminVO adminVO = ((AdminVO)session.getAttribute("admin"));
        model.addAttribute("adminName",adminVO.getAdminName());
    }
    @PostMapping(value="announcement-write")
    public RedirectView sendAdminAnnouncement(AdminAnnouncementDTO adminAnnouncementDTO, HttpSession session){

        AdminVO adminVO = ((AdminVO)session.getAttribute("admin"));
        adminAnnouncementDTO.setAdminId(adminVO.getId());
        adminService.insertAdminAnnouncement(adminAnnouncementDTO);
        return  new RedirectView("/admin/announcement-list");
    }

    // 관리자 자유게시판 페이지
    @GetMapping("board-list")
    public String goToAdminFreeBoardList(PostDTO postDTO,Pagination pagination, HttpSession session, Model model){
        AdminVO adminVO = ((AdminVO)session.getAttribute("admin"));
        pagination.setTotal(adminService.getTotalFreePost(postDTO, adminVO.getId()));
        pagination.progress();
        model.addAttribute("pagination", pagination);
        model.addAttribute("board", adminService.getFreePost(pagination, adminVO.getId()));
        return "admin/board-list";
    }

    @GetMapping("board-detail/{id}")
    public String goToAdminFreeBoardDetail(@PathVariable Long id, Model model, HttpSession session){
        AdminVO adminVO = ((AdminVO)session.getAttribute("admin"));
        model.addAttribute("adminName",adminVO.getAdminName());

        PostDTO postDTO = adminService.getPostById(id);

        UserDTO userDTO = adminService.getUserById(postDTO.getUserId());
        // 포스트 정보를 모델에 추가
        model.addAttribute("post", postDTO);
        model.addAttribute("user", userDTO);

        return "admin/board-detail";
    }

    // 관리자 관리비 페이지

    @GetMapping("maintenance-fee-detail")
    public void goToMaintenanceFeeDetail(){;}

    @GetMapping("maintenance-fee-upload")
    public void goToMaintenanceFeeUpload(){;}


    @RequestMapping
    @PostMapping("maintenance-fee-upload")
    public RedirectView uploadMaintenanceFee(@RequestBody String jsonData){
        log.info(jsonData);
        try {
            // JSON 데이터를 Jackson을 사용하여 MaintenanceFeeDTO 객체로 변환
            ObjectMapper objectMapper = new ObjectMapper();
            List<MaintenanceFeeDTO> maintenanceFeeDTOS = objectMapper.readValue(jsonData, new TypeReference<List<MaintenanceFeeDTO>>() {});

            // feeDTOList를 처리하거나 저장합니다.
            log.info("Received JSON data: " + maintenanceFeeDTOS);

            // adminService를 사용하여 데이터베이스에 데이터 저장
            for (MaintenanceFeeDTO maintenanceFeeDTO : maintenanceFeeDTOS) {
                log.info("{}", maintenanceFeeDTO);
                adminService.addFeeList(maintenanceFeeDTO);
            }
        } catch (Exception e) {
            // 오류 발생 시 오류 메시지를 반환하거나 처리
            e.getMessage();
        }
        return  new RedirectView("/admin/maintenance-fee-view");
    }


    @GetMapping("maintenance-fee-view")
    public void goToMaintenanceFeeView(){;}

    // 관리자 입주민 페이지

    @GetMapping("resident-list")
    public String goToResidentList(UserDTO userDTO, Pagination pagination, HttpSession session, Model model){
        AdminVO adminVO = ((AdminVO)session.getAttribute("admin"));
        pagination.setTotal(adminService.getTotal(userDTO, adminVO.getId()));
        pagination.progress();
        model.addAttribute("pagination", pagination);
        model.addAttribute("residents", adminService.getResidentListByPagination(pagination, adminVO.getId()));
        return "admin/resident-list"; // 이 부분은 뷰 이름을 반환하는 것으로 가정하였습니다.
    }



}