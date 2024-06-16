package com.example.app.domain.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecruiterProfileDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String position;
}