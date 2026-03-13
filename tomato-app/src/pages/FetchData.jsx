import useState, { useEffect } from 'react';
import './fetchCss.css';
function FetchData() {
const [users, setUsers] = useState([]);
//fetching from jsonplaceholder
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())  //converts raw into json format 
      .then(data => setUsers(data)); // 
  }, []);

  return(
    <>
    <h1> Users Data </h1>
    {users.map(user => (
      <div>
          <p key={user.id}>Name: {user.name}</p>
          <p key={user.id}>Email: {user.email}</p>
          <p key={user.id}>Phone: {user.phone}</p>
          <p key={user.id}>Website: {user.website}</p>
      </div>
      ))}
      </>
)}
export default FetchData;