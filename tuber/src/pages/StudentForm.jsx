import { useState } from "react";
import { useNavigate } from "react-router-dom";
function StudentForm(){
const [student, setStudent] = useState({ name : "",email : "",age : ""})
const navi = useNavigate()
const handleSubmit = (e) => {
    e.preventDefault();  //
    alert(`Name: ${student.name} \n Email: ${student.email} \n Age: ${student.age}`);
}
const handleChange = (e) => {
    setStudent({
        ...student, [e.target.id] : e.target.value
})}
return(
    <div>
        <form onSubmit={handleSubmit}>
        Name : <input type="text" id="name" name="name" value={student.name} placeholder="Enter your name" 
        onChange={handleChange}/><br></br>
        Email : <input type="email" id="email" name="email" value={student.email} placeholder="Enter your email" 
        onChange={handleChange}/><br></br>
        Age : <input type="number" id="age" name="age" value={student.age} placeholder="Enter your age" 
        onChange={handleChange}/><br></br>            
        <button type="submit" onClick={() => navi('/success')}>Submit</button>
        </form>
    </div>
)}export default StudentForm;