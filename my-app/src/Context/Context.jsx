import React, { createContext, useContext, useState } from "react";

const CallDataBase = createContext();

export const CallDataBaseProvider = () => useContext(CallDataBase);

const CallDataBaseState = ({ children }) => {

    const [User, setUser] = useState([])
    const [Alerta, setAlerta] = useState(false)
    const [error, setError] = useState(false)
    const [msg, setMsg] = useState("")
    
    return (
        <CallDataBase.Provider value={{
            User,
            setUser,
            Alerta,
            setAlerta,
            error,
            setError,
            msg,
            setMsg
        }}>
            {children}
        </CallDataBase.Provider>
    )
}
export default CallDataBaseState
