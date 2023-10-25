package com.app.usearth.repository;

import com.app.usearth.domain.Pagination;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.mapper.AdminMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminDAO {
    private final AdminMapper adminMapper;

//    입주민 리스트 조회
    public List<UserDTO> getUserListByPagination(Pagination pagination, Long id) {
        return adminMapper.selectUserByPagination(pagination, id);
    }
    public List<UserDTO> getUserList() {
        return adminMapper.selectUser();
    }

//    입주민 전체 개수
    public int getTotal(UserDTO userDTO, Long id) { return adminMapper.selectTotal(userDTO, id);}

//    입주민 ID로 조회
    public <Optional>UserDTO getUser(Long id) { return adminMapper.select(id);}

//    입주민 가입 승인하기
    public void modifyStatus(UserDTO userDTO) {
        adminMapper.updateStatus(userDTO);
    }

//    입주민 검색 리스트
    public List<UserDTO> selectSearch(UserDTO userDTO, Pagination pagination, Long id){
        return adminMapper.selectSearch(userDTO, pagination, id);
    }
}
