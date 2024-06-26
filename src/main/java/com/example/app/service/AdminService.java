package com.example.app.service;

import com.example.app.domain.dto.JwtAuthenticationResponse;
import com.example.app.domain.dto.SignUpRequest;
import com.example.app.domain.model.Role;
import com.example.app.domain.model.User;
import com.example.app.utils.MessageException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final UserService userService;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public JwtAuthenticationResponse createRecruiter(SignUpRequest request) {
        try {
            var user = User.builder()
                    .username(request.getUsername())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(Role.ROLE_RECRUITER)
                    .build();

            userService.create(user);

            var jwt = jwtService.generateToken(user);
            return new JwtAuthenticationResponse(jwt, user.getRole().name());
        } catch (Exception e) {
            throw new MessageException("Ошибка при создании рекрутера");
        }
    }

    public JwtAuthenticationResponse createAdmin(SignUpRequest request) {
        try {
            var user = User.builder()
                    .username(request.getUsername())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(Role.ROLE_ADMIN)
                    .build();

            userService.create(user);

            var jwt = jwtService.generateToken(user);
            return new JwtAuthenticationResponse(jwt, user.getRole().name());
        } catch (Exception e) {
            throw new MessageException("Ошибка при создании администратора");
        }
    }
}
