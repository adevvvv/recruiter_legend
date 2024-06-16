package com.example.app.service;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class VacanciesService {

    public List<Map<String, String>> getAllVacancies() {
        String url = "https://rntgroup.com/career/vacancies";
        List<Map<String, String>> jsonObjects = new ArrayList<>();
        try {
            Document doc = Jsoup.connect(url).get();
            Elements vacancies = doc.select("div.col-12.tariff");
            for (int i = 0; i < 20; i++) {
                try {
                    String title = vacancies.get(i).selectFirst("span.tariff-title.block-el-title").text();
                    String type = vacancies.get(i).selectFirst("div.tariff-stickers").text();
                    Element tasks = vacancies.get(i).selectFirst("div.theme-ul");
                    List<String> taskList = new ArrayList<>();
                    for (Element task : tasks.select("li")) {
                        taskList.add(task.text());
                    }
                    Map<String, String> jsonObject = new HashMap<>();
                    jsonObject.put("title", title);
                    jsonObject.put("type", type);
                    jsonObject.put("tasks", String.valueOf(taskList));
                    jsonObjects.add(jsonObject);
                } catch (IndexOutOfBoundsException e) {
                    System.err.println("Недостаточно элементов вакансий на странице: " + e.getMessage());
                    break;
                } catch (NullPointerException e) {
                    System.err.println("Не удалось извлечь один из элементов вакансии: " + e.getMessage());
                }
            }
        } catch (IOException e) {
            System.err.println("Ошибка при подключении к " + url + ": " + e.getMessage());
        }
        return jsonObjects;
    }
}
