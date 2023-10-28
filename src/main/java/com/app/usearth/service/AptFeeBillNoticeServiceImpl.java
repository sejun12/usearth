package com.app.usearth.service;

import com.app.usearth.domain.AnnouncementDTO;
import com.app.usearth.domain.Pagination;
import com.app.usearth.repository.AptFeeBillNoticeDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class AptFeeBillNoticeServiceImpl implements AptFeeBillNoticeService {
    private final AptFeeBillNoticeDAO aptFeeBillNoticeDAO;
    @Override
    public List<AnnouncementDTO> announcementList(Pagination pagination) {
        return aptFeeBillNoticeDAO.announcementList(pagination);
    }

    @Override
    public int selectTotal() {
        return aptFeeBillNoticeDAO.selectTotal();
    }
}
