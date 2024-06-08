package com.example.app.domain.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String middleName;
    private LocalDate birthDate;
    private String city;
    private String phoneNumber;
    private String email;
    private String vkLink;
    private String telegramLink;
    private String whatsappLink;

    @Lob
    private byte[] photo;

    @Lob
    private byte[] resumeFile;

}