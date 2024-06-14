package com.example.app.controller;

import com.example.app.domain.model.TimeSlot;
import com.example.app.service.TimeSlotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/timeslots")
public class TimeSlotController {

    @Autowired
    private TimeSlotService timeSlotService;

    @GetMapping
    public List<TimeSlot> getAllTimeSlots() {
        return timeSlotService.getAllTimeSlots();
    }

    @GetMapping("/available")
    public List<TimeSlot> getAvailableTimeSlots() {
        return timeSlotService.getAvailableTimeSlots();
    }

    @PostMapping("/book/{id}")
    public ResponseEntity<TimeSlot> bookTimeSlot(@PathVariable Long id, @RequestParam String username) {
        TimeSlot bookedSlot = timeSlotService.bookTimeSlot(id, username);
        return ResponseEntity.ok(bookedSlot);
    }

    @PostMapping
    public ResponseEntity<TimeSlot> createTimeSlot(@RequestParam LocalDateTime startTime,
                                                   @RequestParam LocalDateTime endTime,
                                                   @RequestParam boolean isAvailable) {
        TimeSlot createdSlot = timeSlotService.createTimeSlot(startTime, endTime, isAvailable);
        return ResponseEntity.ok(createdSlot);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTimeSlot(@PathVariable Long id) {
        timeSlotService.deleteTimeSlot(id);
        return ResponseEntity.noContent().build();
    }
}
