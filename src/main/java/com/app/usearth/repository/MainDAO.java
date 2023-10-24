package com.app.usearth.repository;

import com.app.usearth.domain.PostDTO;
import com.app.usearth.mapper.MainMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MainDAO {
    private final MainMapper mainMapper;

    public List<PostDTO> selectByFreeBoard(){
        return mainMapper.selectByFreeBoard();
    }
    public List<PostDTO> updateByFreeBoard(){
        return mainMapper.updateByFreeBoard();
    }
}
