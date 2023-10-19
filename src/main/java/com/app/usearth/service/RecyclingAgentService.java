package com.app.usearth.service;

import com.app.usearth.domain.PostDTO;

import java.util.List;

public interface RecyclingAgentService {

    public List<PostDTO> getByRecycling();

    public List<PostDTO> getByRecyclingRead(Long postId);


}
