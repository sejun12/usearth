package com.app.usearth.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
@ApiModel(value = "유저 방문 차량 목록")
public class ReserveCarVO {
    @ApiModelProperty(value = "방문 차량 번호(아이디)", example = "21")
    private Long id;
    @ApiModelProperty(value = "유저 번호", example = "21")
    private Long userId;
    @ApiModelProperty(value = "아파트 번호(아이디)", example = "21")
    private Long apartmentId;
    @ApiModelProperty(value = "방문 차량 예약 들어올 날짜", example = "YYYY/MM/DD/HH/MM/SS")
    private String visitBookingStartDate;
    @ApiModelProperty(value = "방문 차량 예약 나갈 날짜", example = "YYYY/MM/DD/HH/MM/SS")
    private String visitBookingEndDate;
    @ApiModelProperty(value = "방문 차량 등록 날짜", example ="YYYY/MM/DD/HH/MM/SS")
    private String visitBookingRegisterDate;
    @ApiModelProperty(value = "방문 차량 목적", example = "공사")
    private String visitBookingPurpose;
    @ApiModelProperty(value = "방문 차량 번호", example = "21가9459")
    private String visitBookingCarNumber;
    @ApiModelProperty(value = "방문 차량 차종", example = "롤스로이스 스웹테일")
    private String visitBookingCarType;
}
