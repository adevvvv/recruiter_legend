package com.example.app.domain.dto;

import com.example.app.domain.model.Role;
import com.example.app.domain.model.User;

public record UserDetailsWithRole(User user, Role role) {
}