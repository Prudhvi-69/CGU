import {createContext} from "react";
const UserContext = createContext(); //1. Creating the context object 
function UserProvider({children}){
    const user = "Good User but Habit" // This is the value that will be provided to the children components through the context. You can change this value to "dark" or any other theme you want to implement.         
    return(
        <UserContext.Provider value={user}>   
        {/* //2. Providing the context value to the children components */}
            {children} 
        </UserContext.Provider>
    )
}
export default UserProvider  //Export both the context and the provider to be used outside this file  
export {UserContext};   