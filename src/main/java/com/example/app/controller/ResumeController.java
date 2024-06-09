package com.example.app.controller;

import com.example.app.domain.model.Resume;
import com.example.app.service.ResumeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/resume")
@Tag(name = "Заполнение резюме соискателя")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @Operation(summary = "Создать резюме")
    @PostMapping
    public ResponseEntity<Resume> createResume(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Данные резюме", required = true,
                    content = @Content(schema = @Schema(implementation = Resume.class))) @RequestBody Resume resume) {
        Resume createdResume = resumeService.createResume(resume);
        return ResponseEntity.ok(createdResume);
    }

    @Operation(summary = "Получить резюме по ID")
    @GetMapping("/{id}")
    public ResponseEntity<Resume> getResumeById(
            @Parameter(description = "ID резюме, по которому будет извлекаться объект резюме", required = true) @PathVariable Long id) {
        Resume resume = resumeService.getResumeById(id);
        return ResponseEntity.ok(resume);
    }

    @Operation(summary = "Обновить резюме")
    @PutMapping("/{id}")
    public ResponseEntity<Resume> updateResume(
            @Parameter(description = "ID резюме для обновления", required = true) @PathVariable Long id,
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Новые данные резюме", required = true,
                    content = @Content(schema = @Schema(implementation = Resume.class))) @RequestBody Resume resumeDetails) {
        Resume updatedResume = resumeService.updateResume(id, resumeDetails);
        return ResponseEntity.ok(updatedResume);
    }

    @Operation(summary = "Удалить резюме")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResume(
            @Parameter(description = "ID резюме, которое будет удалено", required = true) @PathVariable Long id) {
        resumeService.deleteResume(id);
        return ResponseEntity.noContent().build();
    }
}
