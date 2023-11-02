package com.app.usearth.controller;

import com.app.usearth.domain.*;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.service.AdminService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/lists/api/")
public class AdminAPI {
    private final AdminService adminService;
    //    입주민 승인 PAGE ==> START
    // 입주민 목록 조회
    @GetMapping("resident/{id}")
    public List<UserDTO> residentList(Pagination pagination,UserDTO userDTO, @PathVariable Long id, HttpServletResponse response) {
        pagination.setTotal(adminService.getTotal(userDTO, id));
        pagination.progress();

        response.setHeader("X-Initial-Total-Count", String.valueOf(pagination.getTotal()));
        return adminService.getResidentListByPagination(pagination, id);
    }

    // 입주민 검색 조회
    @GetMapping("resident/result/{id}")
    public List<UserDTO> residentResult(UserDTO userDTO, Pagination pagination,@PathVariable Long id, HttpServletResponse response) {
        pagination.setTotal(adminService.getTotal(userDTO, id));
        pagination.progress();

        // pagination 정보를 HTTP 응답 헤더에 추가
        response.setHeader("X-Total-Count", String.valueOf(pagination.getTotal()));
        response.setHeader("X-Start-Page", String.valueOf(pagination.getStartPage()));
        response.setHeader("X-End-Page", String.valueOf(pagination.getEndPage()));
        return adminService.selectSearch(userDTO, pagination, id);
    }

    // 입주민 승인 상태 업데이트하기
    @PostMapping("update")
    public ResponseEntity<String> updateResident(@RequestBody Map<String, Object> requestData) {
        try {
            // JSON 데이터를 파싱하고 형 변환
            Long id = Long.valueOf(requestData.get("id").toString());
            Boolean userApproval = Boolean.valueOf(requestData.get("userApproval").toString());

            // 데이터베이스에서 주어진 id에 해당하는 레코드를 조회하고 userApproval 값을 업데이트
            UserDTO userDTO = adminService.getUserById(id);
            userDTO.setUserApproval(userApproval);
            adminService.modifyApproval(userDTO); // 데이터베이스에 저장

            // 업데이트가 성공한 경우, 다시 목록을 조회하여 업데이트된 데이터 반환
            List<UserDTO> updatedList = adminService.getResidentList();
            return ResponseEntity.ok("업데이트 성공");
        } catch (Exception e) {
            // 오류 발생 시 클라이언트에 오류 메시지를 반환
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("업데이트 실패: " + e.getMessage());
        }
    }

    //    공지사항 작성 PAGE ==> START
    //    공지사항 카테고리 불러오기
    @GetMapping("announcement/category")
    public List<AnnouncementCategoryVO> categoryList(){
        return adminService.extractCategory();
    }

    // 공지사항 목록 조회
    @GetMapping("announcement/{id}")
    public List<AdminAnnouncementDTO> announcementList(Pagination pagination, AdminAnnouncementDTO adminAnnouncementDTO, @PathVariable Long id, HttpSession session, HttpServletResponse response) {
        AdminVO adminVO = ((AdminVO)session.getAttribute("admin"));
        id = adminVO.getId();
        pagination.setTotal(adminService.getTotalAnnouncement(adminAnnouncementDTO,id));
        pagination.progress();
        response.setHeader("X-Initial-Total-Count", String.valueOf(pagination.getTotal()));
        return adminService.getAnnouncement(pagination, id);
    }

    // 공지사항 검색 조회
    @GetMapping("announcement/result/{id}")
    public List<AdminAnnouncementDTO>  announcementResult(AdminAnnouncementDTO adminAnnouncementDTO, Pagination pagination,@PathVariable Long id, HttpSession session, HttpServletResponse response) {
        AdminVO adminVO = ((AdminVO)session.getAttribute("admin"));
        id = adminVO.getId();
        pagination.setTotal(adminService.getTotalAnnouncement(adminAnnouncementDTO,id));
        pagination.progress();

        // pagination 정보를 HTTP 응답 헤더에 추가
        response.setHeader("X-Total-Count", String.valueOf(pagination.getTotal()));
        response.setHeader("X-Start-Page", String.valueOf(pagination.getStartPage()));
        response.setHeader("X-End-Page", String.valueOf(pagination.getEndPage()));
        return adminService.getSearchedAnnouncement(adminAnnouncementDTO, pagination, id);
    }

    //    자유게시판 PAGE ==> START
    //    게시판 카테고리 불러오기
    @GetMapping("freeboard/category")
    public List<PostCategoryVO> postCategoryList(){
        return adminService.getPostCategory();
    }

    // 자유게시판 목록 조회
    @GetMapping("freeboard/{id}")
    public List<PostDTO> freeboardList(Pagination pagination, PostDTO postDTO, @PathVariable Long id, HttpSession session, HttpServletResponse response) {
        AdminVO adminVO = ((AdminVO)session.getAttribute("admin"));
        id = adminVO.getId();
        pagination.setTotal(adminService.getTotalFreePost(postDTO,id));
        pagination.progress();
        response.setHeader("X-Initial-Total-Count", String.valueOf(pagination.getTotal()));
        return adminService.getFreePost(pagination, id);
    }

    // 자유게시판 검색 조회
    @GetMapping("freeboard/result/{id}")
    public List<PostDTO> freeboardResult(PostDTO postDTO, Pagination pagination,@PathVariable Long id, HttpSession session, HttpServletResponse response) {
        AdminVO adminVO = ((AdminVO)session.getAttribute("admin"));
        id = adminVO.getId();
        pagination.setTotal(adminService.getTotalFreePost(postDTO,id));
        pagination.progress();

        // pagination 정보를 HTTP 응답 헤더에 추가
        response.setHeader("X-Total-Count", String.valueOf(pagination.getTotal()));
        response.setHeader("X-Start-Page", String.valueOf(pagination.getStartPage()));
        response.setHeader("X-End-Page", String.valueOf(pagination.getEndPage()));
        return adminService.getSearchedFreePost(postDTO, pagination, id);
    }

    @DeleteMapping("freeboard/delete/{id}")
    public ResponseEntity<String> deleteFreeboardPost(@PathVariable Long id) {
        // 여기에서 데이터베이스에서 해당 ID에 해당하는 데이터를 삭제하는 로직을 구현
        adminService.removeFreePost(id);
        // 데이터 삭제가 성공하면 204 상태 코드(No Content)를 반환
        return new ResponseEntity<>("Deleted", HttpStatus.NO_CONTENT);
    }

    //    관리자 관리비 PAGE ==> START
    //    관리비 카테고리 년 불러오기
    @GetMapping("maintenance-fee/year")
    public List<ImposingYearVO> imposingYearList(){
        return adminService.getFeeYear();
    }

    //    관리비 카테고리 월 불러오기
    @GetMapping("maintenance-fee/month")
    public List<ImposingMonthVO> imposingMonthList(){
        return adminService.getFeeMonth();
    }

    //    관리비 동 조회 불러오기
    @GetMapping("maintenance-fee/dong")
    public List<DongVO> dongList(){
        return adminService.getDong();
    }

    // 관리비 세대별 목록 조회
    @GetMapping("maintenance-fee/result/{id}")
    public List<MaintenanceFeeDTO> unitFeeList(MaintenanceFeeDTO maintenanceFeeDTO, @PathVariable Long id, HttpSession session) {
        AdminVO adminVO = ((AdminVO)session.getAttribute("admin"));
        id = adminVO.getId();
        return adminService.selectSearchedFee(maintenanceFeeDTO, id);
    }




}

