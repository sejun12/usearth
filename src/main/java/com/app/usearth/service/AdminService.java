package com.app.usearth.service;

import com.app.usearth.domain.Pagination;
import com.app.usearth.domain.UserVO;

import java.util.List;

public interface AdminService {

    public List<UserVO> getResidentList();

    List<UserVO> getResidentListByPagination(Pagination pagination);

    public int getTotal();
    public <Optional>UserVO getUserById(Long id);
    public void modifyApproval(UserVO userVO);
}
