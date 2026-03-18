package com.jfs.zip_kart.repository;


import com.jfs.zip_kart.entity.CGUUsersData;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<CGUUsersData, Integer> {
    
}