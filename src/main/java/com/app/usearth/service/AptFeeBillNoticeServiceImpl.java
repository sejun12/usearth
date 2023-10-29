package com.app.usearth.service;

import com.app.usearth.domain.AnnouncementDTO;
import com.app.usearth.domain.Pagination;
import com.app.usearth.repository.AptFeeBillNoticeDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class AptFeeBillNoticeServiceImpl implements AptFeeBillNoticeService {
    private final AptFeeBillNoticeDAO aptFeeBillNoticeDAO;

//    공지사항 리스트
    @Override
    public List<AnnouncementDTO> announcementList(Pagination pagination) {
        return aptFeeBillNoticeDAO.announcementList(pagination);
    }

//    공지사항 리스트 개수
    @Override
    public int selectTotal() {
        return aptFeeBillNoticeDAO.selectTotal();
    }

//    공지사항 상세보기
    @Override
    public Optional<AnnouncementDTO> detail(Long id) {
        return aptFeeBillNoticeDAO.detail(id);
    }

//    조회수 증가
    public void viewCountUp(Long id){aptFeeBillNoticeDAO.viewCountUp(id);};
}
