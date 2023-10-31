package com.app.usearth.mapper;

import com.app.usearth.domain.PostDTO;
import com.app.usearth.domain.PostVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Mapper
@Repository
public interface MainMapper {
  // 재활용 목록
  public List<PostVO> selectRecycle(Long id);
  // 자유게시판 목록
  public List<PostVO> selectFree(Long id);
}
