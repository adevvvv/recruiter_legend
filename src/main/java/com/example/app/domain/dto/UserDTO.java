package com.example.app.domain.dto;

import com.example.app.domain.model.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private String username;
    private String password;
    private String email;
    private Role role;
}