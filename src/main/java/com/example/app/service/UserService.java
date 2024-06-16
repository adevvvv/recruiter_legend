package com.example.app.service;

import com.example.app.domain.dto.UserDTO;
import com.example.app.domain.dto.UserDetailsWithRole;
import com.example.app.domain.model.User;
import com.example.app.repository.UserRepository;
import com.example.app.utils.MessageException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;

    @Transactional
    public User createUser(UserDTO userDTO) {
        if (repository.existsByUsername(userDTO.getUsername())) {
            throw new MessageException("Пользователь с таким именем уже существует");
        }

        if (repository.existsByEmail(userDTO.getEmail())) {
            throw new MessageException("Пользователь с таким email уже существует");
        }

        User user = User.builder()
                .username(userDTO.getUsername())
                .password(userDTO.getPassword())
                .email(userDTO.getEmail())
                .role(userDTO.getRole())
                .build();
        return repository.save(user);
    }

    public User updateUser(Long id, UserDTO userDTO) {
        return repository.findById(id)
                .map(user -> {
                    user.setUsername(userDTO.getUsername());
                    user.setPassword(userDTO.getPassword());
                    user.setEmail(userDTO.getEmail());
                    user.setRole(userDTO.getRole());
                    user.setPosition(userDTO.getPosition());
                    return repository.save(user);
                })
                .orElseThrow(() -> new MessageException("Пользователь с идентификатором не найден: " + id));
    }

    @Transactional
    public void deleteUser(Long userId) {
        if (!repository.existsById(userId)) {
            throw new MessageException("Пользователь с идентификатором не найден: " + userId);
        }
        repository.deleteById(userId);
    }

    @Transactional(readOnly = true)
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Transactional(readOnly = true)
    public List<User> searchUsersByUsername(String username) {
        return repository.findByUsernameContainingIgnoreCase(username);
    }

    public User save(User user) {
        if (repository.existsByUsername(user.getUsername())) {
            throw new MessageException("Пользователь с таким именем уже существует");
        }

        if (repository.existsByEmail(user.getEmail())) {
            throw new MessageException("Пользователь с таким email уже существует");
        }

        return repository.save(user);
    }

    public User create(User user) {
        if (repository.existsByUsername(user.getUsername())) {
            throw new MessageException("Пользователь с таким именем уже существует");
        }

        if (repository.existsByEmail(user.getEmail())) {
            throw new MessageException("Пользователь с таким email уже существует");
        }

        return save(user);
    }

    public User getByUsername(String username) {
        return repository.findByUsername(username)
                .orElseThrow(() -> new MessageException("Пользователь не найден"));
    }

    public Optional<User> getUserById(Long id) {
        return repository.findById(id);
    }

    public UserDetailsService userDetailsService() {
        return this::getByUsername;
    }

    public User getCurrentUser() {
        var username = SecurityContextHolder.getContext().getAuthentication().getName();
        return getByUsername(username);
    }

    public UserDetailsWithRole getCurrentUserWithRole() {
        var username = SecurityContextHolder.getContext().getAuthentication().getName();
        var user = getByUsername(username);
        return new UserDetailsWithRole(user, user.getRole());
    }
}
