package com.app.usearth.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.io.Serializable;
@Component
@Data
public class PostVO  implements Serializable {
    @ApiModelProperty(value = "게시글 번호", example = "57", required = true)
    private Long id;
    @ApiModelProperty(value = "회원 번호", example = "88", required = true)
    private Long userId;
    @ApiModelProperty(value = "게시글 제목", example = "분리수거 재활용 요청합니다.", required = true)
    private String postTitle;
    @ApiModelProperty(value = "게시글 내용", example = "어제 분리수거 신청하고", required = true)
    private String postContent;
    @ApiModelProperty(value = "게시글 등록일", example = "2023-10-17", required = true)
    private String postWriteDate;
    @ApiModelProperty(value = "게시글 조회수", example = "42", required = true)
    private Long postViewCount;
    @ApiModelProperty(value = "게시글 좋아요수", example = "0", required = true)
    private Long postLikeCount;
    @ApiModelProperty(value = "게시글 공용", example = "PUBLIC", required = true)
    private String postStatus;
    @ApiModelProperty(value = "게시글 카테고리", example = "재활용", required = true)
    private String postCategory;
    @ApiModelProperty(value = "게시글 수정일", example = "2023-10-17", required = true)
    private String postModifyDate;
}
