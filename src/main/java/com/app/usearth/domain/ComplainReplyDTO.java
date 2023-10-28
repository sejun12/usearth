package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class ComplainReplyDTO {
    private Long id;
    private Long complainId;
    private Long adminId;
    private String complainReplyContent;
    private String categoryComplainName;
}
