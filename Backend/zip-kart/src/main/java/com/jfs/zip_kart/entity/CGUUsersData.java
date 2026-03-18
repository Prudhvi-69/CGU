package com.jfs.zip_kart.entity;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class CGUUsersData {
    @Id
    @JsonProperty("ID")
    int ID;
    String name;
    String email;  
    int age;
    float attendance;
    String location;
    public CGUUsersData(){}  //default constructor
    CGUUsersData(int ID, String name, String email, int age, float attendance, String location){  //parameterized constructor
        this.ID=ID;
        this.name=name;
        this.email=email;
        this.age=age;
        this.attendance=attendance;
        this.location=location;
    } 
  // setter functions to setup the values in the above variables
    public void setID(int ID){  this.ID=ID; }
    public void setName(String name){ this.name=name;}
    public void setEmail(String email){ this.email=email;}  
    public void setAge(int age){ this.age=age;}
    public void setAtt(float attendance){this.attendance=attendance;}
    public void setLoc(String location){this.location=location;}
  // getter functions to get the information from each column   
    public int getID(){ return ID;}
    public String getName(){ return name;}
    public String getEmail(){ return email;}
    public int getAge(){ return age;}
    public float getAtt(){return attendance;}
    public String getLoc(){return location;}
}
