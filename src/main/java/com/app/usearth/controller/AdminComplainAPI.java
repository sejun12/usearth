package com.app.usearth.controller;

import com.app.usearth.domain.*;
import com.app.usearth.service.AdminComplainService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;


@RestController
@RequiredArgsConstructor
@RequestMapping("/complains/api/*")
@Slf4j
public class AdminComplainAPI {
    private final AdminComplainService adminComplainService;

//    민원 목록 조회
    @GetMapping("complains-list")
    public SearchComplainDTO goToAdminComplainManagement(HttpSession session, Pagination pagination,SearchComplain searchComplain, Model model) {
        AdminVO adminVO = ((AdminVO)session.getAttribute("admin"));
        Long apartmentId = adminVO.getApartmentId();
        pagination.setTotal(adminComplainService.getTotalByAptId(apartmentId, searchComplain));
        pagination.progress();

        SearchComplainDTO searchComplainDTO = adminComplainService.getSearch(pagination, apartmentId, searchComplain);
        searchComplainDTO.setPagination(pagination);

        return searchComplainDTO;
    }

    @PostMapping("update")
    public void update(@RequestBody ComplainVO complainVO){
        adminComplainService.modifyComplainStatus(complainVO);
    }
}
