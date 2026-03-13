import { useState } from "react";
function StudentForm(){
    const [student, setStudent] = useState({name : "", email : "",age : "",});
    const handleChange = (e) => {
        setStudent({...student, 
        [e.target.name] : e.target.value}) };
// e.target.value : 
// e : event object triggers, identifies which event has triggered 
// target : identifies which element has triggered the event
// value : gives the value in that element using name/id attribute of the element        
     
    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert(`Name : ${student.name} \n Email : ${student.email} \n Age : ${student.age}`);
    }
return(
    <div>   
     <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input type="text" id="name" name="name" value={student.name}      
        onChange={handleChange} required/><br/><br/>
            
        <label htmlFor="email">Email : </label>
        <input type="email" id="email" name="email" value={student.email} 
        onChange={handleChange} required/><br/><br/>
            
        <label htmlFor="age">Age : </label>
        <input type="number" id="age" name="age" value={student.age} 
        onChange={handleChange} required/><br/><br/>
            
        <button type="submit">Submit</button>
        </form>
    </div>
)}export default StudentForm;