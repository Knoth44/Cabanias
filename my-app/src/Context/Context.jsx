import React, { createContext, useContext, useState } from "react";

const CallDataBase = createContext();

export const CallDataBaseProvider = () => useContext(CallDataBase);

const CallDataBaseState = ({ children }) => {

    const [User, setUser] = useState([])
    const [alerta, setAlerta] = useState(false);
    const [msg, setMsg] = useState()
    const [error , setError] = useState(true)
    
    return (
        <CallDataBase.Provider value={{
            User,
            setUser,
            alerta,
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
