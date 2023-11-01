package com.app.usearth.repository;

import com.app.usearth.domain.*;
import com.app.usearth.mapper.MyPageMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MyPageDAO {
    private final MyPageMapper myPageMapper;
    public void saveCar(ReserveCarVO reserveCarVO){
        myPageMapper.insertCar(reserveCarVO);
    }
    public List<ReserveCarVO>  searchCar(Long id){
        return myPageMapper.selectCar(id);
    }

    public List<ComplainDTO> myComplainList(Long id){
        return myPageMapper.selectComplain(id);
    }

    public List<PostVO> myRecycleList(Long id){
        return myPageMapper.selectRecycle(id);
    }

    public List<PostVO> myFreeList(Long id){
        return myPageMapper.selectFree(id);
    }
    public List<CommentDTO> myReply(Long id){
        return myPageMapper.selectReply(id);
    }
    public void addComplain(ComplainDTO complainDTO){
        myPageMapper.insertComplain(complainDTO);
    }
    public Long getName(String categoryName){
        return myPageMapper.selectName(categoryName);
    }

    public Long getUser(Long id){
        return  myPageMapper.selectUserId(id);
    }

    public void changeProfile(UserProfileVO userProfileVO){
        myPageMapper.updatePhoto(userProfileVO);
    }

    public Optional<ComplainDTO> detail(Long id){
        return myPageMapper.selectPostDetail(id);
    }

    public void removeComplainReply(Long id){
        myPageMapper.deleteComplainReply(id);
    }
    public Long searchComplainId(Long id){
      return  myPageMapper.selectId(id);
    }
    public void removeComplain(Long id){
        myPageMapper.deleteComplain(id);
    }
    public void removeFee(Long id){
        myPageMapper.deleteFee(id);
    }
    public void removeLike(Long id){
        myPageMapper.deleteLike(id);
    }
    public void removeComment(Long id){
        myPageMapper.deleteComment(id);
    }
    public void removePost(Long id){
        myPageMapper.deletePost(id);
    }
    public void removeVisit(Long id){
        myPageMapper.deleteVisit(id);
    }
    public void removeUser(Long id){
        myPageMapper.deleteUser(id);
    }

    public Long searchProfileId(Long id){
        return myPageMapper.selectProfileId(id);
    }

    public void removeProfile(Long id){
        myPageMapper.deleteProfile(id);
    }


    public List<ReserveCarDTO> visitBookingList(Pagination pagination,Long id){
        return  myPageMapper.selectVisit(pagination,id);
    }
    public  int getTotal(SearchVisitDTO searchVisitDTO,Long id){
        return   myPageMapper.selectTotal(searchVisitDTO,id);
    }

    public List<AdminVisitDTO>  selectSearch(SearchVisitDTO searchDTO,Pagination pagination,Long id){
     return myPageMapper.selectSearch(searchDTO,pagination,id);
    }


    public Optional<Long> searchUserId(UserVO userVO){
        return myPageMapper.selectHo(userVO);
    }

    public void adminBooking(ReserveCarDTO reserveCarDTO){
        myPageMapper.insertAdminBooking(reserveCarDTO);
    }


    public void removeBooking(Long id){
        myPageMapper.deleteBooking(id);
    }
}
