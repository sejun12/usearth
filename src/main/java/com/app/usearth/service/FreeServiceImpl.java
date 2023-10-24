package com.app.usearth.service;

import com.app.usearth.domain.*;
import com.app.usearth.mapper.FreeMapper;
import com.app.usearth.repository.FreeDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
@Slf4j
public class FreeServiceImpl implements FreeService{
    private final FreeDAO freeDAO;

    @Override
    public List<PostDTO> FreeList(Long id){return freeDAO.FreeList(id);
    }
}
