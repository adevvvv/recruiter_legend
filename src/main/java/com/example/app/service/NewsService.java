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
public class NewsService {

    public List<Map<String, String>> getAllNews() {
        String url = "https://habr.com/ru/news/";
        List<Map<String, String>> jsonObjects = new ArrayList<>();
        try {
            Document doc = Jsoup.connect(url).get();
            Elements newsElements = doc.select("div.tm-article-snippet.tm-article-snippet");
            for (int i = 0; i < 10; i++) {
                try {
                    String title = newsElements.get(i).select("h2.tm-title.tm-title_h2").select("span").text();
                    String img = newsElements.get(i).select("img.tm-article-snippet__lead-image").attr("src");
                    String text = newsElements.get(i).select("div.article-formatted-body.article-formatted-body.article-formatted-body_version-2").select("p").text();

                    Map<String, String> jsonObject = new HashMap<>();
                    jsonObject.put("title", title);
                    jsonObject.put("img", img);
                    jsonObject.put("text", text);
                    jsonObjects.add(jsonObject);
                } catch (IndexOutOfBoundsException e) {
                    System.err.println("Недостаточно новостных элементов на странице: " + e.getMessage());
                    break;
                }
            }
        } catch (IOException e) {
            System.err.println("Ошибка при подключении к " + url + ": " + e.getMessage());
        }
        return jsonObjects;
    }
}
