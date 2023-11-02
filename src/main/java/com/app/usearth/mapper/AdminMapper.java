package com.app.usearth.mapper;

import com.app.usearth.domain.*;
import com.app.usearth.domain.UserDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface AdminMapper {
    //    입주민 승인 PAGE ==> START
    //    입주민 리스트 조회
    public List<UserDTO> selectUserByPagination(@Param("pagination") Pagination pagination, Long id);

    public List<UserDTO> selectUser();

    //    입주민 전체 개수
    public int selectTotal(@Param("userDTO") UserDTO userDTO, Long id);

    //    입주민 ID로 조회
    public <Optional> UserDTO select(Long id);

    //    입주민 가입 승인하기
    public void updateStatus(UserDTO userDTO);

    //    입주민 검색 리스트
    public List<UserDTO> selectSearch(@Param("userDTO") UserDTO userDTO, @Param("pagination") Pagination pagination, Long id);

    //    공지사항 작성 PAGE ==> START
    //    공지사항 카테고리 조회
    public List<AnnouncementCategoryVO> selectCategory();

    //    관리자 공지사항 등록
    public void insertAdminNotice(AdminAnnouncementDTO adminAnnouncementDTO);

    //   관리자 공지사항 목록 조회
    public List<AdminAnnouncementDTO> selectAnnouncement(@Param("pagination") Pagination pagination, Long id);

    //    공지사항 전체 개수
    public int selectTotalAnnouncement(@Param("adminAnnouncementDTO") AdminAnnouncementDTO adminAnnouncementDTO, Long id);

    //    공지사항 검색 리스트
    public List<AdminAnnouncementDTO> selectSearchedAnnouncement(@Param("adminAnnouncementDTO") AdminAnnouncementDTO adminAnnouncementDTO, @Param("pagination") Pagination pagination, Long id);

    //    자유게시판 PAGE ==> START
    //    게시판 카테고리 조회
    public List<PostCategoryVO> selectPostCategory();

    //   관리자 자유게시판 목록 조회
    public List<PostDTO> selectFreePost(@Param("pagination") Pagination pagination, Long id);

    //    자유게시판 전체 개수
    public int selectTotalFreePost(@Param("postDTO") PostDTO postDTO, Long id);

    //    자유게시판 검색 리스트
    public List<PostDTO> selectSearchedFreePost(@Param("postDTO") PostDTO postDTO, @Param("pagination") Pagination pagination, Long id);

    //     자유게시판 삭제하기
    public void deleteFreePost(Long id);
    //    자유게시판 ID로 조회
    public <Optional> PostDTO selectPostById(Long id);

    //    관리자 관리비 PAGE ==> START
    //    관리비 카테고리 년 조회
    public List<ImposingYearVO> selectFeeYear();

    //    관리비 카테고리 월 조회
    public List<ImposingMonthVO> selectFeeMonth();

    //    관리자 관리비 등록
    public void insertFeeList(MaintenanceFeeDTO maintenanceFeeDTO);

    //    관리비 동 조회
    public List<DongVO> selectDong();

    //    관리비 검색 조회
    public List<MaintenanceFeeDTO> selectSearchedFee(@Param("maintenanceFeeDTO") MaintenanceFeeDTO maintenanceFeeDTO, Long id);

    //    관리비 공개 상테 업데이트
    public void updateFeeStatus(MaintenanceFeeDTO maintenanceFeeDTO);

    //   관리자 관리비 목록 조회
    public List<MaintenanceFeeDTO> selectFee(@Param("pagination") Pagination pagination, Long id);

    //    관리비 전체 개수
    public int selectTotalFee(@Param("maintenanceFeeDTO") MaintenanceFeeDTO maintenanceFeeDTO, Long id);

    //    관리비 검색 리스트
    public List<MaintenanceFeeDTO> selectSearchedFeeList(@Param("maintenanceFeeDTO") MaintenanceFeeDTO maintenanceFeeDTO, @Param("pagination") Pagination pagination, Long id);

}
