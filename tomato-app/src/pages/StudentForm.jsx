import { useState } from "react";
function StudentForm() {
  const [student, setStudent] = useState({name: "", email: "",age: "" });
  const handleChange = (e) => {
    //const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
    //   [name]: value
      [e.target.name] : e.target.value //if you want skip this line, use 4th and 8th line
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student Name: ${student.name}, Email: ${student.email}, Age: ${student.age}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name"name="name" value={student.name}
          placeholder="Enter the Name" onChange={handleChange} />
      </div>
      <div> 
        <label htmlFor="email">Email:</label>
        <input type="email" id="email"name="email"value={student.email}
          placeholder="Enter the Email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age"name="age"value={student.age}
          placeholder="Enter the Age" onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default StudentForm;