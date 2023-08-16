import React from "react";

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
  const { nombre, precio, id } = producto;

  //Agregar al carrito
  const seleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    agregarProducto([...carrito, producto]);
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      <button type="button" onClick={() => seleccionarProducto(id)}>
        Buy $
      </button>
    </div>
  );
};

export default Producto;
