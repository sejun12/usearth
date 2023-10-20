package com.app.usearth.service;

import com.app.usearth.domain.AdminVO;
import com.app.usearth.repository.AdminComplainDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
@Slf4j
public class AdminComplainServiceImpl implements AdminComplainService {
    private final AdminComplainDAO adminComplainDAO;
    @Override
    public Optional<AdminVO> login(AdminVO adminVO) { return adminComplainDAO.findByLogin(adminVO); }

    @Override
    public Optional<AdminVO> getByIdentification(AdminVO adminVO) {return adminComplainDAO.findByEmail(adminVO);}
}
