package com.example.app.service;

import com.example.app.domain.model.Resume;
import com.example.app.repository.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResumeService {
    @Autowired
    private ResumeRepository resumeRepository;

    public Resume createResume(Resume resume) {
        return resumeRepository.save(resume);
    }

    public List<Resume> getAllResumes() {
        return resumeRepository.findAll();
    }

    public Resume getResumeById(Long id) {
        return resumeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Resume not found"));
    }

    public Resume updateResume(Long id, Resume resumeDetails) {
        Resume resume = resumeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Resume not found"));
        // Update fields
        return resumeRepository.save(resume);
    }

    public void deleteResume(Long id) {
        Resume resume = resumeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Resume not found"));
        resumeRepository.delete(resume);
    }
}