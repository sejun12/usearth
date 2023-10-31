package com.app.usearth.service;

import com.app.usearth.domain.*;

import java.util.List;
import java.util.Optional;

public interface MypageService {

    public void saveCar(ReserveCarVO reserveCarVO);

    public List<ReserveCarVO>  searchCar(Long id);

    public List<ComplainDTO> myComplainList(Long id);
    public List<PostVO> myRecycleList(Long id);
    public List<PostVO> myFreeList(Long id);
    public List<CommentDTO> myReply(Long id);
    public void addComplain(ComplainDTO complainDTO);
    public Long getName(String categoryName);

    public Long getUser(Long id);

    public void changeProfile(UserProfileVO userProfileVO);


    public Optional<ComplainDTO> detail(Long id);

    public void removeAll(Long id);

    public List<ReserveCarDTO> visitBookingList(Pagination pagination,Long id);

    public  int getTotal(SearchVisitDTO searchVisitDTO,Long id);
    public List<AdminVisitDTO> selectSearch(SearchVisitDTO searchDTO ,Pagination pagination,Long id);

    public void adminBooking(ReserveCarDTO reserveCarDTO);

    public Optional<Long> searchUserId(UserVO userVO);

    public void removeBooking(Long id);

}
