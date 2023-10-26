package com.app.usearth.controller;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;
import com.app.usearth.service.FreeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@RequestMapping("/board/*")
@Slf4j
public class FreeController {
    private final FreeService freeService;

    @RequestMapping(value = "freelist")
    @ResponseBody
    public List<PostDTO> freeList(){
        // freeService의 freeList 메소드 호출, 그 결과값 반환
        return freeService.freeList();
    }
    @GetMapping("freeboard")
    public void goToFree(){;}

    @RequestMapping(value = "freeRead/{id}")
    @ResponseBody
    public Optional<PostDTO> freeBoardRead(@PathVariable("id") Long postId){
        return freeService.freeBoardRead(postId);

    }

    @GetMapping("viewpost/{id}")
    public String showFreeRead(@PathVariable Long id, Model model) {
        Optional<PostDTO> post = freeService.freeBoardRead(id);
        if (!post.isPresent()) {
            return "errorPage";
        }
        model.addAttribute("posts",post.get());
        return "/board/viewpost";
    }
    @GetMapping("/post/{postId}")
    @ResponseBody
    public List<CommentDTO> getCommentsByPostId(@PathVariable Long postId){
        return freeService.getCommentsByPostId(postId);
    }
    @PostMapping()
    public String addComment(CommentDTO commentDTO){
        freeService.addComment(commentDTO);
        return "redirect:/board/viewpost" +commentDTO.getPostId();
    }
}
