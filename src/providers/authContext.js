import React,{ createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {
    const [users, setUsers] = useState([
        {email: "test", pwd: "test"}
    ]);

    return (
        <AuthContext.Provider value={{users, setUsers}}>
            {children}
        </AuthContext.Provider>
    )
}