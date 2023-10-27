package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class PostDTO {
    private Long id;
    private Long userId;
    private String userName;
    private String postTitle;
    private String postContent;
    private String postWriteDate;
    private Long postViewCount;
    private Long postLikeCount;
    private String postStatus;
    private String postCategory;
    private String postModifyDate;
    private int commentCount;
    private int likeCount;
}
