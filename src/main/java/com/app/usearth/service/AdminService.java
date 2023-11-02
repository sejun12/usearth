package com.app.usearth.service;

import com.app.usearth.domain.*;
import com.app.usearth.domain.UserDTO;
import org.apache.ibatis.annotations.Param;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

public interface AdminService {

    //    입주민 승인 PAGE ==> START
    public List<UserDTO> getResidentList();

    List<UserDTO> getResidentListByPagination(Pagination pagination, Long id);

    public int getTotal(UserDTO userDTO, Long id);

    public <Optional>UserDTO getUserById(Long id);

    public void modifyApproval(UserDTO userDTO);

    public List<UserDTO> selectSearch(UserDTO userDTO, Pagination pagination, Long id);

    //    공지사항 작성 PAGE ==> START
    public List<AnnouncementCategoryVO> extractCategory();

    public void insertAdminAnnouncement(AdminAnnouncementDTO adminAnnouncementDTO);

    //   관리자 공지사항 목록 조회
    public List<AdminAnnouncementDTO> getAnnouncement( Pagination pagination, Long id);

    //    공지사항 전체 개수
    public int getTotalAnnouncement(AdminAnnouncementDTO adminAnnouncementDTO, Long id);

    //    공지사항 검색 리스트
    public List<AdminAnnouncementDTO> getSearchedAnnouncement(AdminAnnouncementDTO adminAnnouncementDTO, Pagination pagination, Long id);


    //    자유게시판 PAGE ==> START
    //    게시판 카테고리 조회
    public List<PostCategoryVO> getPostCategory();

    //   관리자 자유게시판 목록 조회
    public List<PostDTO> getFreePost(@Param("pagination") Pagination pagination, Long id);

    //    자유게시판 전체 개수
    public int getTotalFreePost(@Param("postDTO") PostDTO postDTO, Long id);

    //    자유게시판 검색 리스트
    public List<PostDTO> getSearchedFreePost(@Param("postDTO") PostDTO postDTO, @Param("pagination") Pagination pagination, Long id);

    //     자유게시판 삭제하기
    public void removeFreePost(Long id);
    //    자유게시판 ID로 조회
    public <Optional> PostDTO getPostById(Long id);

    //    관리자 관리비 PAGE ==> START
    //    관리비 카테고리 년 조회
    public List<ImposingYearVO> getFeeYear();

    //    관리비 카테고리 월 조회
    public List<ImposingMonthVO> getFeeMonth();

    //    관리자 공지사항 등록
    public void addFeeList(MaintenanceFeeDTO maintenanceFeeDTO);

    //    관리비 동 조회
    public List<DongVO> getDong();

    //    관리비 검색 조회
    public List<MaintenanceFeeDTO> selectSearchedFee(@Param("maintenanceFeeDTO") MaintenanceFeeDTO maintenanceFeeDTO, Long id);

    //   관리자 관리비 목록 조회
    public List<MaintenanceFeeDTO> selectFee(@Param("pagination") Pagination pagination, Long id);

    //    관리비 전체 개수
    public int selectTotalFee(@Param("maintenanceFeeDTO") MaintenanceFeeDTO maintenanceFeeDTO, Long id);

    //    관리비 검색 리스트
    public List<MaintenanceFeeDTO> selectSearchedFeeList(@Param("maintenanceFeeDTO") MaintenanceFeeDTO maintenanceFeeDTO, @Param("pagination") Pagination pagination, Long id);

}

