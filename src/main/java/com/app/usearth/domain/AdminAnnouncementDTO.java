package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.time.LocalDateTime;

@Component
@Data
public class AdminAnnouncementDTO {
    private Long id;
    private Long adminId;
    private Long announcementCategoryId;
    private String announcementTitle;
    private String announcementContent;
    private String announcementDate;
    private Long announcementViewCount;
    private Long announcementLikeCount;
    private String announcementCategoryName;
    private String adminIdentification;
    private String adminName;

}

