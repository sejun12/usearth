package com.app.usearth.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/mypage/*")
public class MyPageController {

    @GetMapping("complain")
    public void goToMyComplain(){;}
    @GetMapping("complain-detail")
    public void goToMyComplainDetail(){;}
    @GetMapping("inquiry")
    public void goToMyInquiry(){;}
    @GetMapping("member-withdrawal")
    public void goToMyMemberWithDrawl(){;}
    @GetMapping("mypage")
    public void goToMyPage(){;}
    @PostMapping("mypage")
    //업로드 된개수 ,INPUT 3개
    public RedirectView updateProfile(@RequestParam("uuid") List<String> uuids, @RequestParam("uploadFile") List<MultipartFile> uploadFiles){
        int count = 0;
        for(int i=0; i<uploadFiles.size(); i++){
            //업로드한거만 보냄
            if(uploadFiles.get(i).isEmpty()) {count++; continue;}
//            FileVO fileVO = new FileVO();
//            fileVO.setFileName(uuids.get(i - count) + "_" + uploadFiles.get(i).getOriginalFilename());
//            fileVO.setFilePath(getPath());
//            fileService.register(fileVO);
        }
        return new RedirectView("/member/detail");
    }
    @GetMapping("reserve-car")
    public void goToMyReserveCar(){;}
    @GetMapping("reserve-carlist")
    public void goToMyReserveCarList(){;}
    @GetMapping("mycommunity")
    public void goToMyCommunity(){;}
    @GetMapping("mainfooter")
    public void goTOmA(){;}

}
