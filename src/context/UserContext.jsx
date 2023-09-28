import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from './Context';

export const UserDataContext = createContext();

export function UserDataProvider({ children }) {
    const [userData, setUserData] = useState([]);
    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    )
}