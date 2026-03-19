package com.jfs.tuber.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Players")
public class Players {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    String email;
    String sport;
    int jerseyNumber;
    int age;

    public Players() {}

    public Players(int id, String name, String email, String sport, int jerseyNumber, int age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.sport = sport;
        this.jerseyNumber = jerseyNumber;
        this.age = age;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getSport() { return sport; }
    public void setSport(String sport) { this.sport = sport; }

    public int getJerseyNumber() { return jerseyNumber; }
    public void setJerseyNumber(int jerseyNumber) { this.jerseyNumber = jerseyNumber; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}
