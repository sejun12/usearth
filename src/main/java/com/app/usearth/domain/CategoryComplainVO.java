package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class CategoryComplainVO {
    private Long id;
    private String categoryComplainName;
}
