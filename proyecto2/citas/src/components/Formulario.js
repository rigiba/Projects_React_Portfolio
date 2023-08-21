import React, { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {
  //Crear state para citas

  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  //Función state para los input

  const actualizarState = (e) => {
    // console.log(e.target.value);
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Cuando presiona agregar cita

  const submitCita = (e) => {
    e.preventDefault();
    // alert('Enviando...')

    //validaciones

    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      // console.log("Hay un error");
      actualizarError(true);
      return;
    }

    //Eliminar msj previo

    actualizarError(false);

    //asignar  id para los registros
    //instalar libreria uuid

    cita.id = uuid();
    // console.log(cita);

    //crear cita
    crearCita(cita);

    //reiniciar formulario dejandolo en blanco
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h1>Agendar</h1>

      {error ? <p className="alerta-error">Ingresa todos los campos</p> : null}

      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Ingresa nombre"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Ingresa nombre dueño"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora de alta</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        />

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};


Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario;
