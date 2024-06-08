package com.example.app.repository;

import com.example.app.domain.model.TimeSlot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface TimeSlotRepository extends JpaRepository<TimeSlot, Long> {
    List<TimeSlot> findByIsAvailable(boolean isAvailable);
    List<TimeSlot> findByStartTimeBetween(LocalDateTime start, LocalDateTime end);
}