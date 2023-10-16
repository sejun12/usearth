package com.app.usearth.repository;

import com.app.usearth.domain.PostVO;
import com.app.usearth.mapper.RecyclingAgentMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class RecyclingAgentDAO {

    private final RecyclingAgentMapper recyclingAgentMapper;

    public List<PostVO> selectByRecycling() {

        return recyclingAgentMapper.selectByRecycling();
    }

}
