package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Data
public class SearchComplain {
    private String categoryComplainName;
    private String keyword;
    private String complainStatus;
    private String startDate;
    private String endDate;
}
