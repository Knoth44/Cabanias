import React, { createContext, useContext, useState } from "react";
import Database from "../Hooks/Database";

const CallDataBase = createContext();

export const CallDataBaseProvider = () => useContext(CallDataBase);

const CallDataBaseState = ({ children }) => {
    const { DB_MongoCabanias,  DB_MongoUser } = Database()
    const [Cabanias, setCabanias] = useState(DB_MongoCabanias)
    const [User, setUser] = useState(DB_MongoUser)

    return (
        <CallDataBase.Provider value={{
            User,
            Cabanias,
            setCabanias,
            setUser
            }}>
            {children}
        </CallDataBase.Provider>
    )
}
export default CallDataBaseState
