package com.app.usearth.mapper;

import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.PostVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface RecyclingAgentMapper {
    public List<PostDTO> selectByRecycling();

    public List<PostDTO> updateByRecycling();
}
