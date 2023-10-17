package com.app.usearth.service;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.ComplainDTO;
import com.app.usearth.domain.PostVO;
import com.app.usearth.domain.ReserveCarVO;

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
}
