package com.example.app.repository;

import com.example.app.domain.model.Education;
import org.springframework.data.jpa.repository.JpaRepository;

// EducationRepository.java
public interface EducationRepository extends JpaRepository<Education, Long> {
}
