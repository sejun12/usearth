package com.app.usearth.controller;

import lombok.extern.slf4j.Slf4j;
import net.coobird.thumbnailator.Thumbnailator;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

@Controller
@RequestMapping("/file/*")
@Slf4j
public class FileController {
    @PostMapping("upload")
    // 리턴하는 것을 바디에담은 .html을 붙는것을 방지
    @ResponseBody
    public String upload(@RequestParam("uploadFile") List<MultipartFile> uploadFiles) throws IOException {
        String rootPath = "/usr/project/upload/" + getPath();
        String uuid  = UUID.randomUUID().toString();
        File file = new File(rootPath);
        if(!file.exists()){
            file.mkdirs();
        }

        uploadFiles.get(0).transferTo(new File(rootPath, uuid + "_" + uploadFiles.get(0).getOriginalFilename()));
        if(uploadFiles.get(0).getContentType().startsWith("image")){
            FileOutputStream out = new FileOutputStream(new File(rootPath, "t_" + uuid + "_" + uploadFiles.get(0).getOriginalFilename()));
            Thumbnailator.createThumbnail(uploadFiles.get(0).getInputStream(), out, 90, 90);
            out.close();
        }

        return uuid;
    }
    //파일 가져오기
    @GetMapping("display")
    @ResponseBody
    public byte[] display(String fileName) throws IOException{
        return FileCopyUtils.copyToByteArray(new File("/usr/project/upload", fileName));
    }
    //현재 시간 년월일로 3개폴더로 만들어지게
    private String getPath() {
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }
}

