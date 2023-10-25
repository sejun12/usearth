package com.app.usearth.controller;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.service.RecyclingAgentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
        return "/recycling-agent/recycling-agentread";
    }

    // '/api/recycling-reads/recycling-read/{id}' 형태의 URL로 오는 GET 요청을 처리하는 메소드
    // '{id}'는 URL의 일부로 들어오는 게시글의 ID
//    @GetMapping("recycling-read/{id}")
//    // goToRecyclingRead() : 주어진 게시글 ID에 해당하는 게시글을 찾아 해당 게시글의 상세 페이지를 보여주는 데 사용
//    // '@PathVariable Long id' : URL에서 {id} 부분을 추출하여 Long 타입의 id 매개변수에 할당
//    // Model model : Spring의 Model 객체는 뷰(View)에 데이터를 전달하는 데 사용
//    // model 객체를 사용하여 컨트롤러에서 뷰로 데이터를 전달할 수 있음
//    public String goToRecyclingRead(@PathVariable Long id, Model model) {
//        // Optional : 값이 있을 수도 있고 없을 수도 있는 컨테이너 객체
//        // 즉, PostDTO 타입의 값이 있을 수도 있고 없을 수도 있다는 의미
//        // recyclingAgentService.selectByRecyclingRead(id) :
//        // 해당 ID에 해당하는 게시글 정보를 가져오는 서비스 메소드를 호출하고, 그 결과를 post 변수에 할당
//        Optional<PostDTO> post = recyclingAgentService.selectByRecyclingRead(id);
//        // post 객체가 값을 포함하고 있지 않다면(즉, 해당 ID의 게시글이 없다면) 아래의 코드 블록을 실행
//        if (!post.isPresent()) {
//            // 여기서 뷰이름은 보통 src/main/resources/templates 디렉토리 아래에 있는
//            // 해당 이름의 Thymeleaf 또는 JSP 페이지와 매핑
//            return "errorPage"; // 오류 페이지의 이름(뷰 이름)을 반환
//        }
//        // post 객체가 값을 포함하고 있다면, 그 값을 model 객체에 "post"라는 이름으로 추가
//        // 뷰에서 "post"라는 이름으로 해당 데이터에 액세스할 수 있게 됨
//        model.addAttribute("post", post.get());
//        // 게시글의 상세 정보를 보여주는 페이지의 이름(뷰 이름)을 반환
//        // 앞서 언급한 바와 같이 여기서의 뷰이름 역시 보통 src/main/resources/templates 디렉토리
//        // 아래에 있는 해당 이름의 Thymeleaf 또는 JSP 페이지와 매핑
//        return "/recycling-agent/recycling-agentread";
//    }


    @GetMapping("recycling-agentwrite")
    public String goToRecyclingWrite() {
        return "recycling-agent/recycling-agentwrite";
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

