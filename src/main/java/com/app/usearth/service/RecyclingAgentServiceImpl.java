package com.app.usearth.service;

import com.app.usearth.domain.PostDTO;
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
    public List<PostDTO> getByRecycling() {

        return recyclingAgentDAO.selectByRecycling();
    }

    @Override
    public List<PostDTO> getByRecyclingRead(Long postId) {

        return recyclingAgentDAO.updateByRecycling();
    }


}
