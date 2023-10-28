package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Data
public class AnnouncementDTO {
    private Long id;
    private Long adminId;
    private Integer announcementCategoryId;
    private String announcementTitle;
    private String announcementContent;
    private LocalDateTime announcementDate;
    private Integer announcementViewCount;
    private Integer announcementLikeCount;

    private Integer categoryId;
    private String announcementCategoryName;
}

