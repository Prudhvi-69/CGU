package com.jfs.tomato.repository;
import com.jfs.tomato.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
public interface StudentRep extends JpaRepository<Student, Integer>{
    
}
/*
Integer : To use the type of primary key which is int in Student class
        ** To use findById() method of JpaRepository 
*/
