package com.example.app.controller;

import com.example.app.domain.model.Profile;
import com.example.app.service.ProfileService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
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
@Api(value = "Profile Management System", description = "Операции, связанные с профилем в системе управления профилями")
@Tag(name = "Профиль соискателя")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd.MM.yyyy");

    @ApiOperation(value = "Получить профиль по ID")
    @PreAuthorize("hasRole('ROLE_APPLICANT')")
    @GetMapping("/{id}")
    public ResponseEntity<Profile> getProfileById(
            @ApiParam(value = "ID профиля, по которому будет извлекаться объект профиля", required = true) @PathVariable Long id) {
        Optional<Profile> profile = profileService.getProfileById(id);
        return profile.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @ApiOperation(value = "Создать новый профиль")
    @PreAuthorize("hasRole('ROLE_APPLICANT')")
    @PostMapping
    public ResponseEntity<String> createProfile(
            @ApiParam(value = "Имя", required = true) @RequestParam("firstName") String firstName,
            @ApiParam(value = "Фамилия", required = true) @RequestParam("lastName") String lastName,
            @ApiParam(value = "Отчество", required = true) @RequestParam("middleName") String middleName,
            @ApiParam(value = "Дата рождения в формате dd.MM.yyyy", required = true) @RequestParam("birthDate") String birthDate,
            @ApiParam(value = "Город", required = true) @RequestParam("city") String city,
            @ApiParam(value = "Номер телефона", required = true) @RequestParam("phoneNumber") String phoneNumber,
            @ApiParam(value = "Email", required = true) @RequestParam("email") String email,
            @ApiParam(value = "Ссылка на VK", required = true) @RequestParam("vkLink") String vkLink,
            @ApiParam(value = "Ссылка на Telegram", required = true) @RequestParam("telegramLink") String telegramLink,
            @ApiParam(value = "Ссылка на WhatsApp", required = true) @RequestParam("whatsappLink") String whatsappLink/*,
            @ApiParam(value = "Фотография профиля", required = true) @RequestParam("photo") MultipartFile photo,
            @ApiParam(value = "Файл резюме", required = true) @RequestParam("resumeFile") MultipartFile resumeFile*/) throws IOException {
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
/*        profile.setPhoto(photo.getBytes());
        profile.setResumeFile(resumeFile.getBytes());*/

        profileService.createOrUpdateProfile(profile);
        return ResponseEntity.ok("Профиль успешно создан");
    }

    @ApiOperation(value = "Обновить существующий профиль")
    @PreAuthorize("hasRole('ROLE_APPLICANT')")
    @PutMapping("/{id}")
    public ResponseEntity<Profile> updateProfile(
            @ApiParam(value = "ID профиля для обновления объекта профиля", required = true) @PathVariable Long id,
            @ApiParam(value = "Имя", required = true) @RequestParam("firstName") String firstName,
            @ApiParam(value = "Фамилия", required = true) @RequestParam("lastName") String lastName,
            @ApiParam(value = "Отчество", required = true) @RequestParam("middleName") String middleName,
            @ApiParam(value = "Дата рождения в формате dd.MM.yyyy", required = true) @RequestParam("birthDate") String birthDate,
            @ApiParam(value = "Город", required = true) @RequestParam("city") String city,
            @ApiParam(value = "Номер телефона", required = true) @RequestParam("phoneNumber") String phoneNumber,
            @ApiParam(value = "Email", required = true) @RequestParam("email") String email,
            @ApiParam(value = "Ссылка на VK", required = true) @RequestParam("vkLink") String vkLink,
            @ApiParam(value = "Ссылка на Telegram", required = true) @RequestParam("telegramLink") String telegramLink,
            @ApiParam(value = "Ссылка на WhatsApp", required = true) @RequestParam("whatsappLink") String whatsappLink/*,
            @ApiParam(value = "Фотография профиля", required = true) @RequestParam("photo") MultipartFile photo,
            @ApiParam(value = "Файл резюме", required = true) @RequestParam("resumeFile") MultipartFile resumeFile*/) throws IOException {
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
/*            profile.setPhoto(photo.getBytes());
            profile.setResumeFile(resumeFile.getBytes());*/

            return ResponseEntity.ok(profileService.createOrUpdateProfile(profile));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @ApiOperation(value = "Удалить профиль по ID")
    @PreAuthorize("hasRole('ROLE_APPLICANT')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProfile(
            @ApiParam(value = "ID профиля, по которому объект профиля будет удален из базы данных", required = true) @PathVariable Long id) {
        profileService.deleteProfile(id);
        return ResponseEntity.noContent().build();
    }
}
