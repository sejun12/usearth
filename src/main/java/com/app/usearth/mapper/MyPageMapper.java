package com.app.usearth.mapper;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.ComplainDTO;
import com.app.usearth.domain.PostVO;
import com.app.usearth.domain.ReserveCarVO;
import org.apache.ibatis.annotations.Mapper;

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

    //아파트 아이 찾기
    public Long selectUserId(Long id);
}
