package com.jfs.tomato.service;
import com.jfs.tomato.entity.Student;
import org.springframework.stereotype.Service;
import com.jfs.tomato.repository.StudentRep;
import org.springframework.beans.factory.annotation.Autowired;
@Service    
public class StudentService {
    @Autowired 
    private StudentRep studentRep; // creating an object of StudentRep interface to use its methods
    //StudentRep studentRep = new StudentRep(); // we cannot create an object of interface so we use @Autowired to create an object of the class which implements this interface and use its methods
    StudentService(StudentRep studentRep){ // constructor to initialize the object of StudentRep interface
        this.studentRep = studentRep;
    }
    public void addStudent(Student student){
        studentRep.save(student); // save() method is used to save the data in the connected database
    }
    public void getAllStudents(){
        studentRep.findAll(); // findAll() method is used to get all the data from the connected database
    }
/*
C : to create we use save() method of JpaRepository
R : to read we use findById() and findAll() methods 
U : to update we use save() method of JpaRepository
D : to delete we use deleteById() method 
*/



}
