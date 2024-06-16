package com.example.app.controller;

import com.example.app.domain.model.Profile;
import com.example.app.service.ProfileService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;
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
    @SecurityRequirement(name = "bearerAuth")
    @GetMapping("/{id}")
    public ResponseEntity<Profile> getProfileById(@PathVariable Long id) {
        Optional<Profile> profile = profileService.getProfileById(id);
        return profile.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
    @Operation(summary = "Получить все профили")
    @PreAuthorize("hasRole('ROLE_APPLICANT')")
    @SecurityRequirement(name = "bearerAuth")
    @GetMapping
    public ResponseEntity<List<Profile>> getAllProfiles() {
        List<Profile> profiles = profileService.getAllProfiles();
        return ResponseEntity.ok(profiles);
    }


    @Operation(summary = "Создать новый профиль")
    @PreAuthorize("hasRole('ROLE_APPLICANT')")
    @PostMapping
    @SecurityRequirement(name = "bearerAuth")
    public ResponseEntity<String> createProfile(
            @Parameter(description = "Имя", required = true) @RequestParam("firstName") String firstName,
            @Parameter(description = "Фамилия", required = true) @RequestParam("lastName") String lastName,
            @Parameter(description = "Отчество", required = true) @RequestParam("middleName") String middleName,
            @Parameter(description = "Дата рождения в формате dd.MM.yyyy", required = true) @RequestParam("birthDate") String birthDate,
            @Parameter(description = "Город", required = false) @RequestParam(value = "city", required = false) String city,
            @Parameter(description = "Номер телефона", required = false) @RequestParam(value = "phoneNumber", required = false) String phoneNumber,
            @Parameter(description = "Email", required = false) @RequestParam(value = "email", required = false) String email,
            @Parameter(description = "Ссылка на VK", required = false) @RequestParam(value = "vkLink", required = false) String vkLink,
            @Parameter(description = "Ссылка на Telegram", required = false) @RequestParam(value = "telegramLink", required = false) String telegramLink,
            @Parameter(description = "Ссылка на WhatsApp", required = false) @RequestParam(value = "whatsappLink", required = false) String whatsappLink,
            @Parameter(description = "Фотография профиля", required = false) @RequestParam(value = "photo", required = false) MultipartFile photo,
            @Parameter(description = "Файл резюме", required = false) @RequestParam(value = "resumeFile", required = false) MultipartFile resumeFile) throws IOException {
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
        if (photo != null) {
            profile.setPhoto(photo.getBytes());
        }
        if (resumeFile != null) {
            profile.setResumeFile(resumeFile.getBytes());
        }

        profileService.createOrUpdateProfile(profile);
        return ResponseEntity.ok("Профиль успешно создан");
    }


    @Operation(summary = "Обновить существующий профиль")
    @PreAuthorize("hasRole('ROLE_APPLICANT')")
    @PatchMapping("/{id}")
    public ResponseEntity<Profile> updateProfile(
            @Parameter(description = "ID профиля для обновления объекта профиля", required = true) @PathVariable Long id,
            @Parameter(description = "Имя") @RequestParam(name = "firstName", required = false) String firstName,
            @Parameter(description = "Фамилия") @RequestParam(name = "lastName", required = false) String lastName,
            @Parameter(description = "Отчество") @RequestParam(name = "middleName", required = false) String middleName,
            @Parameter(description = "Дата рождения в формате dd.MM.yyyy") @RequestParam(name = "birthDate", required = false) String birthDate,
            @Parameter(description = "Город") @RequestParam(name = "city", required = false) String city,
            @Parameter(description = "Номер телефона") @RequestParam(name = "phoneNumber", required = false) String phoneNumber,
            @Parameter(description = "Email") @RequestParam(name = "email", required = false) String email,
            @Parameter(description = "Ссылка на VK") @RequestParam(name = "vkLink", required = false) String vkLink,
            @Parameter(description = "Ссылка на Telegram") @RequestParam(name = "telegramLink", required = false) String telegramLink,
            @Parameter(description = "Ссылка на WhatsApp") @RequestParam(name = "whatsappLink", required = false) String whatsappLink,
            @Parameter(description = "Фотография профиля") @RequestParam(name = "photo", required = false) MultipartFile photo,
            @Parameter(description = "Файл резюме") @RequestParam(name = "resumeFile", required = false) MultipartFile resumeFile) throws IOException {

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