package com.example.app.controller;

import com.example.app.service.VacanciesService;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/vacancies")
@Tag(name = "Вакансии")
public class VacanciesController {

    private final VacanciesService vacanciesService;

    @Autowired
    public VacanciesController(VacanciesService vacanciesService) {
        this.vacanciesService = vacanciesService;
    }

    @Operation(summary = "Получить все вакансии")
    @GetMapping
    public List<Map<String, String>> getAllVacancies() throws IOException {
        return vacanciesService.getAllVacancies();
    }
}
