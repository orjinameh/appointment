import React, { createContext, useState } from 'react';

export const UserContext =  createContext();

export function UserProvider ({children}) {
    const [isBottomNav,setIsBottomNav] = useState(true)
    const [isUserIcon,setIsUserIcon] = useState(false)
    const [isDisplay,setIsDisplay] = useState(true)
    const backendBaseUrl = 'http://localhost:4000'
    // const backendBaseUrl = 'https://datasite-h33s.onrender.com'
    return(
        <UserContext.Provider value={{ 
            backendBaseUrl, 
            isBottomNav, setIsBottomNav,
            isUserIcon,setIsUserIcon,
            isDisplay,setIsDisplay}}>
            {children}
        </UserContext.Provider>
    )
}