package com.app.usearth.controller;

import com.app.usearth.domain.Pagination;
import com.app.usearth.domain.Search;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.service.AdminService;
import lombok.RequiredArgsConstructor;

import org.apache.ibatis.annotations.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;


@RestController
@RequiredArgsConstructor
@RequestMapping("/lists/api/")
public class AdminAPI {
    private final AdminService adminService;

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
}

