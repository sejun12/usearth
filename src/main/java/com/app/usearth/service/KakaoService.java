package com.app.usearth.service;

import com.app.usearth.domain.UserDTO;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Optional;

@Service
@Transactional(rollbackFor = Exception.class)
@Slf4j
public class KakaoService {
    public String getKakaoAccessToken(String code){
        String accessToken = null;
        String requestURL = "https://kauth.kakao.com/oauth/token";

        try {
            URL url = new URL(requestURL);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setDoOutput(true);

            //POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(connection.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id=25b3d09e151aff5ebf73ce67ed0f05f6"); // TODO REST_API_KEY 입력
            sb.append("&redirect_uri=http://localhost:10000/kakao/login"); // TODO 인가코드 받은 redirect_uri 입력
            sb.append("&code=" + code);
            bw.write(sb.toString());
            bw.flush();

            if(connection.getResponseCode() == 200){
                BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String line = null;
                String result = "";

                while((line = br.readLine()) != null){
                    result += line;
                }

                JsonElement element = JsonParser.parseString(result);
                accessToken = element.getAsJsonObject().get("access_token").getAsString();

                br.close();
                bw.close();
            }
        }catch (IOException e){
            e.printStackTrace();
        }
        return accessToken;
    }

    public Optional<UserDTO> getKakaoInfo(String token) {
        String requestURL = "https://kapi.kakao.com/v2/user/me";
        UserDTO userDTO = null;

        try {
            URL url = new URL(requestURL);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            connection.setRequestMethod("POST");
            connection.setDoOutput(true);
            connection.setRequestProperty("Authorization", "Bearer " + token);

            if(connection.getResponseCode() == 200){
                userDTO = new UserDTO();
                BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String line = null;
                String result = "";

                while((line = br.readLine()) != null){
                    result += line;
                }

                JsonElement element = JsonParser.parseString(result);
                JsonElement kakaoAccount = element.getAsJsonObject().get("kakao_account").getAsJsonObject();
                JsonElement profile = kakaoAccount.getAsJsonObject().get("profile").getAsJsonObject();

                userDTO.setUserKakaoEmail(kakaoAccount.getAsJsonObject().get("email").getAsString());
                userDTO.setUserName(profile.getAsJsonObject().get("nickname").getAsString());
                userDTO.setUserKakaoProfileUrl(profile.getAsJsonObject().get("thumbnail_image_url").getAsString());

                br.close();
            }
        }catch (IOException e){
            e.printStackTrace();
        }
        return Optional.ofNullable(userDTO);
    }
}
