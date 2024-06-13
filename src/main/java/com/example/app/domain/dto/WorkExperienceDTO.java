package com.example.app.domain.dto;


import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class WorkExperienceDTO {
    private LocalDate startDate;
    private LocalDate endDate;
    private boolean currentlyWorking;
    private String position;
    private String responsibilities;
    private String companyName;
}
