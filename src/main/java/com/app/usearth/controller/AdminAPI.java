package com.app.usearth.controller;

import com.app.usearth.domain.Pagination;
import com.app.usearth.domain.UserVO;
import com.app.usearth.service.AdminService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@RequiredArgsConstructor
@RequestMapping("/lists/api/")
public class AdminAPI {
    private final AdminService adminService;

    // 입주민 목록 조회
    @GetMapping("resident")
    public List<UserVO> residentList(Pagination pagination, Model model) {
        pagination.setTotal(adminService.getTotal());
        pagination.progress();
        model.addAttribute("pagination", pagination);
        return adminService.getResidentListByPagination(pagination);
    }

    // 입주민 승인 상태 업데이트하기
    @PostMapping("update")
    public ResponseEntity<String> updateResident(@RequestBody Map<String, Object> requestData) {
        try {
            // JSON 데이터를 파싱하고 형 변환
            Long id = Long.valueOf(requestData.get("id").toString());
            Boolean userApproval = Boolean.valueOf(requestData.get("userApproval").toString());

            // 데이터베이스에서 주어진 id에 해당하는 레코드를 조회하고 userApproval 값을 업데이트
            UserVO userVO = adminService.getUserById(id);
            userVO.setUserApproval(userApproval);
            adminService.modifyApproval(userVO); // 데이터베이스에 저장

            // 업데이트가 성공한 경우, 다시 목록을 조회하여 업데이트된 데이터 반환
            List<UserVO> updatedList = adminService.getResidentList();
            return ResponseEntity.ok("업데이트 성공");
        } catch (Exception e) {
            // 오류 발생 시 클라이언트에 오류 메시지를 반환
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("업데이트 실패: " + e.getMessage());
        }
    }
}

