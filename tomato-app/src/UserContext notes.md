useContext : This is a React Hook, which lets us avoid the problem of passing props everytime to all components when needed, in scenarios like : 
        - Showing User Name all over the application 
        - Changing a theme for the entire application
        - Using a value/theme for mulitple components

It will follow a set of rules : 
1. Creating the context using : createContext() from 'react'
2. A Provider will be exported, that will let other components use our context/theme/variable
3. Wrap our App inside the UserProvider in Main.jsx 
4. Inside another component, we can directly use the context that will be used inside this current file withour passing any props.


