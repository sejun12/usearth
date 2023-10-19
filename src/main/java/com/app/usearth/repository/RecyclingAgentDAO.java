package com.app.usearth.repository;

import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.PostVO;
import com.app.usearth.mapper.RecyclingAgentMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class RecyclingAgentDAO {

    private final RecyclingAgentMapper recyclingAgentMapper;

    public List<PostDTO> selectByRecycling() {

        return recyclingAgentMapper.selectByRecycling();
    }

    public List<PostDTO> updateByRecycling() {
        return recyclingAgentMapper.updateByRecycling();
    }
}
