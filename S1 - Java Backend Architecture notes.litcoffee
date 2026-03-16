Java Backend : It is being build with Spring Boot, where we are creating the spring-boot app from spring initializer.
** Backend usually contains multiple layers, each layer with its own purpose performing a task or operation.
** Layers are : Controller, Service, Entity, Repository, Database 
1. Controller:It is a layer which is directly connected to frontend through api endpoints or url mapping.It uses an annotation called @Controller
2. Service : It is a layer which is connected to controller layer, which takes the UI's requests and also passes the responses. The backend app's main logic or main business logic will be written inside this layer.
It uses an annotation called @Service.
3. Entity : It is a layer which will be used to create the table/entity in the database without going to the DB manually. You are going to mention column names as variables with datatypes and some getter and setter functions to store those values. It uses an annotation called : @Entity
4. Repository: It is a layer which will be directly communicating with the DB and without the need of writing manual SQL queries, we'll be using JPA repository to handle those queries with built-in functions.
This layer uses an annotation called : @Repository.

Annotations : These are embedded inside the source code to let the compiler know some additional information like : finding the layers, faster processing, it will let the compiler know that we are into development not just writing a java program.
These annotations will let the compiler know that we should be working on an application which will contain layers, modules and packages in it, but not just a single java file which can be executed normally on a console.

** Each of these layers and the files in those layers should be kept in their respective folder architecture. 
** We are going to create individual folders for that respective layer manually inside the src -> main -> app-folder : create in this location.














