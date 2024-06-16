package com.example.app.service;

import com.example.app.domain.dto.JwtAuthenticationResponse;
import com.example.app.domain.dto.SignInRequest;
import com.example.app.domain.dto.SignUpRequest;
import com.example.app.domain.model.Role;
import com.example.app.domain.model.User;
import com.example.app.utils.MessageException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserService userService;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public JwtAuthenticationResponse signUp(SignUpRequest request) {
        try {
            var user = User.builder()
                    .username(request.getUsername())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(Role.ROLE_APPLICANT)
                    .build();

            userService.create(user);

            var jwt = jwtService.generateToken(user);
            return new JwtAuthenticationResponse(jwt, user.getRole().name());
        } catch (Exception e) {
            // Обработка конкретных исключений здесь, например, ConstraintViolationException, DataIntegrityViolationException
            throw new MessageException("Ошибка при регистрации пользователя: " + e.getMessage());
        }
    }

    public JwtAuthenticationResponse signIn(SignInRequest request) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    request.getUsername(),
                    request.getPassword()
            ));

            var user = userService
                    .userDetailsService()
                    .loadUserByUsername(request.getUsername());

            var jwt = jwtService.generateToken(user);
            return new JwtAuthenticationResponse(jwt, ((User) user).getRole().name());
        } catch (UsernameNotFoundException | BadCredentialsException e) {
            throw new MessageException("Неверные имя пользователя или пароль" + e.getMessage());
        } catch (Exception e) {
            throw new MessageException("Ошибка аутентификации: " + e.getMessage());
        }
    }
}
