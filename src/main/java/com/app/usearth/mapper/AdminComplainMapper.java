package com.app.usearth.mapper;

import com.app.usearth.domain.AdminVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;
@Mapper
public interface AdminComplainMapper {
//    관리자 로그인
    public Optional<AdminVO> selectByLogin(AdminVO adminVO);

//    관리자 아이디 찾기
    public Optional<AdminVO> selectByEmail(AdminVO adminVO);
}
