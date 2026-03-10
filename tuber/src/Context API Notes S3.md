Context API : Used for scenarios like where you want to show the the user is same for all pages in the entire app.
Or 
It can be used in cases like Toggling themes of a webpage using dark mode and light mode. Where the theme will be applied for all pages in the website.

1. Create a context object using createContext hook from 'react'
2. Create a Provider for the context which will go out and tell every page in the application that we are using this Context.
3. Export both Context Object and also Provider function.
4. Go to main.jsx and wrap the App around Provider component. (It can fully control and tell to all components about the context)
5. inorder to use the context in some other external component, we are going to import a react hook known as : useContext 