import {createContext} from 'react'

const UserContext = createContext();  //Creating a Context
function UserProvider({children})
{
    const user = "Tony Stark";
    return (
        <UserContext.Provider value={user}>
                {children}
        </UserContext.Provider>
    )
}
export {UserContext, UserProvider}