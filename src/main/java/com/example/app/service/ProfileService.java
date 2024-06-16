package com.example.app.service;

import com.example.app.domain.model.Profile;
import com.example.app.domain.model.User;
import com.example.app.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProfileService {

    @Autowired
    private UserService userService;

    @Autowired
    private ProfileRepository profileRepository;

    public List<Profile> getAllProfiles() {
        return profileRepository.findAll();
    }

    public Optional<Profile> getProfileById(Long id) {
        return profileRepository.findById(id);
    }

    @Transactional
    public Profile createOrUpdateProfile(Profile profile) {
        User currentUser = userService.getCurrentUser();
        profile.setUser(currentUser);
        return profileRepository.save(profile);
    }

    @Transactional
    public void deleteProfile(Long id) {
        profileRepository.deleteById(id);
    }

    @Transactional
    public Profile updateProfile(Profile profile) {
        return profileRepository.save(profile);
    }
}
