package com.app.usearth.controller;

import com.app.usearth.service.FreeService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/lists/api/")
public class FreeAPI {
    private final FreeService freeService;

}
