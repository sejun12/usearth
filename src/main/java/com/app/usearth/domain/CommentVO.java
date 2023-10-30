package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class CommentVO {
    private Long id;
    private Long userId;
    private Long postId;
    private Long parentCommentId;
    private String commentWriteDate;
    private String commentContent;
    private String commentUpdateDate;
}
