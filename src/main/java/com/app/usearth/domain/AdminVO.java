package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Component
@Data
public class AdminVO implements Serializable {
    private Long id;
    private String apartmentId;
    private String adminIdentification;
    private String adminPassword;
    private String adminName;
}
