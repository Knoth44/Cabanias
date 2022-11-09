import React, { createContext, useContext, useState } from "react";

const CallDataBase = createContext();

export const CallDataBaseProvider = () => useContext(CallDataBase);

const CallDataBaseState = ({ children }) => {

    const [User, setUser] = useState({})

    return (
        <CallDataBase.Provider value={{
            User,
            setUser
        }}>
            {children}
        </CallDataBase.Provider>
    )
}
export default CallDataBaseState
