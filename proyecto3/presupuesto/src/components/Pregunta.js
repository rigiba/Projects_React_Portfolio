import React, { Fragment } from "react";

const Pregunta = () => {



  return (
    <Fragment>

      <div className="text-center min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible bg-yellow-400">
      <h1 className="font-bold text-gray-600 uppercase text-2xl">Asigna Presupuesto</h1>
      <form>
        <input 
        type="number" 
        className="rounded-xl py-3 m-4 px-4 bg-gray-200 text-gray-800 border-gray-300 border-1 outline-none placeholder-gray-500 focus:bg-gray-100"
        placeholder="Presupuesto" />

        <input 
        type="submit" 
        className="middle none center mr-4 rounded-lg bg-black py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true" 
        value="Ingresar"/>
      </form>





      </div>



    </Fragment>
  )

}

export default Pregunta;
