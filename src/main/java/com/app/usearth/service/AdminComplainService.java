package com.app.usearth.service;

import com.app.usearth.domain.*;

import java.util.List;
import java.util.Optional;

public interface AdminComplainService {
//    관리자 로그인
    public Optional<AdminVO> login(AdminVO adminVO);

//    관리자 아이디 검사
    public Optional<AdminVO> getByIdentification(AdminVO adminVO);

//    아파트 아이디로 민원목록 불러오기
    public List<ComplainAdminDTO> getComplainByAptId(Pagination pagination, Long apartmentId, SearchComplain searchComplain);

//    아파트 민원 전체 조회
    public int getTotalByAptId(Long apartmentId, SearchComplain searchComplain);

//    민원 접수완료 수 조회
    public int getReceptionByAptId(Long apartmentId, SearchComplain searchComplain);

//    민원 처리중 수 조회
    public int getProcessingByAptId(Long apartmentId, SearchComplain searchComplain);

//    민원 처리완료 수 조회
    public int getCompleteByAptId(Long apartmentId, SearchComplain searchComplain);

//    민원 정보 조회
    public Optional<ComplainAdminDTO> getComplainById(Long apartmentId, Long id);

//    검색 결과 가져오기
    public SearchComplainDTO getSearch(Pagination pagination, Long apartmentId, SearchComplain searchComplain);

//    민원 상태 수정
    public void modifyComplainStatus(ComplainVO complainVO);

//    민원 답변 작성
    public void writeComplainReply(ComplainReplyDTO complainReplyDTO);
}
