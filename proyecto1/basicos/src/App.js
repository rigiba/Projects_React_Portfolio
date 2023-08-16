import React,{Fragment, useState} from 'react';
import Header from './components/Header.jsx'
import Footer from './components/footer'
import Producto from './components/Producto'


function App() {


const [productos, guardarProductos] = useState([
      {id:1, nombre:'camisa polo', precio:50 },
      {id:2, nombre:'camisa traje', precio:40 },
      {id:3, nombre:'camisa ligera', precio:30 },

]); 


  //lugar seguro para escribir codigo ja
const fecha = new Date().getFullYear();

  return (

    <Fragment>
      <Header 
        nombre='Richard Gil'
      />

      <h1>Listado </h1>
      {productos.map(producto =>(
        <Producto  
        key={producto.id}
          producto={producto}
        />
        ))}
      <Footer 
        fecha={fecha}
      />

    </Fragment>
  );
}

export default App;
