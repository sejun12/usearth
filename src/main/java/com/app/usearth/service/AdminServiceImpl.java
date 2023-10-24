package com.app.usearth.service;

import com.app.usearth.domain.Pagination;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.domain.UserDTO;
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
    public List<UserDTO> getResidentList() {
        return adminDAO.getUserList();
    }

    @Override
    public List<UserDTO> getResidentListByPagination(Pagination pagination, Long id) {
        return adminDAO.getUserListByPagination(pagination, id);
    }

    @Override
    public int getTotal(UserDTO userDTO, Long id) {
        return adminDAO.getTotal(userDTO, id);
    }

    @Override
    public <Optional> UserDTO getUserById(Long id) {
        return adminDAO.getUser(id);
    }

    @Override
    public void modifyApproval(UserDTO userDTO) {
        adminDAO.modifyStatus(userDTO);
    }

    @Override
    public List<UserDTO> selectSearch(UserDTO userDTO, Pagination pagination, Long id) {
        return adminDAO.selectSearch(userDTO, pagination, id);
    }

}
