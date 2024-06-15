package com.example.app.controller;

//import com.example.app.domain.model.TimeSlot;
//import com.example.app.service.TimeSlotService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import com.google.gson.Gson;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/vacancies")
public class VacanciesController {

    // @Autowired
    // private TimeSlotService timeSlotService;

    @GetMapping
    public String getAllVacancies() throws IOException {
        String url = "https://rntgroup.com/career/vacancies";
        Document doc = Jsoup.connect(url).get();
        Elements vacancies = doc.select("div.col-12.tariff");
        List<Map<String, String>> jsonObjects = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            String title = vacancies.get(i).selectFirst("span.tariff-title.block-el-title").text();
            String type = vacancies.get(i).selectFirst("div.tariff-stickers").text();

            Map<String, String> jsonObject = new HashMap<>();
            jsonObject.put("title", title);
            jsonObject.put("type", type);
            jsonObjects.add(jsonObject);

        }
        Gson gson = new Gson();
        return gson.toJson(jsonObjects);
    }
}
