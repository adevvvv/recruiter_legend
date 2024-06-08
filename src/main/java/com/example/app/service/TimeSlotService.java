package com.example.app.service;


import com.example.app.domain.model.TimeSlot;
import com.example.app.repository.TimeSlotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TimeSlotService {

    @Autowired
    private TimeSlotRepository timeSlotRepository;

    public List<TimeSlot> getAllTimeSlots() {
        return timeSlotRepository.findAll();
    }

    public List<TimeSlot> getAvailableTimeSlots() {
        return timeSlotRepository.findByIsAvailable(true);
    }

    public TimeSlot bookTimeSlot(Long id) {
        TimeSlot timeSlot = timeSlotRepository.findById(id).orElseThrow(() -> new RuntimeException("Time slot not found"));
        if (!timeSlot.isAvailable()) {
            throw new RuntimeException("Time slot is already booked");
        }
        timeSlot.setAvailable(false);
        return timeSlotRepository.save(timeSlot);
    }

    public TimeSlot createTimeSlot(LocalDateTime startTime, LocalDateTime endTime, boolean isAvailable) {
        TimeSlot timeSlot = new TimeSlot();
        timeSlot.setStartTime(startTime);
        timeSlot.setEndTime(endTime);
        timeSlot.setAvailable(isAvailable);
        return timeSlotRepository.save(timeSlot);
    }
}