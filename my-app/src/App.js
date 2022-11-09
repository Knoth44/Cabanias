import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Rutas from "./Routes/Rutas";
import CallDataBaseState from "./Context/Context";

function App() {
  return (
    <>
      <CallDataBaseState> 
        <Rutas />
      </CallDataBaseState>
    </>
  )
}

export default App;
