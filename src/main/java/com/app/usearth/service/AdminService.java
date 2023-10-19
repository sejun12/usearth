package com.app.usearth.service;

import com.app.usearth.domain.UserVO;

import java.util.List;

public interface AdminService {

    public List<UserVO> getResidentList();
    public <Optional>UserVO getUserById(Long id);
    public void modifyApproval(UserVO userVO);
}
