package com.example.app.repository;

import com.example.app.domain.model.Language;
import org.springframework.data.jpa.repository.JpaRepository;

// LanguageRepository.java
public interface LanguageRepository extends JpaRepository<Language, Long> {
}
