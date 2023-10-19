package com.app.usearth.service;

import com.app.usearth.domain.*;
import com.app.usearth.repository.UserDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.time.DayOfWeek;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserDAO userDAO;

    @Override
    public void join(UserDTO userDTO) {
        Optional<UserDTO> foundUser = getUser(userDTO.getUserKakaoEmail());
//          1. 최초 로그인 검사
        if(foundUser.isEmpty()){
            userDAO.saveUserProfile(userDTO);
            userDAO.saveUser(userDTO);
        }else{ // 이메일 정보가 있을 경우
            UserDTO user = foundUser.get();
//          1-2 카카오회원일 경우 프사 검사
            if(user.getUserProfileName() == null){ // 전달 받은 프로필 사진 경로로 수정
//                전달받은 카카오 프사로 업데이트
                updateKakaoProfileUrl(user);
            }
        }
    }
//    회원 정보 조회
    @Override
    public Optional<UserDTO> getUser(String userKakaoEmail) { return userDAO.findByKakaoEmail(userKakaoEmail); }

//    카카오 프사 수정
    @Override
    public void updateKakaoProfileUrl(UserDTO userDTO) { userDAO.updateKakaoProfileUrl(userDTO); }

//    아파트 주소 검색
    public SearchAptDTO getSearchApt(Search search){
        SearchAptDTO searchAptDTO = new SearchAptDTO();
        searchAptDTO.setSearchApts(userDAO.findSearchApt(search));

        return searchAptDTO;
    }
//    아파트 주소로 아파트 ID 검색
    public Long getAptName(String apartmentAddress) { return userDAO.findByAptName(apartmentAddress); }

//    아파트 주소 입력
    public void updateAptAddress(UserDTO userDTO){userDAO.updateAptAddress(userDTO);}
}