package com.app.usearth.controller;


import com.app.usearth.domain.CommentVO;
import com.app.usearth.domain.FindPostCommentDTO;
import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.service.FreeService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/free-reads/api")
public class FreeAPI {
    private  final FreeService freeService;

    @ApiOperation(value = "자유게시판 정보 조회", notes = "자유게시판 정보를 조회할 수 있는 API")
    @ApiImplicitParam(
            name = "id",
            value = "게시글 번호",
            required = true,
            dataType = "long",
            paramType = "path",
            defaultValue = "None"
    )
    @GetMapping("free-list")
    public List<PostDTO> freeList(){

        return freeService.freeList();
    }
    @GetMapping("read/{id}")
    public Map<String ,Object>  freeBoardRead(@PathVariable("id") Long id){
        Optional<PostDTO> foundFreeRead= freeService.freeBoardRead(id);

        // 랜덤으로 재활용 게시판 글 반환
        List<PostDTO> randomRecyclePosts= freeService.findByRecycling(3L);
        // HashMap 객체 생성, key-value 데이터 저장
        Map<String , Object> result=new HashMap<>();
        result.put("mainPost", foundFreeRead.orElse(null)); // 상세보기
        result.put("randomRecyclePosts", randomRecyclePosts);// 랜덤 재활용 글

        // result 맵 반환
        return result;
    }

    @GetMapping("comment/{id}")
    public FindPostCommentDTO getComments(@PathVariable("id") Long id ){
        return freeService.getCommentInfo(id);
    }
    @PostMapping("setComment")
    public void setComment(@RequestBody CommentVO commentVO, HttpSession session){
        commentVO.setUserId(((UserDTO)session.getAttribute("user")).getId());
        freeService.addComment(commentVO);
    }
}
