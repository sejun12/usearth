package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.io.Serializable;
@Component
@Data
public class PostVO  implements Serializable {
    private Long id;
    private Long userId;
    private String postTitle;
    private String postContent;
    private String postWriteDate;
    private Long postViewCount;
    private Long postLikeCount;
    private String postStatus;
    private String postCategory;
    private String postModifyDate;
}
