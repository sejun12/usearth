package com.app.usearth.mapper;

import com.app.usearth.domain.UserVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminMapper {
//    입주민 리스트 조회
    public List<UserVO> selectUser();

//    입주민 ID로 조회
    public <Optional>UserVO select(Long id);

//    입주민 가입 승인하기
    public void updateStatus(UserVO userVO);
}
