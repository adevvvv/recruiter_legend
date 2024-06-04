# Используем базовый образ Maven для сборки проекта
FROM maven:latest as builder

# Копируем файлы проекта в контейнер
COPY . /app

# Устанавливаем рабочую директорию
WORKDIR /app

# Собираем проект с помощью Maven
RUN mvn clean package

# Используем базовый образ OpenJDK 21 для выполнения приложения
FROM openjdk:21

# Установка рабочей директории внутри контейнера
WORKDIR /app

# Копируем собранный JAR-файл из предыдущего этапа в контейнер
COPY --from=builder /app/target/recruiter_legend-0.0.1-SNAPSHOT.jar /app/recruiter_legend.jar

# Определение команды для запуска приложения
CMD ["java", "-jar", "recruiter_legend.jar"]
