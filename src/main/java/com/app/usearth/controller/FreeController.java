package com.app.usearth.controller;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.service.FreeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@RequestMapping("board/*")
@Slf4j
public class FreeController {
    private final FreeService freeService;
    // 게시글 목록
    @GetMapping("freeboard")
    public String goToFree(){ return "board/freeboard";}

    //게시글 상세보기
    @GetMapping("viewpost/{id}")
    public String getByFreeRead(@PathVariable Long id, Model model){
        Optional<PostDTO> foundPost= freeService.freeBoardRead(id);

        freeService.updateViewCount(id);
        if (foundPost.isPresent()) model.addAttribute("post", foundPost.get());

        return "board/viewpost";
    }
   // 게시글 작성
    @GetMapping("freeboard-write")
    public String goToFreeWrite(Model model){
        PostDTO postDTO= new PostDTO();
        model.addAttribute("post", postDTO);
        return "board/freeboard-write";
    }
    // 게시글 저장
    @PostMapping("freeboard-write")
    public RedirectView writePost(PostDTO postDTO, HttpSession session){
        UserDTO userDTO=((UserDTO)session.getAttribute("user"));
        postDTO.setUserId(userDTO.getId());
        freeService.addFree(postDTO);
        Long postId=postDTO.getId();
        return new RedirectView("/board/viewpost/" +postId);
    }
    // 게시글 수정
    @GetMapping("freeboard-write/{id}")
    public String goToFreeModify(@PathVariable Long id, Model model){
        PostDTO postDTO= freeService.getPostById(id);
        model.addAttribute("post", postDTO);
        log.info("------------{}", model);
        return "board/freeboard-write";
    }
    // 게시글 수정 후 저장
    @PostMapping("freeboard-write/{id}")
    public RedirectView updatePost(@PathVariable Long id, PostDTO postDTO, HttpSession session) {
        UserDTO userDTO = ((UserDTO) session.getAttribute("user"));
        postDTO.setUserId(userDTO.getId());
        postDTO.setId(id);

        freeService.updatePost(postDTO);
        Long modifyPostId = postDTO.getId();
        return new RedirectView("/board/viewpost/" + modifyPostId);
    }


}
