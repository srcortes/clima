import React, { Fragment, useState, useEffect } from "react";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";

function App() {
  //state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, guardarConsultar] = useState(false);

  //se extrae informacion del state
  const { ciudad, pais } = busqueda;

  //useEffect cuando cambien los valores ciudad y pais se actualiza lo que este dentro del useEffect
  useEffect(() => {
    const consultarApi = async () => {
      if(consultar){
        //Se inicia construccion o invocacion servicio
      const appId = "ad019f1cbc0512a31d256fc69ffe56d4";
      const urlConsumo = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

      const respuesta = await fetch(urlConsumo);
      const resultado = await respuesta.json();
      console.log(resultado)
      }

     
    };
    consultarApi();
  }, [consultar]);

  return (
    <Fragment>
      <Header titulo="Weather Clima App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
