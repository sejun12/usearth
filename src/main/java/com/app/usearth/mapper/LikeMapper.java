package com.app.usearth.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LikeMapper {
    // 새로운 좋아요를 데이터베이스에 추가
    public void addLike(Long userId, Long postId);

    // 데이터베이스에서 좋아요를 삭제
    public void removeLike(Long userId, Long postId);

    // 사용자가 특정 게시글에 좋아요를 했는지 확인
    public Long checkUserLikeForPost(Long userId, Long postId);

    // 게시글 ID를 기준으로 좋아요 수를 반환
    public int selectLikeCount(Long postId);
}
