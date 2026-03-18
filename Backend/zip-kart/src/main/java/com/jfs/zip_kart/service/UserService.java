package com.jfs.zip_kart.service;

import com.jfs.zip_kart.entity.CGUUsersData;
import com.jfs.zip_kart.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;
//  UserRepo userRepo = new UserRepo();  //creating an object of the UserRepo class to access the functions of that class
    

    public CGUUsersData addUser(CGUUsersData user){
        return userRepo.save(user);
    }
    
    public List<CGUUsersData> getAllUsers(){
        return userRepo.findAll();
    }
    
    public CGUUsersData getUserByID(int ID){
        return userRepo.findById(ID).orElse(null);
    }
}
