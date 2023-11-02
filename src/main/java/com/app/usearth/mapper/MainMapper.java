package com.app.usearth.mapper;

import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.PostVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Mapper
public interface MainMapper {

  public List<PostDTO> selectRecycle();

  public Optional<PostDTO> selectByRecyclingRead(Long id);
  public List<PostDTO> selectFree();

}
