package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class ReserveCarVO {
    private Long id;
    private Long userId;
    private Long apartmentId;
    private String visitBookingStartDate;
    private String visitBookingEndDate;
    private String visitBookingRegisterDate;
    private String visitBookingPurpose;
    private String visitBookingCarNumber;
    private String visitBookingCarType;
}
