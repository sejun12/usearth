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

    @GetMapping("freeboard")
    public void goToFree(){;}

    @GetMapping("viewpost/{id}")
    public String getByFreeRead(@PathVariable Long id){
        return "/board/viewpost";
    }
    @GetMapping("freeboard-write")
    public String goToFreeWrite(){
        return "/board/freeboard-write";
    }

    @GetMapping("/post/{postId}")
    @ResponseBody
    public List<CommentDTO> getCommentsByPostId(@PathVariable Long postId){
        return freeService.getCommentsByPostId(postId);
    }
    @PostMapping("addComment")
    public String addComment(CommentDTO commentDTO){
        freeService.addComment(commentDTO);
        return "redirect:/board/viewpost" +commentDTO.getPostId();
    }
}
