package com.app.usearth.controller;

import com.app.usearth.domain.*;
import com.app.usearth.service.MypageService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/lists/api/")
@Slf4j
public class MypageAPI {
    private final MypageService mypageService;
    @ApiOperation(value = "회원의 민원 접수", notes = "회원 아이디 입력시 회원 민원 API")
    @ApiImplicitParam(
            name="id",
            value="회원 번호",
            required = true,
            dataType = "long",
            paramType = "path",
            defaultValue = "None"
    )
    @GetMapping("complain/{id}")
    public List<ComplainDTO> myComplainList(@PathVariable Long id){
        return mypageService.myComplainList(id);
    }
    @ApiOperation(value = "회원의 재활용 게시판", notes = "회원 아이디 입력시 회원 재활용 게시판 API")
    @ApiImplicitParam(
            name="id",
            value="회원 번호",
            required = true,
            dataType = "long",
            paramType = "path",
            defaultValue = "None"
    )
    @GetMapping("recyle/{id}")
    public List<PostVO> myRecycleList(@PathVariable Long id){
        return mypageService.myRecycleList(id);
    }
    @ApiOperation(value = "회원의 자유 게시판", notes = "회원 아이디 입력시 회원 민원 API")
    @ApiImplicitParam(
            name="id",
            value="회원 번호",
            required = true,
            dataType = "long",
            paramType = "path",
            defaultValue = "None"
    )
    @GetMapping("free/{id}")
    public List<PostVO> myFreeList(@PathVariable Long id){
        return mypageService.myFreeList(id);
    }
    @ApiOperation(value = "회원의 댓글 리스트", notes = "회원 아이디 입력시 회원 댓글 API")
    @ApiImplicitParam(
            name="id",
            value="회원 번호",
            required = true,
            dataType = "long",
            paramType = "path",
            defaultValue = "None"
    )
    @GetMapping("reply/{id}")
    public List<CommentDTO>myReply(@PathVariable Long id){return mypageService.myReply(id);}
    @ApiOperation(value = "회원의 방문 차량 등록 리스트", notes = "회원 아이디 입력시 회원 방문 차량 리스트 API")
    @ApiImplicitParam(
            name="id",
            value="회원 번호",
            required = true,
            dataType = "long",
            paramType = "path",
            defaultValue = "None"
    )

    @GetMapping("reserve/{id}")
    public List<ReserveCarVO> myReserveCar(@PathVariable Long id){
          return mypageService.searchCar(id);
        }
    @ApiOperation(value = "회원의 민원 접수 상세 보가", notes = "회원 아이디 입력시 회원 민원 접수 상세 보기 API")
    @ApiImplicitParam(
            name="id",
            value="회원 번호",
            required = true,
            dataType = "long",
            paramType = "path",
            defaultValue = "None"
    )

   @GetMapping("detail/{id}")
   public Optional<ComplainDTO> detailComplain(@PathVariable Long id){
        return mypageService.detail(id);
   }

   @GetMapping("visit/{id}")
    public List<ReserveCarDTO> visitList(Pagination pagination,@PathVariable Long id){
       pagination.setTotal(mypageService.getTotal(id));
       pagination.progress();
        return mypageService.visitBookingList(pagination,id);
   }

    @GetMapping("results/search/{id}")
    public List<AdminVisitDTO> getResult(@PathVariable Long id,SearchVisitDTO searchDTO, Pagination pagination)  {
        pagination.setTotal(mypageService.getTotal(id));
        pagination.progress();
        return  mypageService.selectSearch(searchDTO,pagination,id);
    }
}


