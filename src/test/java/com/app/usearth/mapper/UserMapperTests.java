package com.app.usearth.mapper;

import com.app.usearth.domain.UserDTO;
import com.app.usearth.domain.UserProfileVO;
import com.app.usearth.domain.UserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.stereotype.Repository;

@SpringBootTest
@Slf4j
public class UserMapperTests {
    @Autowired
    private UserMapper userMapper;

    @Test
    public void insertUserProfileTest(){
        UserDTO userDTO = new UserDTO();
        userDTO.setUserKakaoProfileUrl("sfbaergaqfdgvzsdv");

        userMapper.insertUserProfile(userDTO);
    }
    @Test
    public void insertUserTest(){
        UserDTO userDTO = new UserDTO();
        userDTO.setUserName("서경덕");
        userDTO.setUserKakaoEmail("myemail@email.com");
        userDTO.setUserKakaoProfileUrl("sfbaergaqfdgvzsdv");


        userMapper.insertUser(userDTO);
    }
}
