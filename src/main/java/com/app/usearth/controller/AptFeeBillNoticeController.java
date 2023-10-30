package com.app.usearth.controller;

import com.app.usearth.domain.AnnouncementDTO;
import com.app.usearth.domain.Pagination;
import com.app.usearth.service.AptFeeBillNoticeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpSession;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/notice/*")
public class AptFeeBillNoticeController {
    private final AptFeeBillNoticeService aptFeeBillNoticeService;

    @GetMapping("announcement")
    public void goToAnnouncement(Pagination pagination, Model model){
        pagination.setTotal(aptFeeBillNoticeService.selectTotal());
        pagination.progress();
        model.addAttribute("pagination", pagination);
        model.addAttribute("posts" , aptFeeBillNoticeService.announcementList(pagination));
    }

    @PostMapping("announcement")
    public RedirectView goToAnnouncementDetail(Long id, HttpSession session, Model model) {
        aptFeeBillNoticeService.viewCountUp(id);
        Optional<AnnouncementDTO> foundPost = aptFeeBillNoticeService.detail(id);
        if(foundPost.isPresent()){
            log.info(String.valueOf(foundPost.get()));
            session.setAttribute("post", foundPost.get());
            return new RedirectView("notice");
        } else {
            log.info("error");
        }
        return new RedirectView("announcement");
    }

    @GetMapping("notice")
    public void goToNotice(){
        ;
    }
}
