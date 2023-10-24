package com.app.usearth.repository;


import com.app.usearth.domain.PostDTO;
import com.app.usearth.mapper.FreeMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class FreeDAO {
    private  final FreeMapper freeMapper;



    public List<PostDTO> FreeList(Long id){return freeMapper.selectFree(id);}
}
