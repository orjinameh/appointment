import React, { createContext, useState } from 'react';

export const UserContext =  createContext();

export function UserProvider ({children}) {
    const [isBottomNav,setIsBottomNav] = useState(true)
    const [isUserIcon,setIsUserIcon] = useState(false)
    const [token,setToken] = useState(null)
    // const backendBaseUrl = 'http://localhost:4000'
    const backendBaseUrl = 'https://evpro.onrender.com'
    return(
        <UserContext.Provider value={{ 
            backendBaseUrl, 
            isBottomNav, setIsBottomNav,
            isUserIcon,setIsUserIcon,
            token,setToken}}>
            {children}
        </UserContext.Provider>
    )
}