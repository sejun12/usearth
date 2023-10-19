package com.app.usearth.repository;

import com.app.usearth.domain.*;
import com.app.usearth.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
@Slf4j
public class UserDAO {
    private final UserMapper userMapper;
//    회원가입 유저 프로필 정보
    public void saveUserProfile(UserDTO userDTO){userMapper.insertUserProfile(userDTO);}

//    회원가입 유저 정보
    public void saveUser(UserDTO userDTO){userMapper.insertUser(userDTO);}

//    회원 정보 조회
    public Optional<UserDTO> findByKakaoEmail(String userKakaoEmail){return userMapper.select(userKakaoEmail);}

//    카카오 프사 수정
    public void updateKakaoProfileUrl(UserDTO userDTO){userMapper.updateKakaoProfileUrl(userDTO);}

//    아파트 주소 검색
    public List<ApartmentVO> findSearchApt(Search search){return userMapper.selectSearchApt(search);}

//    아파트 주소로 아파트 ID 검색
    public Long findByAptName(String apartmentAddress){ return userMapper.selectAptId(apartmentAddress); }

//    아파트 주소 입력
    public void updateAptAddress(UserDTO userDTO){userMapper.updateAptAddress(userDTO);}
}
