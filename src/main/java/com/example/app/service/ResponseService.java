package com.example.app.service;

import com.example.app.domain.model.Response;
import com.example.app.repository.ResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponseService {

    @Autowired
    private ResponseRepository responseRepository;

    public List<Response> getAllResponsesWithProfile() {
        return responseRepository.findAll();
    }
}