package com.app.usearth.mapper;

import com.app.usearth.domain.PostDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MainMapper {
    public List<PostDTO> selectByFreeBoard();
    public List<PostDTO> updateByFreeBoard();
}
