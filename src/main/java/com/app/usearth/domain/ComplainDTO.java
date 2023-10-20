package com.app.usearth.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
@ApiModel(value = "유저 민원 목록")
public class ComplainDTO {
    @ApiModelProperty(value = "민원 번호", example = "21")
    private Long id;
    @ApiModelProperty(value = "유저 번호", example = "84", required = true)
    private Long userId;
    @ApiModelProperty(value = "민원 카테고리 번호", example = "1부터9")
    private Long categoryComplainId;
    @ApiModelProperty(value = "민원 카테고리 이름", example = "엘리베이터 부터 기타", required = true)
    private String categoryComplainName;
    @ApiModelProperty(value = "민원 제목", example = "21", required = true)
    private String complainTitle;
    @ApiModelProperty(value = "민원 내용", example = "21", required = true)
    private String complainContent;
    @ApiModelProperty(value = "민원 신청 날짜", example = "YYYY/MM/DD/hh/mm/ss")
    private String complainDate;
    @ApiModelProperty(value = "민원 처리 상태", example = "접수 완료,진행중,처리 완료")
    private String complainStatus;
    @ApiModelProperty(value = "답변 번호", example = "1")
    private Long replyId;
    @ApiModelProperty(value = "답변 관리자 번호", example = "비공개")
    private Long adminId;
    @ApiModelProperty(value = "민원 답변 제목", example = "테스트 답변 제목")
    private String complainReplyTitle;
    @ApiModelProperty(value = "민원 답변 내용", example = "테스트 답변 내용")
    private String complainReplyContent;
    @ApiModelProperty(value = "민원 처리 날짜", example = "YYYY/MM/DD/hh/mm/ss")
    private String complainReplyDate;
}
