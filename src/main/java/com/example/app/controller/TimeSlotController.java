package com.example.app.controller;

import com.example.app.domain.model.TimeSlot;
import com.example.app.service.TimeSlotService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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

    @Operation(summary = "Получить все временные слоты")
    @GetMapping
    public List<TimeSlot> getAllTimeSlots() {
        return timeSlotService.getAllTimeSlots();
    }

    @Operation(summary = "Получить доступные временные слоты")
    @GetMapping("/available")
    public List<TimeSlot> getAvailableTimeSlots() {
        return timeSlotService.getAvailableTimeSlots();
    }

    @Operation(summary = "Забронировать временной слот")
    @PostMapping("/{id}")
    public TimeSlot bookTimeSlot(
            @Parameter(description = "ID временного слота для бронирования", required = true) @PathVariable Long id) {
        return timeSlotService.bookTimeSlot(id);
    }

}
