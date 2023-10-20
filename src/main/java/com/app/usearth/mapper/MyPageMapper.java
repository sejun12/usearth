package com.app.usearth.mapper;

import com.app.usearth.domain.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface MyPageMapper {
    //차량 예약 등록
    public void insertCar(ReserveCarVO reserveCarVO);
    //차량 예약 리스트
    public List<ReserveCarVO> selectCar(Long id);

    //민원  LIST
    public List<ComplainDTO> selectComplain(Long id);

    //재활용 LIST
    public List<PostVO> selectRecycle(Long id);
    //자유 LIST
    public List<PostVO> selectFree(Long id);

    //댓글 LIST
    public List<CommentDTO> selectReply(Long id);

    //민원 넣기
    public void insertComplain(ComplainDTO complainDTO);

    //카테고리 아이디 찾기
    public Long selectName(String categoryName);

    //아파트 아이디 찾기
    public Long selectUserId(Long id);

    //프로필 이지지 수정
    public void updatePhoto(UserProfileVO userProfileVO);

    //게시글 상세보기
    public Optional<ComplainDTO> selectPostDetail(Long id);

    //회원 탈퇴(다 삭제 !!)
    public void deleteComplain(Long id);
    public void deleteFee(Long id);
    public void deleteLike(Long id);
    public void deleteComment(Long id);
    public void deletePost(Long id);
    public void deleteVisit(Long id);
    public void deleteUser(Long id);

    //관리자 방문 차량 예약 리스트
    public List<ReserveCarDTO> selectVisit(@Param("pagination")Pagination pagination);

    //방문 차량 전체 개수
    public  int selectTotal();

}
