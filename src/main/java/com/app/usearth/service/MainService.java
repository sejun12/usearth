package com.app.usearth.service;

import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.PostVO;

import java.util.List;
import java.util.Optional;

public interface MainService {
    public List<PostVO> myRecycleList(Long id);
    public List<PostVO> myFreeList(Long id);
}
