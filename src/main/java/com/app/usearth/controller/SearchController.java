package com.app.usearth.controller;

import com.app.usearth.domain.Search;
import com.app.usearth.domain.SearchAptDTO;
import com.app.usearth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SearchController {
    private final UserService userService;

    @GetMapping("/results/search-apts")
    public SearchAptDTO getAptResult(Search search) { return userService.getSearchApt(search); }
}
