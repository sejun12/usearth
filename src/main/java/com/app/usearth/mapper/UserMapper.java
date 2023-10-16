package com.app.usearth.mapper;

import com.app.usearth.domain.UserDTO;
import com.app.usearth.domain.UserProfileVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface UserMapper {
//    로그인 및 회원가입
    public void insertUserProfile(UserDTO userDTO);

    public void insertUser(UserDTO userDTO);

//    회원 정보 조회
    public Optional<UserDTO> select(String userKakaoEmail);

//    카카오 프사 수정
    public void updateKakaoProfileUrl(UserDTO userDTO);
}
