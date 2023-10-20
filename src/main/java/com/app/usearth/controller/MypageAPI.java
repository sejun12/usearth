package com.app.usearth.controller;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.ComplainDTO;
import com.app.usearth.domain.PostVO;
import com.app.usearth.domain.ReserveCarVO;
import com.app.usearth.service.MypageService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/lists/api/")
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

//   @GetMapping("visit")
//    public List<ReserveCarDTO> visitList(Pagination pagination){
//        return mypageService.visitBookingList(pagination);
//   }

}
