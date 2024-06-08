package com.example.app.domain.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class ResumeDTO {
    private String lastName;
    private String firstName;
    private String middleName;
    private LocalDate birthDate;
    private String gender;
    private String phoneNumber;
    private String email;
    private String citizenship;
    private String city;
    private List<EducationDTO> educationList;
    private String desiredPosition;
    private String desiredSalary;
    private String workSchedule;
    private String employmentType;
    private List<LanguageDTO> languages;
    private List<WorkExperienceDTO> workExperienceList;

}

