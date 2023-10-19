package com.app.usearth.mapper;

import com.app.usearth.domain.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
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

//    아파트 주소 검색
    public List<ApartmentVO> selectSearchApt(Search search);

//    아파트 주소로 아파트 ID 검색
    public Long selectAptId(String apartmentAddress);
//    아파트 주소 입력
    public void updateAptAddress(UserDTO userDTO);
}
