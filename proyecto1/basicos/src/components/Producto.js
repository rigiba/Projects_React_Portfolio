  import React from 'react';
  
  const Producto = ({producto}) => {

        const {nombre, precio, id } = producto

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <button>Pay</button>

        </div>

    );
  }
   
  export default Producto;