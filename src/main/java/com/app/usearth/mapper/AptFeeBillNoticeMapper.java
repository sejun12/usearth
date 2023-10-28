package com.app.usearth.mapper;

import com.app.usearth.domain.AnnouncementDTO;
import com.app.usearth.domain.Pagination;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AptFeeBillNoticeMapper {
//    공지사항 리스트
    public List<AnnouncementDTO> selectAll(@Param("pagination") Pagination pagination);

//    공지사항 리스트 개수
    public int selectTotal();
}
