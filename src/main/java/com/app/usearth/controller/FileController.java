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
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Controller
@RequestMapping("/file/*")
@Slf4j
public class FileController {
    @PostMapping("upload")
    // 리턴하는 것으 바디에담은 .html을 붙는것을 방지
    @ResponseBody
    public List<String> upload(@RequestParam("uploadFile") List<MultipartFile> uploadFiles) throws IOException {
        log.info(uploadFiles.toString());
        String rootPath = "C:/upload/" + getPath();
        List<String> uuids = new ArrayList<>();
        File file = new File(rootPath);
        if(!file.exists()){
            file.mkdirs();
        }
        for (int i = 0; i < uploadFiles.size(); i++) {
            //랜덤한 문자 파일앞에 붙음
            uuids.add(UUID.randomUUID().toString());
            //uuids[i]  _언더바로 split으로 원본 파일알수있게
            uploadFiles.get(i).transferTo(new File(rootPath, uuids.get(i) + "_" + uploadFiles.get(i).getOriginalFilename()));
            //그업로드 파일이 이미지 구분 용량 축소 썸내일로 만들려고
            if (uploadFiles.get(i).getContentType().startsWith("image")) {
                //썸내일을 t_로 구분
                FileOutputStream out = new FileOutputStream(new File(rootPath, "t_" + uuids.get(i) + "_" + uploadFiles.get(i).getOriginalFilename()));
                //이미지는 2개가 업로드 됨 out 출력
                Thumbnailator.createThumbnail(uploadFiles.get(i).getInputStream(), out, 100, 100);
                out.close();
            }
        }

        return uuids;
    }
    //파일 가져오기
    @GetMapping("display")
    @ResponseBody
    public byte[] display(String fileName) throws IOException{
        return FileCopyUtils.copyToByteArray(new File("C:/upload", fileName));
    }
    //현재 시간 년월일로 3개폴더로 만들어지게
    private String getPath() {
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }
}

