package com.jfs.tomato.service;
import com.jfs.tomato.entity.Student;
import org.springframework.stereotype.Service;
import com.jfs.tomato.repository.StudentRep;
import java.util.List;
@Service    
public class StudentService {
    private final StudentRep studentRep;
    StudentService(StudentRep studentRep){
        this.studentRep = studentRep;
    }
    public void addStudent(Student student){
        studentRep.save(student);
    }
    public List<Student> getAllStudents(){
        return studentRep.findAll();
    }
/*
C : to create we use save() method of JpaRepository
R : to read we use findById() and findAll() methods 
U : to update we use save() method of JpaRepository
D : to delete we use deleteById() method 
*/



}
