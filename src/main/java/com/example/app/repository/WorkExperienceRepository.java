package com.example.app.repository;

import com.example.app.domain.model.WorkExperience;
import org.springframework.data.jpa.repository.JpaRepository;

// WorkExperienceRepository.java
public interface WorkExperienceRepository extends JpaRepository<WorkExperience, Long> {
}
