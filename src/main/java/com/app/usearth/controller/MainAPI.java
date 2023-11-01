package com.app.usearth.controller;


import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.PostVO;
import com.app.usearth.service.MainService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/main-lists/api")
public class MainAPI {
    private final MainService mainService;

    @ApiOperation(value = "재활용 목록 정보" , notes = "재활용 목록 정보 조회 API")
    @ApiImplicitParam(
            name = "id",
            value="게시글 번호",
            required= true,
            dataType = "long",
            paramType = "path",
            defaultValue = "None"
    )
    @GetMapping("recylce/{id}")
    public List<PostDTO> recycleList(@PathVariable Long id){
        return mainService.mainRecycleList(id);
    }

}
