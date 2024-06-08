package com.example.app.repository;

import com.example.app.domain.model.Resume;
import org.springframework.data.jpa.repository.JpaRepository;

// ResumeRepository.java
public interface ResumeRepository extends JpaRepository<Resume, Long> {
}

