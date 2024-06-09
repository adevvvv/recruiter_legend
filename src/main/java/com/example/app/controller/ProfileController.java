package com.example.app.controller;

import com.example.app.domain.model.Profile;
import com.example.app.service.ProfileService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Optional;

@RestController
@RequestMapping("/profile")
@Tag(name = "Профиль соискателя")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd.MM.yyyy");

    @Operation(summary = "Получить профиль по ID")
    @PreAuthorize("hasRole('ROLE_APPLICANT')")
    @GetMapping("/{id}")
    public ResponseEntity<Profile> getProfileById(
            @Parameter(description = "ID профиля, по которому будет извлекаться объект профиля", required = true) @PathVariable Long id) {
        Optional<Profile> profile = profileService.getProfileById(id);
        return profile.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
   /* @Operation(summary = "Создать новый профиль")
    @PreAuthorize("hasRole('ROLE_APPLICANT')")
    @PostMapping
    public ResponseEntity<String> createProfile(
            @Parameter(description = "Имя", required = true) @RequestParam("firstName") String firstName,
            @Parameter(description = "Фамилия", required = true) @RequestParam("lastName") String lastName,
            @Parameter(description = "Отчество", required = true) @RequestParam("middleName") String middleName,
            @Parameter(description = "Дата рождения в формате dd.MM.yyyy", required = true) @RequestParam("birthDate") String birthDate,
            @Parameter(description = "Город", required = true) @RequestParam("city") String city,
            @Parameter(description = "Номер телефона", required = true) @RequestParam("phoneNumber") String phoneNumber,
            @Parameter(description = "Email", required = true) @RequestParam("email") String email,
            @Parameter(description = "Ссылка на VK", required = true) @RequestParam("vkLink") String vkLink,
            @Parameter(description = "Ссылка на Telegram", required = true) @RequestParam("telegramLink") String telegramLink,
            @Parameter(description = "Ссылка на WhatsApp", required = true) @RequestParam("whatsappLink") String whatsappLink,
            @Parameter(description = "Фотография профиля", required = true) @RequestParam("photo") MultipartFile photo,
            @Parameter(description = "Файл резюме", required = true) @RequestParam("resumeFile") MultipartFile resumeFile) throws IOException {
        Profile profile = new Profile();
        profile.setFirstName(firstName);
        profile.setLastName(lastName);
        profile.setMiddleName(middleName);

        try {
            LocalDate dob = LocalDate.parse(birthDate, DATE_FORMATTER);
            profile.setBirthDate(dob);
        } catch (DateTimeParseException e) {
            return ResponseEntity.badRequest().body("Неверный формат даты. Пожалуйста, используйте 'dd.MM.yyyy'.");
        }

        profile.setCity(city);
        profile.setPhoneNumber(phoneNumber);
        profile.setEmail(email);
        profile.setVkLink(vkLink);
        profile.setTelegramLink(telegramLink);
        profile.setWhatsappLink(whatsappLink);
        profile.setPhoto(photo.getBytes());
        profile.setResumeFile(resumeFile.getBytes());

        profileService.createOrUpdateProfile(profile);
        return ResponseEntity.ok("Профиль успешно создан");
    }*/



    @Operation(summary = "Обновить существующий профиль")
    @PreAuthorize("hasRole('ROLE_APPLICANT')")
    @PutMapping("/{id}")
    public ResponseEntity<Profile> updateProfile(
            @Parameter(description = "ID профиля для обновления объекта профиля", required = true) @PathVariable Long id,
            @Parameter(description = "Имя", required = true) @RequestParam("firstName") String firstName,
            @Parameter(description = "Фамилия", required = true) @RequestParam("lastName") String lastName,
            @Parameter(description = "Отчество", required = true) @RequestParam("middleName") String middleName,
            @Parameter(description = "Дата рождения в формате dd.MM.yyyy", required = true) @RequestParam("birthDate") String birthDate,
            @Parameter(description = "Город", required = true) @RequestParam("city") String city,
            @Parameter(description = "Номер телефона", required = true) @RequestParam("phoneNumber") String phoneNumber,
            @Parameter(description = "Email", required = true) @RequestParam("email") String email,
            @Parameter(description = "Ссылка на VK", required = true) @RequestParam("vkLink") String vkLink,
            @Parameter(description = "Ссылка на Telegram", required = true) @RequestParam("telegramLink") String telegramLink,
            @Parameter(description = "Ссылка на WhatsApp", required = true) @RequestParam("whatsappLink") String whatsappLink,
            @Parameter(description = "Фотография профиля", required = true) @RequestParam("photo") MultipartFile photo,
            @Parameter(description = "Файл резюме", required = true) @RequestParam("resumeFile") MultipartFile resumeFile) throws IOException {
        Optional<Profile> existingProfile = profileService.getProfileById(id);

        if (existingProfile.isPresent()) {
            Profile profile = existingProfile.get();
            profile.setFirstName(firstName);
            profile.setLastName(lastName);
            profile.setMiddleName(middleName);

            try {
                LocalDate dob = LocalDate.parse(birthDate, DATE_FORMATTER);
                profile.setBirthDate(dob);
            } catch (DateTimeParseException e) {
                return ResponseEntity.badRequest().body(null);
            }

            profile.setCity(city);
            profile.setPhoneNumber(phoneNumber);
            profile.setEmail(email);
            profile.setVkLink(vkLink);
            profile.setTelegramLink(telegramLink);
            profile.setWhatsappLink(whatsappLink);
            profile.setPhoto(photo.getBytes());
            profile.setResumeFile(resumeFile.getBytes());

            return ResponseEntity.ok(profileService.createOrUpdateProfile(profile));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Operation(summary = "Удалить профиль по ID")
    @PreAuthorize("hasRole('ROLE_APPLICANT')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProfile(
            @Parameter(description = "ID профиля, по которому объект профиля будет удален из базы данных", required = true) @PathVariable Long id) {
        profileService.deleteProfile(id);
        return ResponseEntity.noContent().build();
    }
}