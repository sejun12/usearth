package com.app.usearth.service;

import com.app.usearth.domain.UserDTO;

import java.util.Optional;

public interface UserService {
//    회원가입
    public void join(UserDTO userDTO);

//    회원 정보 조회
    public Optional<UserDTO> getUser(String userKakaoEmail);

//    카카오 프사 수정
    public void updateKakaoProfileUrl(UserDTO userDTO);
}
