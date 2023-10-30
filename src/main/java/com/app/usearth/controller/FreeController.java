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
@RequestMapping("/board/*")
@Slf4j
public class FreeController {
    private final FreeService freeService;
    // 게시글 목록
    @GetMapping("freeboard")
    public void goToFree(){;}

    //게시글 상세보기
    @GetMapping("viewpost/{id}")
    public String getByFreeRead(@PathVariable Long id){

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
        log.info("---{}", postDTO);
        freeService.addFree(postDTO);
        Long postId=postDTO.getId();
        return new RedirectView("/board/viewpost/" +postId);
    }
    @GetMapping("freeboard-write/{id}")
    public String goToFreeModify(@PathVariable Long id, Model model){
        PostDTO postDTO= freeService.getPostById(id);
        model.addAttribute("post", postDTO);
        log.info("------------{}", model);
        return "board/freeboard-write";
    }

    @PostMapping("freeboard-write/{id}")
    public RedirectView updatePost(@PathVariable Long id, PostDTO postDTO, HttpSession session) {
        UserDTO userDTO = ((UserDTO) session.getAttribute("user"));
        postDTO.setUserId(userDTO.getId());
        postDTO.setId(id);

        freeService.updatePost(postDTO);
        Long modifyPostId = postDTO.getId();
        return new RedirectView("/board/viewpost/" + modifyPostId);
    }

    // 댓글
    @GetMapping("post/{postId}")
    @ResponseBody
    public List<CommentDTO> getCommentsByPostId(@PathVariable Long postId){
        return freeService.getCommentsByPostId(postId);
    }

    // 새 댓글
    @PostMapping("addComment")
    public String addComment(CommentDTO commentDTO){
        freeService.addComment(commentDTO);
        return "redirect:/board/viewpost/" +commentDTO.getPostId();
    }
    // 댓글 개수 조회
    @GetMapping("getCountComment")
    @ResponseBody
    public int getCommentCount(@RequestParam Long postId){
        return freeService.getCommentCountByPostId(postId);
    }
}
