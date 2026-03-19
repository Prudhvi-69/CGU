package com.jfs.tomato.controller;

import com.jfs.tomato.service.StudentService;
import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*; //Imports GetMapping, PutMapping, PostMapping, DeleteMapping annotations
import org.springframework.beans.factory.annotation.Autowired;
import com.jfs.tomato.entity.Student;


@RestController
@RequestMapping("/students") // to map the URL to this controller
public class StudentController {
    
    @Autowired
    StudentService studentService; // creating an object of StudentService class to use its methods

    @PostMapping("/add") // to map the URL to this method : localhost:8080/students/add
    public void addStudent(@RequestBody Student student){
        studentService.addStudent(student); // calling addStudent() method of StudentService class to add a student to the connected database
    }
    @GetMapping("/show") // to map the URL to this method : localhost:8080/students/show
    public List<Student> showStudent(){
        return studentService.getAllStudents();
    }
    @GetMapping("/show/{ID}")
    public Student showOneStudent(@PathVariable int ID  )
    {
        return studentService.getOneStudent(ID).orElse(null);
    }   
}