import  { createContext } from 'react'
const UserContext = createContext(); // createContext is a function which creates a context object
function UserProvider({children})
{   
    const user = "Hundia";
    // this is the property variable which we are going to access in some other component
    return (
        <UserContext.Provider value={user}> 
        {/* // Provider is a component which provides the context value to its children, it takes a prop called value which is the value of the context */}
            {children}
        </UserContext.Provider>
    )
}
export {UserContext, UserProvider}