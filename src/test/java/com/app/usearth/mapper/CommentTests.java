package com.app.usearth.mapper;

import com.app.usearth.domain.CommentDTO;
import com.app.usearth.domain.CommentVO;
import com.app.usearth.domain.UserDTO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class CommentTests {
    @Autowired
    private RecyclingAgentMapper recyclingAgentMapper;

    @Test
    public void insertCommentTest(){
        CommentVO commentVO = new CommentVO();

        for(int i = 0; i <= 15; i++){
            commentVO.setPostId(1L);
            commentVO.setUserId(121L);
            commentVO.setCommentContent("Test 댓글" + i);
            recyclingAgentMapper.insertComment(commentVO);
        }
    }
}
