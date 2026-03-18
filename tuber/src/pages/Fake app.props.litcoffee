Java Backend Architecture : It follows a concept multiple layers where it is going to be the middle layer between frontend and database. 

** There are going to be multiple layers present in the backend architecture, they are : Controller, Service, Entity, Repository.

Controller : This is a layer which is directly connected to the frontend, where it is going to work with the things like API endpoints (in backend view) and web url paths (in frontend view). This is used for mapping the proper url paths from frontend to backend.
** It will use an annotation known as : @Controller 

Service : This layer is where we are going to write the user/custom code of how you want the application to behave and work, that is also known as Business Logic. This layer is directly connected to the Controller layer.
** It uses an annotation called : @Service

Entity : It is a layer where we are going to write the Java code containing some basic variables specified with thier datatypes and some getter, setter functions to get the values and setup the values in those variables, where these are going to be the columns in the table we are going to create.
File name : table name
Variable names : column names 
** This layer uses an annotation called : @Entity 

Repository : This layer and the files inside this layer will be inheriting the existing JPA Repository to establish and start communincating with the database. 
** This uses an annotation called : @Repository

Annotation : The annotations are used to make the compiler and it's task to finish and execute faster. It will provide the additional information to the compiler while execution, like : Meta data, code execution statements like before and after. 

Database Connection : Inorder to connect the DB to our backend we should be opening the file called : application.properties and give proper datasource links. 

For finding DB : spring.datasource.url = "url of database"
For accessing DB : spring.datasource.username="username" || root 
For accessing DB (pwd) : spring.datasource.password = "password of DB" 

Location of application.properties : 
src -> main -> resources -> application.properties 

** Each of these layers should be created as individual folders inside the project package in the source folder with their respective layer names. 






















