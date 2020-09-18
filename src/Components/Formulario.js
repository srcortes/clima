import React, { useState } from "react";

const Formulario = () => {
  //state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  //State para controlar cuando hay o no un error en la validacion de datos
  const [error, guardarError] = useState(false);

  //Extraer ciudad y pais
  const { ciudad, pais } = busqueda;

  //funcion que coloca los elementos en el state
  const handleChange = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando se realiza la inovacion del submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validaciones de que los input no vengan vacios
    if (ciudad.trim() === "" || pais === "") {
      guardarError(true);
      return;
    }
    //Si no hay error o se corrigio los campos vacios lo pasamos nuevamente a false
    guardarError(false);

    //Enviando componente principal
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <p className="red darken-1 error">Todos los campos son obligatorios</p> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">City:</label>
      </div>

      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">--Selection Country--</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">Country:</label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Find Weather"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />

      </div>
    </form>
  );
};

export default Formulario;
