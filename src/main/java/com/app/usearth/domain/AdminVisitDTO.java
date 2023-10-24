package com.app.usearth.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class AdminVisitDTO {
    private Long id;
    private Long userId;
    private Long apartmentId;
    private String visitBookingStartDate;
    private String visitBookingEndDate;
    private String visitBookingRegisterDate;
    private String visitBookingPurpose;
    private String visitBookingCarNumber;
    private String visitBookingCarType;
    private String userDong;
    private String userHo;
    private String adminIdentification;
    private String adminName;
}
