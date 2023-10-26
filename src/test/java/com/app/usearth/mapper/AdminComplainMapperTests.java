package com.app.usearth.mapper;

import com.app.usearth.domain.ComplainAdminDTO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@Slf4j
public class AdminComplainMapperTests {
    @Autowired
    private AdminComplainMapper adminComplainMapper;

    @Test
    public void selectComplainListByAptIdTest(){

        log.info("{}",adminComplainMapper.selectComplainListByAptId(1L));
    }
}
