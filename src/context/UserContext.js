import React, { useState } from "react";

const Context = React.createContext({});

export const UserContextProvider = ({children}) => {
    const [token, setToken] = useState(null);
    return (
    <Context.Provider value={{token, setToken}}>
        {children}
    </Context.Provider>
    )
}

export default Context;
