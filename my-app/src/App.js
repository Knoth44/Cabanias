import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Rutas from "./Routes/Rutas";
import CallDataBaseState from "./Context/Context";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <CallDataBaseState>
        <Layout>
          <Rutas />
        </Layout>
      </CallDataBaseState>
    </>
  )
}

export default App;
