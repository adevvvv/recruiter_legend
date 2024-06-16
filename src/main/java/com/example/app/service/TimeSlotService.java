package com.example.app.service;

import com.example.app.domain.model.TimeSlot;
import com.example.app.repository.TimeSlotRepository;
import com.example.app.utils.MessageException;
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

    public TimeSlot getTimeSlotById(Long id) {
        return timeSlotRepository.findById(id)
                .orElseThrow(() -> new MessageException("Временной слот с id " + id + " не найден"));
    }

    public TimeSlot bookTimeSlot(Long id, String username) {
        TimeSlot timeSlot = getTimeSlotById(id);

        if (!timeSlot.isAvailable()) {
            throw new MessageException("Временной слот с id " + id + " уже забронирован");
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
        if (!timeSlotRepository.existsById(id)) {
            throw new MessageException("Временной слот с id " + id + " не найден");
        }
        timeSlotRepository.deleteById(id);
    }
}
