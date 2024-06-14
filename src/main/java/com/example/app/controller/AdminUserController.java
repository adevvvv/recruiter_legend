package com.example.app.controller;

import com.example.app.domain.dto.JwtAuthenticationResponse;
import com.example.app.domain.dto.SignUpRequest;
import com.example.app.domain.dto.UserDTO;
import com.example.app.domain.model.User;
import com.example.app.service.AdminService;
import com.example.app.service.AuthenticationService;
import com.example.app.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/admin/users")
@Tag(name = "Панель администратора")
public class AdminUserController {

    private final UserService userService;
    private final AdminService adminService;


    @Operation(summary = "Получить всех пользователей")
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @Operation(summary = "Поиск пользователей по имени пользователя")
    @GetMapping("/search")
    public ResponseEntity<List<User>> searchUsersByUsername(
            @Parameter(description = "Имя пользователя для поиска", required = true)
            @RequestParam String username) {
        List<User> users = userService.searchUsersByUsername(username);
        if (!users.isEmpty()) {
            return ResponseEntity.ok(users);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Operation(summary = "Создать рекрутера")
    @PostMapping("/create-recruiter")
    public JwtAuthenticationResponse createRecruiter(@RequestBody @Valid SignUpRequest request) {
        return adminService.createRecruiter(request);
    }
    @Operation(summary = "Создать админа")
    @PostMapping("/create-admin")
    public JwtAuthenticationResponse createAdmin(@RequestBody @Valid SignUpRequest request) {
        return adminService.createAdmin(request);
    }

    @Operation(summary = "Удалить пользователя по идентификатору")
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(
            @Parameter(description = "Идентификатор пользователя для удаления", required = true)
            @PathVariable Long userId) {
        userService.deleteUser(userId);
        return ResponseEntity.ok().build();
    }
}
