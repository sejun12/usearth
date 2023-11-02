package com.app.usearth.service;

import com.app.usearth.domain.*;
import com.app.usearth.repository.MyPageDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
@Slf4j
public class MypageServiceImpl implements MypageService {
    private final MyPageDAO myPageDAO;
    @Override
    public void saveCar(ReserveCarVO reserveCarVO) {
        reserveCarVO.setApartmentId(myPageDAO.getUser(reserveCarVO.getUserId()));
        myPageDAO.saveCar(reserveCarVO);
    }

    @Override
    public List<ReserveCarVO> searchCar(Long id) {
        return myPageDAO.searchCar(id);
    }

    @Override
    public List<ComplainDTO> myComplainList(Long id) {
        return myPageDAO.myComplainList(id);
    }

    @Override
    public List<PostVO> myRecycleList(Long id) {
        return myPageDAO.myRecycleList(id);
    }

    @Override
    public List<PostVO> myFreeList(Long id) {
        return myPageDAO.myFreeList(id);
    }

    @Override
    public List<CommentDTO> myReply(Long id) {
        return myPageDAO.myReply(id);
    }

    @Override
    public void addComplain(ComplainDTO complainDTO) {
        Long foundCaId= myPageDAO.getName(complainDTO.getCategoryComplainName());
        complainDTO.setApartmentId(myPageDAO.getUser(complainDTO.getUserId()));
        complainDTO.setCategoryComplainId(foundCaId);
        myPageDAO.addComplain(complainDTO);
    }

    @Override
    public Long getName(String categoryName) {
        return myPageDAO.getName(categoryName);
    }

    @Override
    public Long getUser(Long id) {
        return myPageDAO.getUser(id);
    }

    @Override
    public void changeProfile(UserProfileVO userProfileVO) {
        myPageDAO.changeProfile(userProfileVO);
    }


    @Override
    public Optional<ComplainDTO> detail(Long id) {
        return myPageDAO.detail(id);
    }

    @Override
    public void removeAll(Long id) {
       List<Long> complainIds=myPageDAO.searchComplainId(id);
        Long profileId=myPageDAO.searchProfileId(id);
        if (complainIds != null && !complainIds.isEmpty()) { // complainId가 null이 아닌 경우 민원 답변이 있는경우
            for (Long complainId : complainIds) {
                myPageDAO.removeComplainReply(complainId);
            }
        }
            myPageDAO.removeComplain(id);
            myPageDAO.removeFee(id);
            myPageDAO.removeLike(id);
            myPageDAO.removeComment(id);
            myPageDAO.removePost(id);
            myPageDAO.removeVisit(id);
            myPageDAO.removeUser(id);
            myPageDAO.removeProfile(profileId);
        }

    @Override
    public List<ReserveCarDTO> visitBookingList(Pagination pagination,Long id) {
        return myPageDAO.visitBookingList(pagination,id);
    }

    @Override
    public int getTotal(SearchVisitDTO searchVisitDTO,Long id) {
        return myPageDAO.getTotal(searchVisitDTO,id);
    }

    @Override
    public List<AdminVisitDTO>  selectSearch(SearchVisitDTO searchDTO ,Pagination pagination,Long id) {
        return myPageDAO.selectSearch(searchDTO,pagination,id);
    }

    @Override
    public void adminBooking(ReserveCarDTO reserveCarDTO) {
            myPageDAO.adminBooking(reserveCarDTO);
    }

    @Override
    public Optional<Long> searchUserId(UserVO userVO) {
        return myPageDAO.searchUserId(userVO);
    }

    @Override
    public void removeBooking(Long id) {
        myPageDAO.removeBooking(id);
    }


}
