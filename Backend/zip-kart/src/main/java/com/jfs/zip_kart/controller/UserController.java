package com.jfs.zip_kart.controller;

import org.springframework.web.bind.annotation.RestController;
import com.jfs.zip_kart.service.UserService;
import com.jfs.zip_kart.entity.CGUUsersData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public CGUUsersData addStudent(@RequestBody CGUUsersData user)
    {
        return userService.addUser(user);
    }
    
    @GetMapping
    public List<CGUUsersData> getAllStudents(){
        return userService.getAllUsers();
    }
    
    @GetMapping("/{ID}")
    public CGUUsersData getUserByID(@PathVariable int ID){
        return userService.getUserByID(ID);
    }
}
