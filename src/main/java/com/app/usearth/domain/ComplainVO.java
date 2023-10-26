package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class ComplainVO {
    private Long id;
    private Long userId;
    private Long categoryComplainId;
    private String complainTitle;
    private String complainContent;
    private String complainDate;
    private String complainStatus;
    private String complainProcessingDate;
}
