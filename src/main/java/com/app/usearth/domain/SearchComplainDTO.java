package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
@Data
public class SearchComplainDTO {
    private List<ComplainAdminDTO> ComplainAdmins;
    private Pagination pagination;
    private int receptionCount;
    private int processingCount;
    private int completeCount;
    private int searchTotalCount;
}
