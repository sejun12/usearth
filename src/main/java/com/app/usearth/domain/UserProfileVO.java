package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class UserProfileVO {
    private Long id;
    private String userProfileName;
    private String userProfilePath;
    private String userKakaoProfileUrl;
}
