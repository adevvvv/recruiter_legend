package com.example.app.controller;

import com.example.app.domain.model.TimeSlot;
import com.example.app.service.TimeSlotService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/timeslots")
@Tag(name = "Календарь")
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
    @PostMapping("/book/{id}")
    public ResponseEntity<TimeSlot> bookTimeSlot(
            @Parameter(description = "ID временного слота для бронирования", required = true)
            @PathVariable Long id,
            @Parameter(description = "Имя пользователя, который бронирует слот", required = true)
            @RequestParam String username) {
        TimeSlot bookedSlot = timeSlotService.bookTimeSlot(id, username);
        return ResponseEntity.ok(bookedSlot);
    }

    @Operation(summary = "Создать новый временной слот")
    @PostMapping
    public ResponseEntity<TimeSlot> createTimeSlot(
            @Parameter(description = "Время начала временного слота", required = true)
            @RequestParam LocalDateTime startTime,
            @Parameter(description = "Время окончания временного слота", required = true)
            @RequestParam LocalDateTime endTime,
            @Parameter(description = "Доступность временного слота", required = true)
            @RequestParam boolean isAvailable) {
        TimeSlot createdSlot = timeSlotService.createTimeSlot(startTime, endTime, isAvailable);
        return ResponseEntity.ok(createdSlot);
    }

    @Operation(summary = "Удалить временной слот по ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTimeSlot(
            @Parameter(description = "ID временного слота для удаления", required = true)
            @PathVariable Long id) {
        timeSlotService.deleteTimeSlot(id);
        return ResponseEntity.noContent().build();
    }
}
