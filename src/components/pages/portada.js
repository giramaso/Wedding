import React, { Component } from 'react';
import { withRouter } from "react-router";
import Usimg from "../../../static/assets/images/Us.jpg"
import Mapa from './mapa';

const Portada = () => {
  return (
    <div className="portada">

      <div
        className="imagen"
        style={{
          backgroundImage: `url(${Usimg})`
        }}
      />

      <p>
        ¡Bienvenidos a la página de nuestra boda!
        <br/>
        Estamos muy felices por poder compartir con ustedes este día tan especial, ¡queremos que llegue ya!
        <br/>
        <br/>
        En esta página pondremos información útil sobre la boda para que siempre que lo necesites la revises y ese día nos vemos para celebrar nuestro amor.
        <br/>
        <br/>
        ¡Los esperamos!
      </p>
      <div className="map-container">
        <div className="map-info">
          <h1>
            La seremonia  
          </h1>
          <p>
            Tanto la seremonia civil como la fiesta se llevaran acabo el <b> 3 de Diciembre de 2021</b> en el <b>Jardin de fiestas Fenix</b> el cual esta hubicado en:
          </p>
          <p>
            <b>calle:</b> 10 de Agosto de 1860
            <br/>
            <b>Numero:</b> 2050-A
            <br/>
            <b>Colonia:</b> Iztapalapa
          </p>
        </div>
        <Mapa/>
      </div>

      <div className="recepcion">
        <h1>
          Recepcion
        </h1>
        <p>
          la Recepcion iniciara a las 7:30 P.M.
          <br/>
          La ceremonia por el civil dara inicio a las 8:00 P.M.
          <br/>
          La fiesta continuara hasta la 1:30 A.M.
          <br/>
          El jardin debera de ser desalojado por completo a las 2:30 A.M.
        </p>
      </div>

        <div className="vestimenta">
          <h1>
            Vestimenta
          </h1>
          <p>
            El codigo de vestima sera:...
          </p>
        </div>

        <div className="mesa-de-regalos">
          <h1>
            Regalos
          </h1>
          <p>
            Lo más importante es tu presencia, pero si deseas hacernos un regalo aqui tienes algunas sugerencias
          </p>
          <a className="btn" href="#">
            Liverpool | Mesa ####
          </a>
          <a className="btn" href="https://www.amazon.com.mx/wedding/share/sabina-gian">
            Mesa de Regalos amazon
          </a>
          <a className="btn" href="#">
            Datos bancarios
          </a>
        </div>

        <div className="info">
          <h1>
            Una ultima cosa
          </h1>
          <p>
            Debido a la situacion actual mundial, tenemos un numero limitado de asitensitens, por favor haznos llegar tu confirmacion.
          </p>
        </div>


    </div>
    );
  }
export default withRouter(Portada);

