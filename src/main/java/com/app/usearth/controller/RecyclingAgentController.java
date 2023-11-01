package com.app.usearth.controller;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.service.RecyclingAgentService;
import com.app.usearth.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/recycling-agent/*")
@RequiredArgsConstructor
@Slf4j
public class RecyclingAgentController {

    private final RecyclingAgentService recyclingAgentService;

    //  UserService를 사용하여 현재 로그인한 사용자의 정보를 가져옴
    @Autowired
    private UserService userService;

    @Autowired
    private RecyclingAgentService likeService;

    @GetMapping("recycling-agent")
    public String getByRecycling() {
        return "recycling-agent/recycling-agent";
    }

    @GetMapping("recycling-agentread/{id}")
    public String getByRecyclingRead(@PathVariable Long id, Model model) {
        Optional<PostDTO> foundPost = recyclingAgentService.getByRecyclingReadId(id);

        recyclingAgentService.updateViewCount(id);

        if (foundPost.isPresent()) model.addAttribute("post", foundPost.get());
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

        // 게시글 정보를 수정하는 서비스 메소드를 호출
        recyclingAgentService.updatePost(postDTO);
        Long modifyPostId = postDTO.getId();
        return new RedirectView("/recycling-agent/recycling-agentread/" + modifyPostId);
    }

    // 좋아요 수 증감
    @GetMapping("post/{postId}")
    public String viewPost(@PathVariable Long postId, Model model, HttpSession session) {
        // 해당 게시글의 ID를 사용하여 게시글의 상세 정보를 가져오는 getPostById 메서드를 호출 후 결과를 post 변수에 저장
        PostDTO post = recyclingAgentService.getPostById(postId);

        // HttpSession에서 현재 로그인한 사용자의 정보를 가져옴.
        UserDTO user = (UserDTO) session.getAttribute("user");

        // 사용자의 ID와 게시글의 ID를 사용하여 해당 사용자가 게시글에 좋아요를 눌렀는지 확인
        boolean userLiked = false;
        // 로그인한 사용자가 있을 때만 (즉, user가 null이 아닐 때만) 좋아요를 체크, userLiked라는 변수에 결과 저장
        if (user != null) { // 사용자 정보가 있을 때만 좋아요 체크를 진행
            userLiked = recyclingAgentService.userLiked(user.getId(), postId);
        }

        // 뷰에 데이터를 전달하기 위해 Model 객체에 속성을 추가
        model.addAttribute("post", post);
        model.addAttribute("user", user);
        model.addAttribute("userLiked", userLiked); // 좋아요 정보도 추가

        // "postView"라는 이름의 뷰를 반환
        return "recycling-agent/recycling-agentread/";
        //  "postView" 페이지에서 userLiked 값을 사용하여 사용자가 게시글에 좋아요를 눌렀는지 여부를 표시
    }

}

