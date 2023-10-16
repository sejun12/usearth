package com.app.usearth.controller;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.ComplainDTO;
import com.app.usearth.domain.PostVO;
import com.app.usearth.repository.MyPageDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/lists/api/")
public class MypageAPI {
    private final MyPageDAO myPageDAO;

    @GetMapping("complain/{id}")
    public List<ComplainDTO> myComplainList(@PathVariable Long id){
        return myPageDAO.myComplainList(id);
    }
    @GetMapping("recyle/{id}")
    public List<PostVO> myRecycleList(@PathVariable Long id){
        return myPageDAO.myRecycleList(id);
    }
    @GetMapping("free/{id}")
    public List<PostVO> myFreeList(@PathVariable Long id){
        return myPageDAO.myFreeList(id);
    }
    @GetMapping("reply/{id}")
    public List<CommentDTO>myReply(@PathVariable Long id){return myPageDAO.myReply(id);

    }

}
