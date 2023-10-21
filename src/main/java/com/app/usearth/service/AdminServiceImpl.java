package com.app.usearth.service;

import com.app.usearth.domain.Pagination;
import com.app.usearth.domain.UserVO;
import com.app.usearth.repository.AdminDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
@Slf4j
public class AdminServiceImpl implements AdminService {
    private final AdminDAO adminDAO;

    @Override
    public List<UserVO> getResidentList() {
        return adminDAO.getUserList();
    }

    @Override
    public List<UserVO> getResidentListByPagination(Pagination pagination) {
        return adminDAO.getUserListByPagination(pagination);
    }

    @Override
    public int getTotal() {
        return adminDAO.getTotal();
    }

    @Override
    public <Optional> UserVO getUserById(Long id) {
        return adminDAO.getUser(id);
    }

    @Override
    public void modifyApproval(UserVO userVO) {
        adminDAO.modifyStatus(userVO);
    }
}
