package com.example.app.controller;


import com.example.app.domain.model.TimeSlot;
import com.example.app.service.TimeSlotService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/timeslots")
@Tag(name = "Календарь для соискателя")
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
    public TimeSlot bookTimeSlot(@PathVariable Long id) {
        return timeSlotService.bookTimeSlot(id);
    }

    @PostMapping
    public TimeSlot createTimeSlot(@RequestBody TimeSlot timeSlot) {
        return timeSlotService.createTimeSlot(timeSlot.getStartTime(), timeSlot.getEndTime(), timeSlot.isAvailable());
    }
}