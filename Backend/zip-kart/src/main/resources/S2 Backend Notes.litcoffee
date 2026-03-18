Java Spring-Boot Backend : We are going to create backend using spring-boot where it is going to be available and working in multiple layers.
** These layers are : Controller, Service, Entity, Repositor and a Database

Controller: This is the layer which will be used to connect and communicate directly with the frontend UI. It will contain mapping, url paths and other things in it which will ensure proper api endpoints are mapped correctly. 
** This layer uses an annotation called : @Controller 

Service : This is the layer where we are going to create the user/ application specific code called Business Logic, and it is going to be linked directly to the controller layer and also the next layers after this.
** It uses an annotation called : @Service 

Entity : This is the layer where we can create tables/entities in the connected database without going to the DB and writing manual SQL queries, we are going to create a basic Java file containing the column names as variables with proper datatypes and some getter, setter functions to get the values and set the values. 
** It uses an annotation called : @Entity 

Repository : It uses the built-in dependency called JPA Repository, to access and communicate with the DB, without using traditional SQL Queries instead it uses built-in methods from JPA. 
** It uses an annotation called : @Repository 

Annotations : The annotations in a Java program will be used to make the compiler understand the code faster and better by providing some additional information like : @Controller will be written on top of controller layer file, to let the compiler know that this file is a controller layer file.

Database connection : We need to go to application.properties file and use the datasource as the the url of database running location with the DB name.

** We need to provide the username and password inside this file for Java backend app to access the database. 
** Also we are going to mention the Driver-Class-Name inside the same file. 
















