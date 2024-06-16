package com.example.app.service;

import com.example.app.domain.model.Response;
import com.example.app.repository.ResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class ResponseService {

    @Autowired
    private ResponseRepository responseRepository;

    public List<Response> getAllResponsesWithProfile() {
        try {
            return responseRepository.findAll();
        } catch (Exception e) {
            System.err.println("Ошибка при получении списка ответов: " + e.getMessage());
            return Collections.emptyList();
        }
    }
}
