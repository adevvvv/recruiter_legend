package com.example.app.domain.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Resume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Schema(description = "Фамилия", required = true)
    private String lastName;

    @Schema(description = "Имя", required = true)
    private String firstName;

    @Schema(description = "Отчество", required = true)
    private String middleName;

    private LocalDate birthDate;
    private String gender;

    @Schema(description = "Номер телефона", required = true)
    private String phoneNumber;

    @Schema(description = "Email", required = true)
    private String email;

    private String citizenship;
    private String city;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Education> educationList = new ArrayList<>();

    private String desiredPosition;
    private String desiredSalary;
    private String workSchedule;
    private String employmentType;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Language> languages = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<WorkExperience> workExperienceList = new ArrayList<>();

    @ElementCollection
    private List<String> skills = new ArrayList<>();

    private String message;
    private String resumeAttachment;
    private boolean consentToProcessPersonalData;
}
