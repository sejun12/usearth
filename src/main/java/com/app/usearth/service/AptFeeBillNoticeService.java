package com.app.usearth.service;

import com.app.usearth.domain.AnnouncementDTO;
import com.app.usearth.domain.Pagination;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface AptFeeBillNoticeService {

//    공지사항 리스트
    public List<AnnouncementDTO> announcementList(@Param("pagination") Pagination pagination);

//    공지사항 리스트 개수
    public int selectTotal();
}
