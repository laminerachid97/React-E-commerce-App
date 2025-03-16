import { createContext, useRef } from "react";

export const DivScrollContext = createContext(null);

export const DivScrollProvider = ({ children }) => {
    const divRef = useRef(null);

    return (
        <DivScrollContext.Provider value={{divRef}}>
            {children}
        </DivScrollContext.Provider>
    )
}