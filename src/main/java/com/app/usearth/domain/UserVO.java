package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.io.Serializable;
@Component
@Data
public class UserVO implements Serializable {
    private Long id;
    private String userName;
    private String userKakaoEmail;
    private boolean userApproval;
    private String userDong;
    private String userHo;
    private Long userProfileId;
    private Long apartmentId;
    private String userJoinDate;
    private Long userTempNo;

}
