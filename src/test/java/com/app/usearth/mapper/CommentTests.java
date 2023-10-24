package com.app.usearth.mapper;

import com.app.usearth.domain.CommentDTO;
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
        CommentDTO commentDTO = new CommentDTO();

        for(int i = 0; i <= 15; i++){
            commentDTO.setPostId(1L);
            commentDTO.setUserId(121L);
            commentDTO.setCommentContent("Test 댓글" + i);
            recyclingAgentMapper.insertComment(commentDTO);
        }
    }
}
