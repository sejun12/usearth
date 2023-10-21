package com.app.usearth.repository;

import com.app.usearth.domain.Pagination;
import com.app.usearth.domain.UserVO;
import com.app.usearth.mapper.AdminMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminDAO {
    private final AdminMapper adminMapper;

//    입주민 리스트 조회
    public List<UserVO> getUserListByPagination(Pagination pagination) {
        return adminMapper.selectUserByPagination(pagination);
    }
    public List<UserVO> getUserList() {
        return adminMapper.selectUser();
    }

//    입주민 전체 개수
    public int getTotal() { return adminMapper.selectTotal();}

//    입주민 ID로 조회
    public <Optional>UserVO getUser(Long id) { return adminMapper.select(id);}

//    입주민 가입 승인하기
    public void modifyStatus(UserVO userVO) {
        adminMapper.updateStatus(userVO);
    }
}
