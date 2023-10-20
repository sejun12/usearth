package com.app.usearth.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
@ApiModel(value = "유저 댓글 목록")
public class CommentDTO {
    @ApiModelProperty(value = "댓글 번호", example = "21")
    private Long id;
    @ApiModelProperty(value = "유저 번호", example = "21" , required = true)
    private Long userId;
    @ApiModelProperty(value = "게시글 번호", example = "21", required = true)
    private Long postId;
    @ApiModelProperty(value = "무섭다...", example = "21")
    private Long parentCommentId;
    @ApiModelProperty(value = "댓글 작성 날짜", example = "YYYY/MM/DD/HH/MM/SS")
    private String commentWriteDate;
    @ApiModelProperty(value = "댓글 내용", example = "테스트 댓글")
    private String commentContent;
    @ApiModelProperty(value = "댓글 수정 날짜", example = "YYYY/MM/DD/HH/MM/SS")
    private String commentUpdateDate;
    @ApiModelProperty(value = "게시글 제목", example = "테스트 제목")
    private String postTitle;
    @ApiModelProperty(value = "게시글 내용", example = "테스트 내용")
    private String postContent;
    @ApiModelProperty(value = "게시글 작성 날짜", example = "YYYY/MM/DD/HH/MM/SS")
    private String postWriteDate;
    @ApiModelProperty(value = "유저 이름", example ="홍길동")
    private String userName;
    @ApiModelProperty(value = "게시글 카테 고리", example = "재활용,자유")
    private String postCategory;
}
