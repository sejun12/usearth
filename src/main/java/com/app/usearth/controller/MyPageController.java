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
    @GetMapping("complain")
    public void goToMyComplain(ComplainDTO complainDTO){;}
    @PostMapping("complain")
    public RedirectView complainSubmit(ComplainDTO complainDTO,HttpSession session){
        UserDTO userDTO = ((UserDTO)session.getAttribute("user"));
        complainDTO.setUserId(userDTO.getId());
        mypageService.addComplain(complainDTO);
        return new RedirectView("/mypage/community");
    }
    @GetMapping("complain-detail/{id}")
    public String goToMyComplainDetail(@PathVariable Long id){
        return "/mypage/complain-detail";
    }
    @GetMapping("edit-personal")
    public void goToMyEditPersonal(){;}
    @GetMapping("inquiry")
    public String  goToMyInquiry(){
        return"/mypage/inquiry";
    }
    @GetMapping("member-withdrawal")
    public void goToMyMemberWithDrawl(){;}
    @PostMapping("member-withdrawal")
    public RedirectView goToMyWithDrawl(HttpSession session){
        UserDTO userDTO = ((UserDTO)session.getAttribute("user"));
        Long id=userDTO.getId();
        log.info("{}",id);
        mypageService.removeAll(id);
        return new RedirectView("/");
    }

    @GetMapping("mypage")
    public void goToMyPage(){;}
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
        userDTO.setUserProfileName(userProfileVO.getUserProfileName());
        session.setAttribute("user", userDTO);
        return new RedirectView("/mypage/inquiry");
    }

    private String getPath() {
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }
    @GetMapping("reserve-car")
    public void goToMyReserveCar(ReserveCarVO reserveCarVO){;}
    @PostMapping("reserve-car")
    public RedirectView reserve(ReserveCarVO reserveCarVO,HttpSession session){
      UserDTO userDTO = ((UserDTO)session.getAttribute("user"));
        reserveCarVO.setUserId(userDTO.getId());
        mypageService.saveCar(reserveCarVO);
        return new RedirectView("/mypage/reserve-carlist");
    }
    @GetMapping("reserve-carlist")
    public void goToMyReserveCarList(){
    }
//    작성 이동 목록
    @GetMapping("community")
    public void goToMyCommunity(){;}
    @GetMapping("recycling")
    public void goToMyRecycling(){;}
    @GetMapping("free")
    public void goToMyFree(){;}
    @GetMapping("reply")
    public void goToMyReply(){;}
    @GetMapping("logout")
    public RedirectView logout(HttpSession session){
        if(session!=null) {
            session.invalidate();
        }
        return new RedirectView("/");
    }

}
