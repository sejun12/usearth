package com.app.usearth.controller;

import com.app.usearth.domain.ComplainDTO;
import com.app.usearth.domain.ReserveCarVO;
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
    public RedirectView complainSubmit(ComplainDTO complainDTO){
        //세션아이디 넣고
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
    public void goToMyInquiry(){;}
    @GetMapping("member-withdrawal")
    public void goToMyMemberWithDrawl(){;}
    @PostMapping("member-withdrawal")
    public RedirectView goToMyWithDrawl(){
        //세션의아이디
//        Long id=1L;
//        mypageService.removeAll(id);
        return new RedirectView("/");
    }

    @GetMapping("mypage")
    public void goToMyPage(){;}
    @PostMapping("inquiry")
    //업로드 된개수 ,INPUT 3개
    public RedirectView updateProfile(@RequestParam("uuid") String uuid, @RequestParam("uploadFile") List<MultipartFile> uploadFiles) {
//        MemberVO memberVO = ((MemberVO)session.getAttribute("member"));
        //업로드한거만 보냄
        UserProfileVO userProfileVO=new UserProfileVO();
        userProfileVO.setId(1L);
        userProfileVO.setUserProfileName(uuid + "_" + uploadFiles.get(0).getOriginalFilename());
        userProfileVO.setUserProfilePath(getPath());
        mypageService.changeProfile(userProfileVO);
        return new RedirectView("/mypage/inquiry");
    }

    private String getPath() {
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }
    @GetMapping("reserve-car")
    public void goToMyReserveCar(ReserveCarVO reserveCarVO){;}
    @PostMapping("reserve-car")
    public RedirectView reserve(ReserveCarVO reserveCarVO){
//        세션에 아이디 가져와서 밑에 넣고 실행 하면 될듯
//        reserveCarVO.setUserId(1L);
        mypageService.saveCar(reserveCarVO);
        return new RedirectView("/mypage/reserve-carlist");
    }
    @GetMapping("reserve-carlist")
    public void goToMyReserveCarList(){
        //        세션에서 가지고온 id로 넣고
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
