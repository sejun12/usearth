package com.app.usearth.service;

import com.app.usearth.domain.PostVO;
import com.app.usearth.repository.RecyclingAgentDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class RecyclingAgentServiceImpl implements RecyclingAgentService {

    private final RecyclingAgentDAO recyclingAgentDAO;

    @Override
    public List<PostVO> getByRecycling() {

        return recyclingAgentDAO.selectByRecycling();
    }

}
