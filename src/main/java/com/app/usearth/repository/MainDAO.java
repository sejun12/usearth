package com.app.usearth.repository;

import com.app.usearth.domain.ComplainDTO;
import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.PostVO;
import com.app.usearth.mapper.MainMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MainDAO {
    private final MainMapper mainMapper;

    public List<PostVO> myRecycleList(Long id){
        return mainMapper.selectRecycle(id);
    }

    public List<PostVO> myFreeList(Long id){
        return mainMapper.selectFree(id);
    }

}
