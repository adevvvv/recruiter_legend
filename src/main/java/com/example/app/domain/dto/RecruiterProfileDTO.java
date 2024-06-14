package com.example.app.domain.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecruiterProfileDTO {

    private Long id;
    private String username;
    private String position;
    private byte[] photo;
}