package com.app.usearth.mapper;


import com.app.usearth.domain.PostDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FreeMapper {
    // 자유게시판 list
    public List<PostDTO> selectFree(Long id);
}
