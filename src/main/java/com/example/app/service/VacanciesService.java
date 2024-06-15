package com.example.app.service;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class VacanciesService {

    public List<Map<String, String>> getAllVacancies() throws IOException {
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
        return jsonObjects;
    }
}
