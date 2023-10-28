package com.app.usearth.mapper;

import com.app.usearth.domain.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;
@Mapper
public interface AdminComplainMapper {
//    관리자 로그인
    public Optional<AdminVO> selectByLogin(AdminVO adminVO);

//    관리자 아이디 찾기
    public Optional<AdminVO> selectByEmail(AdminVO adminVO);

//    아파트 아이디로 민원목록 불러오기
    public List<ComplainAdminDTO> selectComplainByAptId(@Param("pagination")Pagination pagination, Long apartmentId, @Param("searchComplain") SearchComplain searchComplain);

//    아파트 민원 전체 수 조회
    public int selectTotalByAptId(Long apartmentId, @Param("searchComplain") SearchComplain searchComplain);

//    민원 접수완료 수 조회
    public int selectReceptionByAptId(Long apartmentId, @Param("searchComplain") SearchComplain searchComplain);

//    민원 처리중 수 조회
    public int selectProcessingByAptId(Long apartmentId, @Param("searchComplain") SearchComplain searchComplain);

//    민원 처리완료 수 조회
    public int selectCompleteByAptId(Long apartmentId, @Param("searchComplain") SearchComplain searchComplain);

//    민원 정보 조회
    public Optional<ComplainAdminDTO> selectComplainById(Long apartmentId, Long id);

//    민원 카테고리 이름으로 해당 아이디 조회
    public Long selectCategoryComplainIdByName(String categoryComplainName);

//    민원 상태 수정
    public void updateComplainStatus(ComplainVO complainVO);

//    민원 답변 작성
    public void insertComplainReply(ComplainReplyVO complainReplyVO);

//    민원 답변 날짜 및 상태 수정
    public void updateComplainProcessingDate(ComplainVO complainVO);
}
