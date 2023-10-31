package com.app.usearth.controller;

import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.PostVO;
import com.app.usearth.service.MainService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/main-reads/api")
public class MainAPI {
    private final MainService mainService;

    @ApiOperation(value = "회원의 재활용 게시판", notes = "회원 아이디 입력시 회원 재활용 게시판 API")
    @ApiImplicitParam(
            name = "id",
            value = "회원 번호",
            required = true,
            dataType = "long",
            paramType = "path",
            defaultValue = "None"
    )
    @GetMapping("recycle/{id}")
    public List<PostVO> myRecycleList(@PathVariable Long id) {
        return mainService.myRecycleList(id);
    }
    @ApiOperation(value = "회원의 자유 게시판", notes = "회원 아이디 입력시 회원 민원 API")
    @ApiImplicitParam(
            name = "id",
            value = "회원 번호",
            required = true,
            dataType = "long",
            paramType = "path",
            defaultValue = "None"
    )
    @GetMapping("free/{id}")
    public List<PostVO> myFreeList(@PathVariable Long id) {
        return mainService.myFreeList(id);
    }
}
