package com.app.usearth.service;

import com.app.usearth.domain.AdminVO;

import java.util.Optional;

public interface AdminComplainService {
    //    관리자 로그인
    public Optional<AdminVO> login(AdminVO adminVO);

    //    관리자 아이디 검사
    public Optional<AdminVO> getByIdentification(AdminVO adminVO);
}
