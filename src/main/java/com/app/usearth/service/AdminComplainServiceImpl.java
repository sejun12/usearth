package com.app.usearth.service;

import com.app.usearth.domain.*;
import com.app.usearth.repository.AdminComplainDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
@Slf4j
public class AdminComplainServiceImpl implements AdminComplainService {
    private final AdminComplainDAO adminComplainDAO;
    @Override
    public Optional<AdminVO> login(AdminVO adminVO) { return adminComplainDAO.findByLogin(adminVO); }

    @Override
    public Optional<AdminVO> getByIdentification(AdminVO adminVO) {return adminComplainDAO.findByEmail(adminVO);}

//    아파트 아이디로 민원목록 불러오기
    @Override
    public List<ComplainAdminDTO> getComplainByAptId(Pagination pagination, Long apartmentId, SearchComplain searchComplain) {return adminComplainDAO.findComplainByAptId(pagination, apartmentId, searchComplain);}

//    아파트 민원 전체 조회
    @Override
    public int getTotalByAptId(Long apartmentId, SearchComplain searchComplain){return adminComplainDAO.findTotalByAptId(apartmentId, searchComplain);}

    @Override
    public int getReceptionByAptId(Long apartmentId, SearchComplain searchComplain) {
        return adminComplainDAO.findReceptionByAptId(apartmentId, searchComplain);
    }

    @Override
    public int getProcessingByAptId(Long apartmentId, SearchComplain searchComplain) {
        return adminComplainDAO.findProcessingByAptId(apartmentId, searchComplain);
    }

    @Override
    public int getCompleteByAptId(Long apartmentId, SearchComplain searchComplain) {
        return adminComplainDAO.findCompleteByAptId(apartmentId, searchComplain);
    }

    @Override
    public Optional<ComplainAdminDTO> getComplainById(Long apartmentId, Long id) {
        return adminComplainDAO.findComplainById(apartmentId, id);
    }
    @Override
    public SearchComplainDTO getSearch(Pagination pagination, Long apartmentId, SearchComplain searchComplain){
        SearchComplainDTO searchComplainDTO = new SearchComplainDTO();
        searchComplainDTO.setComplainAdmins(adminComplainDAO.findComplainByAptId(pagination, apartmentId, searchComplain));
        searchComplainDTO.setReceptionCount(adminComplainDAO.findReceptionByAptId(apartmentId, searchComplain));
        searchComplainDTO.setProcessingCount(adminComplainDAO.findProcessingByAptId(apartmentId, searchComplain));
        searchComplainDTO.setCompleteCount(adminComplainDAO.findCompleteByAptId(apartmentId, searchComplain));
        searchComplainDTO.setSearchTotalCount(adminComplainDAO.findTotalByAptId(apartmentId, searchComplain));
        return searchComplainDTO;
    }

    @Override
    public void modifyComplainStatus(ComplainVO complainVO) {
        adminComplainDAO.updateComplainStatus(complainVO);
    }
}
