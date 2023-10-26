package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Component
@Data
public class ComplainAdminDTO implements Serializable {
    private Long id;
    private String userName;
    private String userDong;
    private String userHo;
    private Long apartmentId;
    private Long userId;
    private Long categoryComplainId;
    private String complainTitle;
    private String complainContent;
    private String complainDate;
    private String complainStatus;
    private String complainProcessingDate;
    private String categoryComplainName;
}
