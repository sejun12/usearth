package com.app.usearth.mapper;

import com.app.usearth.domain.Pagination;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.domain.UserDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminMapper {
//    입주민 리스트 조회
    public List<UserDTO> selectUserByPagination(@Param("pagination")Pagination pagination, Long id);

    public List<UserDTO> selectUser();

//    입주민 전체 개수
    public int selectTotal(@Param("userDTO") UserDTO userDTO, Long id);

//    입주민 ID로 조회
    public <Optional>UserDTO select(Long id);

//    입주민 가입 승인하기
    public void updateStatus(UserDTO userDTO);

//    입주민 검색 리스트
    public List<UserDTO> selectSearch(@Param("userDTO") UserDTO userDTO, @Param("pagination") Pagination pagination, Long id);
}
