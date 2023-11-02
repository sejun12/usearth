package com.app.usearth.repository;

import com.app.usearth.domain.*;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.mapper.AdminMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class AdminDAO {
    private final AdminMapper adminMapper;
    //    입주민 승인 PAGE ==> START
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

    //    공지사항 작성 PAGE ==> START
//    공지사항 카테고리 조회
    public List<AnnouncementCategoryVO> getCategory(){
        return adminMapper.selectCategory();
    }

    //    관리자 공지사항 등록
    public void insertAdminNotice(AdminAnnouncementDTO adminAnnouncementDTO){
        adminMapper.insertAdminNotice(adminAnnouncementDTO);
    }

    //   관리자 공지사항 목록 조회
    public List<AdminAnnouncementDTO> getAnnouncement( Pagination pagination, Long id){
        return adminMapper.selectAnnouncement(pagination, id);
    }

    //    공지사항 전체 개수
    public int getTotalAnnouncement(AdminAnnouncementDTO adminAnnouncementDTO, Long id){
        return adminMapper.selectTotalAnnouncement(adminAnnouncementDTO, id);
    }

    //    공지사항 검색 리스트
    public List<AdminAnnouncementDTO> getSearchedAnnouncement(AdminAnnouncementDTO adminAnnouncementDTO, Pagination pagination, Long id){
        return adminMapper.selectSearchedAnnouncement(adminAnnouncementDTO, pagination, id);
    }

    //    자유게시판 PAGE ==> START
    //    게시판 카테고리 조회
    public List<PostCategoryVO> selectPostCategory(){
        return adminMapper.selectPostCategory();
    }

    //   관리자 자유게시판 목록 조회
    public List<PostDTO> selectFreePost(@Param("pagination") Pagination pagination, Long id){
        return adminMapper.selectFreePost(pagination, id);
    }

    //    자유게시판 전체 개수
    public int selectTotalFreePost(@Param("postDTO") PostDTO postDTO, Long id){
        return adminMapper.selectTotalFreePost(postDTO, id);
    }

    //    자유게시판 검색 리스트
    public List<PostDTO> selectSearchedFreePost(@Param("postDTO") PostDTO postDTO, @Param("pagination") Pagination pagination, Long id){
        return adminMapper.selectSearchedFreePost(postDTO, pagination, id);
    }

    //     자유게시판 삭제하기
    public void deleteFreePost(Long id){
        adminMapper.deleteFreePost(id);
    }
    //    자유게시판 ID로 조회
    public <Optional> PostDTO selectPostById(Long id){
        return adminMapper.selectPostById(id);
    }

    //    관리자 관리비 PAGE ==> START
    //    관리비 카테고리 년 조회
    public List<ImposingYearVO> selectFeeYear(){
        return adminMapper.selectFeeYear();
    }

    //    관리비 카테고리 월 조회
    public List<ImposingMonthVO> selectFeeMonth(){
        return adminMapper.selectFeeMonth();
    }

    //    관리자 공지사항 등록
    public void insertFeeList(MaintenanceFeeDTO maintenanceFeeDTO){
        adminMapper.insertFeeList(maintenanceFeeDTO);
    }

    //    관리비 동 조회
    public List<DongVO> selectDong(){
        return adminMapper.selectDong();
    }

    //    관리비 검색 조회
    public List<MaintenanceFeeDTO> selectSearchedFee(@Param("maintenanceFeeDTO") MaintenanceFeeDTO maintenanceFeeDTO, Long id){
        return adminMapper.selectSearchedFee(maintenanceFeeDTO, id);
    }

    //    관리비 공개 상테 업데이트
    public void updateFeeStatus(MaintenanceFeeDTO maintenanceFeeDTO){
        adminMapper.updateFeeStatus(maintenanceFeeDTO);
    }

    //   관리자 관리비 목록 조회
    public List<MaintenanceFeeDTO> selectFee(@Param("pagination") Pagination pagination, Long id){
        return adminMapper.selectFee(pagination, id);
    }

    //    관리비 전체 개수
    public int selectTotalFee(@Param("maintenanceFeeDTO") MaintenanceFeeDTO maintenanceFeeDTO, Long id){
        return adminMapper.selectTotalFee(maintenanceFeeDTO, id);
    }

    //    관리비 검색 리스트
    public List<MaintenanceFeeDTO> selectSearchedFeeList(@Param("maintenanceFeeDTO") MaintenanceFeeDTO maintenanceFeeDTO, @Param("pagination") Pagination pagination, Long id){
        return adminMapper.selectSearchedFeeList(maintenanceFeeDTO, pagination, id);
    }

}
