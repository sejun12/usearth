package com.app.usearth.repository;

import com.app.usearth.domain.AnnouncementDTO;
import com.app.usearth.domain.Pagination;
import com.app.usearth.mapper.AptFeeBillNoticeMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class AptFeeBillNoticeDAO {
    private final AptFeeBillNoticeMapper aptFeeBillNoticeMapper;

//    공지사항 리스트
    public List<AnnouncementDTO> announcementList(@Param("pagination") Pagination pagination){
        return aptFeeBillNoticeMapper.selectAll(pagination);
    };

//    공지사항 리스트 개수
    public int selectTotal(){return aptFeeBillNoticeMapper.selectTotal();};

//    공지사항 상세보기
    public Optional<AnnouncementDTO> detail(Long id){return aptFeeBillNoticeMapper.detail(id);};

//        조회수 증가
    public void viewCountUp(Long id){aptFeeBillNoticeMapper.viewCountUp(id);};
}
