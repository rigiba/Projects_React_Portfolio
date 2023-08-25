import React, { Fragment } from "react";
import Pregunta from "./components/Pregunta";

function App() {

const logon = ()=>{
  console.log("Logon");
}

  return (
    <Fragment>

      <div className="mx-auto grid p-5  md:flex-row">
      <h1 className="font-bold text-center text-3xl mb-2 uppercase">Presupuesto </h1>

        <header className="text-gray-900 body-font">
        </header>

        <Pregunta />
      </div>
    
    </Fragment>
  );
}

export default App;
