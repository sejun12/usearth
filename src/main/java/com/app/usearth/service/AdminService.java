package com.app.usearth.service;

import com.app.usearth.domain.Pagination;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.domain.UserDTO;

import java.util.List;

public interface AdminService {

    public List<UserDTO> getResidentList();

    List<UserDTO> getResidentListByPagination(Pagination pagination, Long id);

    public int getTotal(UserDTO userDTO, Long id);
    public <Optional>UserDTO getUserById(Long id);
    public void modifyApproval(UserDTO userDTO);

    public List<UserDTO> selectSearch(UserDTO userDTO, Pagination pagination, Long id);
}
