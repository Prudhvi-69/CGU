package com.jfs.zip_kart.service;

import com.jfs.zip_kart.entity.CGUUsersData;
import com.jfs.zip_kart.repository.UserRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepo userRepo;

    @InjectMocks
    private UserService userService;

    private CGUUsersData testUser;

    @BeforeEach
    public void setUp() {
        testUser = new CGUUsersData();
        testUser.setID(1);
        testUser.setName("Test User");
        testUser.setEmail("test@example.com");
    }

    @Test
    public void testAddUser_Success() {
        // Arrange
        when(userRepo.save(any(CGUUsersData.class))).thenReturn(testUser);

        // Act
        CGUUsersData result = userService.addUser(testUser);

        // Assert
        assertNotNull(result);
        assertEquals(1, result.getID());
        assertEquals("Test User", result.getName());
        assertEquals("test@example.com", result.getEmail());
        verify(userRepo, times(1)).save(any(CGUUsersData.class));
    }

    @Test
    public void testGetAllUsers_Success() {
        // Arrange
        CGUUsersData user2 = new CGUUsersData();
        user2.setID(2);
        user2.setName("Another User");
        user2.setEmail("another@example.com");

        List<CGUUsersData> usersList = Arrays.asList(testUser, user2);
        when(userRepo.findAll()).thenReturn(usersList);

        // Act
        List<CGUUsersData> result = userService.getAllUsers();

        // Assert
        assertNotNull(result);
        assertEquals(2, result.size());
        assertEquals("Test User", result.get(0).getName());
        assertEquals("Another User", result.get(1).getName());
        verify(userRepo, times(1)).findAll();
    }

    @Test
    public void testGetAllUsers_EmptyList() {
        // Arrange
        when(userRepo.findAll()).thenReturn(Arrays.asList());

        // Act
        List<CGUUsersData> result = userService.getAllUsers();

        // Assert
        assertNotNull(result);
        assertEquals(0, result.size());
        verify(userRepo, times(1)).findAll();
    }

    @Test
    public void testGetUserByID_Success() {
        // Arrange
        when(userRepo.findById(1)).thenReturn(Optional.of(testUser));

        // Act
        CGUUsersData result = userService.getUserByID(1);

        // Assert
        assertNotNull(result);
        assertEquals(1, result.getID());
        assertEquals("Test User", result.getName());
        verify(userRepo, times(1)).findById(1);
    }

    @Test
    public void testGetUserByID_NotFound() {
        // Arrange
        when(userRepo.findById(999)).thenReturn(Optional.empty());

        // Act
        CGUUsersData result = userService.getUserByID(999);

        // Assert
        assertNull(result);
        verify(userRepo, times(1)).findById(999);
    }

    @Test
    public void testAddMultipleUsers() {
        // Arrange
        CGUUsersData user2 = new CGUUsersData();
        user2.setID(2);
        user2.setName("Second User");
        user2.setEmail("second@example.com");

        when(userRepo.save(testUser)).thenReturn(testUser);
        when(userRepo.save(user2)).thenReturn(user2);

        // Act
        CGUUsersData result1 = userService.addUser(testUser);
        CGUUsersData result2 = userService.addUser(user2);

        // Assert
        assertNotNull(result1);
        assertNotNull(result2);
        assertEquals("Test User", result1.getName());
        assertEquals("Second User", result2.getName());
        verify(userRepo, times(2)).save(any(CGUUsersData.class));
    }
}
