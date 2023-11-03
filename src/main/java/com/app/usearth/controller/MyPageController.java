package com.app.usearth.controller;

import com.app.usearth.domain.ComplainDTO;
import com.app.usearth.domain.ReserveCarVO;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.domain.UserProfileVO;
import com.app.usearth.service.MypageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpSession;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/mypage/*")
@Slf4j
public class MyPageController {
    private final MypageService mypageService;

    @GetMapping("mypage")
    public String goToMyPage(){
        return "mypage/mypage";
    }
    //민원 접수
    @GetMapping("complain")
    public String goToMyComplain(ComplainDTO complainDTO){
        return "mypage/complain";
    }
    @PostMapping("complain")
    public RedirectView complainSubmit(ComplainDTO complainDTO,HttpSession session){
        UserDTO userDTO = ((UserDTO)session.getAttribute("user"));
        complainDTO.setUserId(userDTO.getId());
        mypageService.addComplain(complainDTO);
        return new RedirectView("/mypage/community");
    }
    //민원접수 상세 페이지
    @GetMapping("complain-detail/{id}")
    public String goToMyComplainDetail(@PathVariable Long id){
        return "mypage/complain-detail";
    }

    //회원 탈퇴
    @GetMapping("member-withdrawal")
    public String goToMyMemberWithDrawl(){
        return "mypage/member-withdrawal";
    }
    @PostMapping("member-withdrawal")
    public RedirectView goToMyWithDrawl(HttpSession session){
        UserDTO userDTO = ((UserDTO)session.getAttribute("user"));
        Long id=userDTO.getId();
        mypageService.removeAll(id);
        session.invalidate();
        return new RedirectView("/user/login");
    }

    //개인 정보 조회
    @GetMapping("inquiry")
    public String  goToMyInquiry(){
        return "mypage/inquiry";
    }
    @PostMapping("inquiry")
    //업로드 된개수 ,INPUT 3개
    public RedirectView updateProfile(@RequestParam("uuid") String uuid, @RequestParam("uploadFile") List<MultipartFile> uploadFiles ,HttpSession session) {
        UserDTO userDTO = ((UserDTO)session.getAttribute("user"));
        //업로드한거만 보냄
        UserProfileVO userProfileVO=new UserProfileVO();
        userProfileVO.setId(userDTO.getUserProfileId());
        userProfileVO.setUserProfileName(uuid + "_" + uploadFiles.get(0).getOriginalFilename());
        userProfileVO.setUserProfilePath(getPath());
        mypageService.changeProfile(userProfileVO);
        //프로필 저장한 경로 다시 session 에 저장
        userDTO.setUserProfileName(userProfileVO.getUserProfileName());
        userDTO.setUserProfilePath(getPath());
        session.setAttribute("user", userDTO);
        return new RedirectView("/mypage/inquiry");
    }

    private String getPath() {
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }
    //차량 예약
    @GetMapping("reserve-car")
    public String goToMyReserveCar(ReserveCarVO reserveCarVO){
        return "mypage/reserve-car";
    }
    @PostMapping("reserve-car")
    public RedirectView reserve(ReserveCarVO reserveCarVO,HttpSession session){
        log.info("reserveCarVO1: {}", reserveCarVO);
        UserDTO userDTO = ((UserDTO)session.getAttribute("user"));
        log.info("userDTO: {}", userDTO);
        reserveCarVO.setUserId(userDTO.getId());
        log.info("reserveCarVO2: {}", reserveCarVO);
        mypageService.saveCar(reserveCarVO);
        return new RedirectView("/mypage/reserve-carlist");
    }
    //차량 예약 리스트
    @GetMapping("reserve-carlist")
    public String goToMyReserveCarList(){
        return "mypage/reserve-carlist";
    }
    //    내 작성 이동 목록
    @GetMapping("community")
    public String goToMyCommunity(){
        return "mypage/community";
    }

    @GetMapping("logout")
    public RedirectView logout(HttpSession session){
        if(session!=null) {
            session.invalidate();
        }
        return new RedirectView("/");
    }

}
