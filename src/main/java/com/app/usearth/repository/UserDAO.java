package com.app.usearth.repository;

import com.app.usearth.domain.UserDTO;
import com.app.usearth.domain.UserProfileVO;
import com.app.usearth.domain.UserVO;
import com.app.usearth.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
@Slf4j
public class UserDAO {
    private final UserMapper userMapper;
    public void saveUserProfile(UserDTO userDTO){userMapper.insertUserProfile(userDTO);}

    public void saveUser(UserDTO userDTO){userMapper.insertUser(userDTO);}

    //    회원 정보 조회
    public Optional<UserDTO> findByKakaoEmail(String userKakaoEmail){return userMapper.select(userKakaoEmail);}

    //    카카오 프사 수정
    public void updateKakaoProfileUrl(UserDTO userDTO){userMapper.updateKakaoProfileUrl(userDTO);}
}
