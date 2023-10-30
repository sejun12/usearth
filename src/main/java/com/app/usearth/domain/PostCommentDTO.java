package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class PostCommentDTO {
    private Long id;
    private Long userId;
    private Long postId;
    private String commentWriteDate;
    private String commentContent;
    private String userName;
    private String userProfileName;
    private String userProfilePath;
    private String userKakaoProfileUrl;
}
