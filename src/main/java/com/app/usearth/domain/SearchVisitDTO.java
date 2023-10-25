package com.app.usearth.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Data
public class SearchVisitDTO {
    private List<AdminVisitDTO> searchVisit;
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
