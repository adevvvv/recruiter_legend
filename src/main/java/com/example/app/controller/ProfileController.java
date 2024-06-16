package com.example.app.controller;

import com.example.app.domain.model.Profile;
import com.example.app.service.ProfileService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/profile")
@Tag(name = "Профиль соискателя")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @Operation(summary = "Создать профиль")
    @PostMapping
    public ResponseEntity<Profile> createProfile(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Данные профиля", required = true,
                    content = @Content(schema = @Schema(implementation = Profile.class))) @RequestBody Profile profile) {
        Profile createdProfile = profileService.createProfile(profile);
        return ResponseEntity.ok(createdProfile);
    }

    @Operation(summary = "Получить профиль по ID")
    @GetMapping("/{id}")
    public ResponseEntity<Profile> getProfileById(
            @Parameter(description = "ID профиля, по которому будет извлекаться объект профиля", required = true) @PathVariable Long id) {
        Optional<Profile> profileOptional = profileService.getProfileById(id);
        return profileOptional.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @Operation(summary = "Обновить профиль")
    @PatchMapping("/{id}")
    public ResponseEntity<Profile> updateProfile(
            @Parameter(description = "ID профиля для обновления", required = true) @PathVariable Long id,
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Новые данные профиля", required = true,
                    content = @Content(schema = @Schema(implementation = Profile.class))) @RequestBody Profile profileDetails) {
        Profile updatedProfile = profileService.updateProfile(id, profileDetails);
        return ResponseEntity.ok(updatedProfile);
    }

    @Operation(summary = "Удалить профиль")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProfile(
            @Parameter(description = "ID профиля, которое будет удалено", required = true) @PathVariable Long id) {
        profileService.deleteProfile(id);
        return ResponseEntity.noContent().build();
    }
}
