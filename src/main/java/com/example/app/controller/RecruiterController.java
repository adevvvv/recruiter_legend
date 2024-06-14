package com.example.app.controller;

import com.example.app.domain.dto.RecruiterProfileDTO;
import com.example.app.domain.dto.UserDTO;
import com.example.app.domain.model.*;
import com.example.app.service.ProfileService;
import com.example.app.service.ResponseService;
import com.example.app.service.TimeSlotService;
import com.example.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/recruiter")
public class RecruiterController {
    @Autowired
    private UserService userService;
    private TimeSlotService timeSlotService;

    @Autowired
    private ResponseService responseService;


    @Autowired
    private ProfileService profileService;

    @GetMapping("/{id}")
    public ResponseEntity<RecruiterProfileDTO> getRecruiterProfile(@PathVariable Long id) {
        return profileService.getProfileById(id)
                .map(profile -> {
                    RecruiterProfileDTO dto = mapToRecruiterProfileDTO(profile);
                    return ResponseEntity.ok(dto);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<RecruiterProfileDTO> updateRecruiterProfile(@PathVariable Long id,
                                                                      @RequestBody RecruiterProfileDTO recruiterProfileDTO) {
        return profileService.getProfileById(id)
                .map(profile -> {
                    profile.setFirstName(recruiterProfileDTO.getUsername());
                    profile.setLastName(recruiterProfileDTO.getUsername());
                    profile.setPosition(recruiterProfileDTO.getPosition());
                    profile.setPhoto(recruiterProfileDTO.getPhoto());
                    Profile updatedProfile = profileService.updateProfile(profile);
                    RecruiterProfileDTO updatedDTO = mapToRecruiterProfileDTO(updatedProfile);
                    return ResponseEntity.ok(updatedDTO);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    private RecruiterProfileDTO mapToRecruiterProfileDTO(Profile profile) {
        RecruiterProfileDTO dto = new RecruiterProfileDTO();
        dto.setId(profile.getId());
        dto.setUsername(profile.getFirstName());
        dto.setUsername(profile.getLastName());
        dto.setPosition(profile.getPosition());
        dto.setPhoto(profile.getPhoto());
        return dto;
    }

    @GetMapping("/timeslots")
    public List<TimeSlot> getAllTimeSlots() {
        return timeSlotService.getAllTimeSlots();
    }

    @GetMapping("/timeslots/available")
    public List<TimeSlot> getAvailableTimeSlots() {
        return timeSlotService.getAvailableTimeSlots();
    }

    @PostMapping("/timeslots/create")
    public ResponseEntity<TimeSlot> createTimeSlot(@RequestParam LocalDateTime startTime,
                                                   @RequestParam LocalDateTime endTime,
                                                   @RequestParam boolean isAvailable) {
        TimeSlot createdSlot = timeSlotService.createTimeSlot(startTime, endTime, isAvailable);
        return ResponseEntity.ok(createdSlot);
    }

    @DeleteMapping("/timeslots/{id}")
    public ResponseEntity<Void> deleteTimeSlot(@PathVariable Long id) {
        timeSlotService.deleteTimeSlot(id);
        return ResponseEntity.noContent().build();
    }


    @GetMapping("/applicant/{id}")
    public ResponseEntity<List<Response>> getAllResponsesWithProfile() {
        List<Response> responses = responseService.getAllResponsesWithProfile();
        return ResponseEntity.ok(responses);
    }
}
