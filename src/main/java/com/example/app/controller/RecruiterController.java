package com.example.app.controller;

import com.example.app.domain.dto.RecruiterProfileDTO;
import com.example.app.domain.model.Profile;
import com.example.app.domain.model.Response;
import com.example.app.domain.model.TimeSlot;
import com.example.app.service.ProfileService;
import com.example.app.service.RecruiterService;
import com.example.app.service.ResponseService;
import com.example.app.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/recruiters")
@Tag(name = "Личный кабинет рекрутера")
public class RecruiterController {

    @Autowired
    private UserService userService;

    @Autowired
    private RecruiterService recruiterService;

    @Autowired
    private ResponseService responseService;

    @Autowired
    private ProfileService profileService;

    @Operation(summary = "Получить профиль рекрутера по ID")
    @GetMapping("/profile/{id}")
    public ResponseEntity<RecruiterProfileDTO> getRecruiterProfile(
            @Parameter(description = "ID профиля рекрутера", required = true)
            @PathVariable Long id) {
        return profileService.getProfileById(id)
                .map(this::mapToRecruiterProfileDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @Operation(summary = "Обновить профиль рекрутера по ID")
    @PatchMapping("/profile/{id}")
    public ResponseEntity<RecruiterProfileDTO> updateRecruiterProfile(
            @Parameter(description = "ID профиля рекрутера", required = true)
            @PathVariable Long id,
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Обновленные данные профиля", required = true,
                    content = @Content(schema = @Schema(implementation = RecruiterProfileDTO.class)))
            @RequestBody RecruiterProfileDTO recruiterProfileDTO) {
        Profile updatedProfile = profileService.updateProfile(id, mapToProfile(recruiterProfileDTO));
        RecruiterProfileDTO updatedDTO = mapToRecruiterProfileDTO(updatedProfile);
        return ResponseEntity.ok(updatedDTO);
    }

    private RecruiterProfileDTO mapToRecruiterProfileDTO(Profile profile) {
        RecruiterProfileDTO dto = new RecruiterProfileDTO();
        dto.setId(profile.getId());
        dto.setFirstName(profile.getFirstName());
        dto.setLastName(profile.getLastName());
        dto.setPosition(profile.getPosition());
        return dto;
    }

    private Profile mapToProfile(RecruiterProfileDTO dto) {
        Profile profile = new Profile();
        profile.setFirstName(dto.getFirstName());
        profile.setLastName(dto.getLastName());
        profile.setPosition(dto.getPosition());
        return profile;
    }

    @Operation(summary = "Получить все временные слоты")
    @GetMapping("/timeslots")
    public List<TimeSlot> getAllTimeSlots() {
        return recruiterService.getAllTimeSlots();
    }

    @Operation(summary = "Получить доступные временные слоты")
    @GetMapping("/timeslots/available")
    public List<TimeSlot> getAvailableTimeSlots() {
        return recruiterService.getAvailableTimeSlots();
    }

    @Operation(summary = "Создать новый временной слот")
    @PostMapping("/timeslots/create")
    public ResponseEntity<TimeSlot> createTimeSlot(
            @Parameter(description = "Время начала временного слота", required = true)
            @RequestParam LocalDateTime startTime,
            @Parameter(description = "Время окончания временного слота", required = true)
            @RequestParam LocalDateTime endTime,
            @Parameter(description = "Доступность временного слота", required = true)
            @RequestParam boolean isAvailable) {
        TimeSlot createdSlot = recruiterService.createTimeSlot(startTime, endTime, isAvailable);
        return ResponseEntity.ok(createdSlot);
    }

    @Operation(summary = "Удалить временной слот по ID")
    @DeleteMapping("/timeslots/{id}")
    public ResponseEntity<Void> deleteTimeSlot(
            @Parameter(description = "ID временного слота для удаления", required = true)
            @PathVariable Long id) {
        recruiterService.deleteTimeSlot(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Получить все отклики с профилями")
    @GetMapping("/responses")
    public ResponseEntity<List<Response>> getAllResponsesWithProfiles() {
        List<Response> responses = responseService.getAllResponsesWithProfile();
        return ResponseEntity.ok(responses);
    }
}
