package com.app.usearth.controller;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.service.RecyclingAgentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpSession;
import java.net.http.HttpClient;
import java.util.List;

@Controller
@RequestMapping("/recycling-agent/*")
@RequiredArgsConstructor
@Slf4j
public class RecyclingAgentController {

    private final RecyclingAgentService recyclingAgentService;

    @GetMapping("recycling-agent")
    public void getByRecycling() {;}

    @GetMapping("recycling-agentread/{id}")
    public String getByRecyclingRead(@PathVariable Long id) {

        return "recycling-agent/recycling-agentread";
    }
//   Model을 사용하는 이유 : (Key, Value 형식을 가지고) 화면으로 data값을 가져가기 위해 사용


    // 재활용대행 신청
    @GetMapping("recycling-agentwrite")
    public String goToRecyclingWrite(Model model) {

        PostDTO postDTO = new PostDTO();
        model.addAttribute("post", postDTO);
        return "recycling-agent/recycling-agentwrite";
    }

    // 재활용대행 신청 후 저장
    @PostMapping("recycling-agentwrite")
    public RedirectView writePost(PostDTO postDTO, HttpSession session){
//      UserDTO 타입에 session을 담아서 userDTO 담음(user: key값)
        UserDTO userDTO = ((UserDTO)session.getAttribute("user"));
//      user의 모든 값이 userDTO에 담김
//      userDTO의 id를 가져옴(getId())
        postDTO.setUserId(userDTO.getId());
        recyclingAgentService.addPost(postDTO);
        Long postId = postDTO.getId();
        return new RedirectView("/recycling-agent/recycling-agentread/" + postId);
    }

    // 재활용대행 수정하기
    @GetMapping("recycling-agentwrite/{id}")
    public String goToRecyclingModify(@PathVariable Long id, Model model) {
        PostDTO postDTO = recyclingAgentService.getPostById(id);
        model.addAttribute("post", postDTO);
        log.info("--------------{}", model);
        return "recycling-agent/recycling-agentwrite";
    }

    // 게시글 수정 후 저장
    @PostMapping("recycling-agentwrite/{id}")
    public RedirectView updatePost(@PathVariable Long id, PostDTO postDTO, HttpSession session) {
        UserDTO userDTO = ((UserDTO)session.getAttribute("user"));
        postDTO.setUserId(userDTO.getId());
        postDTO.setId(id); // 게시글 ID 설정

        // 게시글 정보를 수정하는 서비스 메서드를 호출
        recyclingAgentService.updatePost(postDTO);
        Long modifyPostId = postDTO.getId();
        return new RedirectView("/recycling-agent/recycling-agentread/" + modifyPostId);
    }

    //    댓글 관련
//    게시글의 ID를 이용하여 댓글목록을 조회하고 새로운 댓글을 추가
//    특정 게시글에 대한 댓글 목록 반환
    @GetMapping("post/{postId}")
    @ResponseBody
//  매개변수로 @PathVariable Long postId를 받는데,
//  @PathVariable 어노테이션은 URL의 변수 부분에서 값을 추출할 때 사용
//  즉, /post/{postId} URL에서 {postId} 부분의 값을 Long 타입으로 받아온다는 의미
    public List<CommentDTO> getCommentsByPostId(@PathVariable Long postId) {
//      getCommentsByPostId 메소드를 호출하여 해당 postId에 연결된 댓글 목록을 반환
        return recyclingAgentService.getCommentsByPostId(postId);
    }



    // 새 댓글 추가
    @PostMapping("addComment")
//  CommentDTO 타입의 매개변수를 받아옴
    public String addComment(CommentDTO comment) {
//      addComment 메소드를 호출하여 comment 객체에 담긴 댓글 정보를 DB에 추가
        recyclingAgentService.addComment(comment);
//      메소드가 문자열을 반환
//      'redirect:/recycling-agent/recycling-read/' 이 문자열은 댓글이 추가된 후 리다이렉트할 URL에 나타냄
//      "redirect:" 접두사는 Spring에게 해당 URL로 리다이렉트하라는 지시
//      댓글이 추가된 게시글의 상세 페이지로 리다이렉트
        return "redirect:/recycling-agent/recycling-read/" + comment.getPostId();
    }



}

