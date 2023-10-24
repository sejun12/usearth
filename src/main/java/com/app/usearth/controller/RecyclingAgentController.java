package com.app.usearth.controller;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;
import com.app.usearth.service.RecyclingAgentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/recycling-agent/*")
@RequiredArgsConstructor
@Slf4j
public class RecyclingAgentController {

    private final RecyclingAgentService recyclingAgentService;

    //    '/recycling-agent/recycling-list' 경로에 GET 요청이 오면 해당 메소드를 실행하도록 지정
    @RequestMapping(value = "recycling-list")
    @ResponseBody
    public List<PostDTO> getByRecycling() {
//      recyclingAgentService의 getByRecycling 메소드를 호출하고 그 결과를 반환
        return recyclingAgentService.getByRecycling();
    }

    @GetMapping("recycling-agent")
    public void showRecycling() {;}

    @RequestMapping(value = "recycling-read/{id}")
    @ResponseBody
    public Optional<PostDTO> getByRecyclingRead(@PathVariable("id") Long postId) {
        return recyclingAgentService.selectByRecyclingRead(postId);
    }


    @GetMapping("recycling-agentread/{id}")
    public String showRecyclingRead(@PathVariable Long id, Model model) {
        // 'id' 변수에는 URL에서 추출한 글의 ID가 할당
        // 이 ID를 사용하여 해당 글을 DB에서 가져옴
//        즉, post라는 Optional에 결과를 저장
        Optional<PostDTO> post = recyclingAgentService.selectByRecyclingRead(id);

        // 글을 DB에서 가져오지 못한 경우에 대한 처리
        if (!post.isPresent()) {
            return "errorPage"; // 에러 페이지의 뷰 이름
        }

//      post.get()를 사용하여 Optional에 저장된 게시글 (PostDTO 객체)를 가져와서 모델에 "post"라는 이름으로 추가
        model.addAttribute("post", post.get());

        return "/recycling-agent/recycling-agentread";
    }


    @GetMapping("recycling-agentwrite")
    public String goToRecyclingWrite(){
//      goToRecyclingWrite()는  "recycling-agent/recycling-agentwrite"라는 뷰 이름을 반환
        return "recycling-agent/recycling-agentwrite";
    }


//    댓글 관련
//    게시글의 ID를 이용하여 댓글목록을 조회하고 새로운 댓글을 추가
//    특정 게시글에 대한 댓글 목록 반환
    @GetMapping("/post/{postId}")
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



    // 새 댓글 추가
//    @PostMapping("/addComment")
//    public ResponseEntity<String> addComment(@RequestBody CommentDTO comment) {
//        try {
//            // addComment 메소드를 호출하여 comment 객체에 담긴 댓글 정보를 DB에 추가
//            recyclingAgentService.addComment(comment);
//            // 댓글 추가 성공 시 200 OK 응답 반환
//            return ResponseEntity.ok("댓글이 성공적으로 추가되었습니다.");
//        } catch (Exception e) {
//            // 댓글 추가 실패 시 500 Internal Server Error 응답 반환
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("댓글 추가에 실패했습니다.");
//        }
//    }


}

