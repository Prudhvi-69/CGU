package com.jfs.tomato.entity; //creating a module called entity 
import jakarta.persistence.*;
@Entity   //assigns below class name as the table name in the connected DB
@Table(name = "BadStudents")
public class Student{
//Each variable will become a column in the table of the connected Database
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int ID;
    String name;  // becomes a column of char type
    String email; // becomes a column of char type 
    String address;
    int age;
    float attenDANCE;
   //Setter functions to setup the values in the variables 
    public Student(){ // default constructor
    }
    public Student(int ID, String name, String email, String address, int age, float attenDANCE){ // parameterized constructor to initialize the variables
        this.ID = ID;
        this.name = name;
        this.email = email;
        this.address = address;
        this.age = age;
        this.attenDANCE = attenDANCE;
    }
    public void setID(int ID){ this.ID = ID;}
    public void setName(String name) { this.name = name; }
    public void setEmail(String email) { this.email = email; }
    public void setAdd(String address) { this.address=address;}
    public void setAge(int age){ this.age=age;}
    public void setDance(float attenDance){this.attenDANCE=attenDance;}
   //Getter functions  
    public int getID() { return ID; }
    public String getName(){ return name; }
    public String getEmail(){ return email; } 
    public String getAdd(){ return address;}
    public int getAge(){ return age;}
    public float getDance(){ return attenDANCE;}

    /*
    pom.xml -> adding this dependency to make a connection to mySQL workbench
    	<dependency>
			<groupId>com.mysql</groupId>
			<artifactId>mysql-connector-j</artifactId>
			<scope>runtime</scope>
		</dependency> 
     */

}

