package com.springboot.applypage.service;

import com.springboot.applypage.data.dto.SignInResultDto;
import com.springboot.applypage.data.dto.SignUpResultDto;

public interface SignService {
    SignUpResultDto signUp(String id, String password, String name, String role);

    SignInResultDto signIn(String id, String password)throws Exception;
}
