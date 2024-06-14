package com.example.app.service;

import com.example.app.domain.dto.UserDTO;
import com.example.app.domain.model.TimeSlot;
import com.example.app.domain.model.User;
import com.example.app.repository.TimeSlotRepository;
import com.example.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RecruiterService {

    @Autowired
    private TimeSlotRepository timeSlotRepository;

    public List<TimeSlot> getAllTimeSlots() {
        return timeSlotRepository.findAll();
    }

    public List<TimeSlot> getAvailableTimeSlots() {
        return timeSlotRepository.findByIsAvailable(true);
    }

    public TimeSlot bookTimeSlot(Long id, String username) {
        TimeSlot timeSlot = timeSlotRepository.findById(id).orElseThrow(() -> new RuntimeException("Time slot not found"));
        if (!timeSlot.isAvailable()) {
            throw new RuntimeException("Time slot is already booked");
        }
        timeSlot.setAvailable(false);
        timeSlot.setBookedBy(username);
        return timeSlotRepository.save(timeSlot);
    }

    public TimeSlot createTimeSlot(LocalDateTime startTime, LocalDateTime endTime, boolean isAvailable) {
        TimeSlot timeSlot = new TimeSlot();
        timeSlot.setStartTime(startTime);
        timeSlot.setEndTime(endTime);
        timeSlot.setAvailable(isAvailable);
        return timeSlotRepository.save(timeSlot);
    }

    public void deleteTimeSlot(Long id) {
        timeSlotRepository.deleteById(id);
    }


}