package com.app.usearth.service;

import com.app.usearth.domain.*;
import com.app.usearth.domain.UserDTO;
import com.app.usearth.repository.AdminDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
@Slf4j
public class AdminServiceImpl implements AdminService {
    private final AdminDAO adminDAO;

    //    입주민 승인 PAGE ==> START
    @Override
    public List<UserDTO> getResidentList() {
        return adminDAO.getUserList();
    }

    @Override
    public List<UserDTO> getResidentListByPagination(Pagination pagination, Long id) {
        return adminDAO.getUserListByPagination(pagination, id);
    }

    @Override
    public int getTotal(UserDTO userDTO, Long id) {
        return adminDAO.getTotal(userDTO, id);
    }

    @Override
    public <Optional> UserDTO getUserById(Long id) {
        return adminDAO.getUser(id);
    }

    @Override
    public void modifyApproval(UserDTO userDTO) {
        adminDAO.modifyStatus(userDTO);
    }

    @Override
    public List<UserDTO> selectSearch(UserDTO userDTO, Pagination pagination, Long id) {
        return adminDAO.selectSearch(userDTO, pagination, id);
    }

    //    공지사항 작성 PAGE ==> START
    @Override
    public List<AnnouncementCategoryVO> extractCategory() {
        return adminDAO.getCategory();
    }

    @Override
    public void insertAdminAnnouncement(AdminAnnouncementDTO adminAnnouncementDTO) {
        adminDAO.insertAdminNotice(adminAnnouncementDTO);
    }

    @Override
    public List<AdminAnnouncementDTO> getAnnouncement(Pagination pagination, Long id) {
        return adminDAO.getAnnouncement(pagination, id);
    }

    @Override
    public int getTotalAnnouncement(AdminAnnouncementDTO adminAnnouncementDTO, Long id) {
        return adminDAO.getTotalAnnouncement(adminAnnouncementDTO, id);
    }

    @Override
    public List<AdminAnnouncementDTO> getSearchedAnnouncement(AdminAnnouncementDTO adminAnnouncementDTO, Pagination pagination, Long id) {
        return adminDAO.getSearchedAnnouncement(adminAnnouncementDTO, pagination, id);
    }

    @Override
    public List<PostCategoryVO> getPostCategory() {
        return adminDAO.selectPostCategory();
    }

    @Override
    public List<PostDTO> getFreePost(Pagination pagination, Long id) {
        return adminDAO.selectFreePost(pagination, id);
    }

    @Override
    public int getTotalFreePost(PostDTO postDTO, Long id) {
        return adminDAO.selectTotalFreePost(postDTO, id);
    }

    @Override
    public List<PostDTO> getSearchedFreePost(PostDTO postDTO, Pagination pagination, Long id) {
        return adminDAO.selectSearchedFreePost(postDTO, pagination, id);
    }

    @Override
    public void removeFreePost(Long id) {
        adminDAO.deleteFreePost(id);
    }

    @Override
    public <Optional> PostDTO getPostById(Long id) {
        return adminDAO.selectPostById(id);
    }

    @Override
    public List<ImposingYearVO> getFeeYear() {
        return adminDAO.selectFeeYear();
    }

    @Override
    public List<ImposingMonthVO> getFeeMonth() {
        return adminDAO.selectFeeMonth();
    }

    @Override
    public void addFeeList(MaintenanceFeeDTO maintenanceFeeDTO) {
        adminDAO.insertFeeList(maintenanceFeeDTO);
    }

    @Override
    public List<DongVO> getDong() {
        return adminDAO.selectDong();
    }

    @Override
    public List<MaintenanceFeeDTO> selectSearchedFee(MaintenanceFeeDTO maintenanceFeeDTO, Long id) {
        return adminDAO.selectSearchedFee(maintenanceFeeDTO, id);
    }

    @Override
    public List<MaintenanceFeeDTO> selectFee(Pagination pagination, Long id) {
        return adminDAO.selectFee(pagination, id);
    }

    @Override
    public int selectTotalFee(MaintenanceFeeDTO maintenanceFeeDTO, Long id) {
        return adminDAO.selectTotalFee(maintenanceFeeDTO, id);
    }

    @Override
    public List<MaintenanceFeeDTO> selectSearchedFeeList(MaintenanceFeeDTO maintenanceFeeDTO, Pagination pagination, Long id) {
        return adminDAO.selectSearchedFeeList(maintenanceFeeDTO, pagination, id);
    }
}
