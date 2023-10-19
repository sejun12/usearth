package com.app.usearth.service;

import com.app.usearth.domain.*;
import com.app.usearth.repository.UserDAO;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.Optional;

public interface UserService {
//    회원가입
    public void join(UserDTO userDTO);

//    회원 정보 조회
    public Optional<UserDTO> getUser(String userKakaoEmail);

//    카카오 프사 수정
    public void updateKakaoProfileUrl(UserDTO userDTO);

//    아파트 주소 검색
    public SearchAptDTO getSearchApt(Search search);

//    아파트 주소로 아파트 ID 검색
    public Long getAptName(String apartmentAddress);

//    아파트 주소 입력
    public void updateAptAddress(UserDTO userDTO);
}
