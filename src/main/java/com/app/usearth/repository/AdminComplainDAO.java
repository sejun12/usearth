package com.app.usearth.repository;

import com.app.usearth.domain.*;
import com.app.usearth.mapper.AdminComplainMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
@RequiredArgsConstructor
public class AdminComplainDAO {
    private final AdminComplainMapper adminComplainMapper;
    //    관리자 로그인
    public Optional<AdminVO> findByLogin(AdminVO adminVO){return adminComplainMapper.selectByLogin(adminVO);}

    //    관리자 아이디 찾기
    public Optional<AdminVO> findByEmail(AdminVO adminVO){return adminComplainMapper.selectByEmail(adminVO);}

    //    아파트 아이디로 민원목록 불러오기
    public List<ComplainAdminDTO> findComplainByAptId(Pagination pagination, Long apartmentId, SearchComplain searchComplain){return adminComplainMapper.selectComplainByAptId(pagination, apartmentId, searchComplain);}

    //    아파트 민원 전체 조회
    public int findTotalByAptId(Long apartmentId, SearchComplain searchComplain){return adminComplainMapper.selectTotalByAptId(apartmentId, searchComplain);}

    //    민원 접수완료 수 조회
    public int findReceptionByAptId(Long apartmentId, SearchComplain searchComplain){return adminComplainMapper.selectReceptionByAptId(apartmentId, searchComplain);}

    //    민원 처리중 수 조회
    public int findProcessingByAptId(Long apartmentId, SearchComplain searchComplain){return adminComplainMapper.selectProcessingByAptId(apartmentId, searchComplain);}

    //    민원 처리완료 수 조회
    public int findCompleteByAptId(Long apartmentId, SearchComplain searchComplain){return adminComplainMapper.selectCompleteByAptId(apartmentId, searchComplain);}

    //    민원 정보 조회
    public Optional<ComplainAdminDTO> findComplainById(Long apartmentId, Long id){return adminComplainMapper.selectComplainById(apartmentId, id);}

    //    민원 카테고리 이름으로 해당 아이디 조회
    public Long findCategoryComplainIdByName(String categoryComplainName){return adminComplainMapper.selectCategoryComplainIdByName(categoryComplainName);}

    //    민원 상태 수정
    public void updateComplainStatus(ComplainVO complainVO){adminComplainMapper.updateComplainStatus(complainVO);}

    //    민원 답변 작성
    public void setComplainReply(ComplainReplyVO complainReplyVO){adminComplainMapper.insertComplainReply(complainReplyVO);}

    //    민원 답변 날짜 및 상태 수정
    public void updateComplainProcessingDate(ComplainVO complainVO){adminComplainMapper.updateComplainProcessingDate(complainVO);}
}
