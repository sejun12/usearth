package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Data
public class SearchAptDTO {
    private List<ApartmentVO> searchApts;
}
