package com.app.usearth.repository;

import com.app.usearth.domain.AdminVO;
import com.app.usearth.mapper.AdminComplainMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
@RequiredArgsConstructor
public class AdminComplainDAO {
    private final AdminComplainMapper adminComplainMapper;
    //    관리자 로그인
    public Optional<AdminVO> findByLogin(AdminVO adminVO){return adminComplainMapper.selectByLogin(adminVO);}

    //    관리자 아이디 찾기
    public Optional<AdminVO> findByEmail(AdminVO adminVO){return adminComplainMapper.selectByEmail(adminVO);}
}
