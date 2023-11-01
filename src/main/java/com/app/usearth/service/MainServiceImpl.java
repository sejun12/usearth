package com.app.usearth.service;

import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.PostVO;
import com.app.usearth.repository.MainDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class MainServiceImpl implements MainService{
    private final MainDAO mainDAO;

    @Override
    public List<PostDTO> mainRecycleList(Long id) {
        return mainDAO.mainRecycleList(id);
    }
    @Override
    public List<PostDTO> mainFreeList(Long id) {
        return mainDAO.mainFreeList(id);
    }
}
