import React, { Component } from 'react';
import { withRouter } from "react-router";
import Usimg from "../../../static/assets/images/11.png"
import Mapa from './mapa';

const Portada = () => {
  return (
    <div className="portada">

      <div className="img-wrp">
        <div
          className="imagen"
          style={{
            backgroundImage: `url(${Usimg})`
          }}
        />
      </div>
      <div className="bienvenida">
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
      </div>
      <div className="map-container">
        <div className="map-info">
          <h1>
            La ceremonia  
          </h1>
          <p>
            Tanto la ceremonia civil como la fiesta se llevara acabo el <b> 3 de Diciembre de 2021</b> en el <b><a href="https://www.google.com/maps/place/Jardin+de+fiestas+F%C3%A9nix/@19.383258,-99.069789,18z/data=!4m5!3m4!1s0x0:0x7194dede93a655b8!8m2!3d19.3832359!4d-99.0697689?hl=en-US" target="_blank">Jardín de fiestas Fénix</a></b> el cual esta ubicado en:
          </p>
          <p>
            <b>Calle:</b> 10 de Agosto de 1860
            <br/>
            <b>Número:</b> 2050-A
            <br/>
            <b>Colonia:</b> Iztapalapa
          </p>
        </div>
        <div className="that-map">
          <Mapa/>
        </div>
      </div>

      <div className="recepcion">
        <h1>
          Recepción
        </h1>
        <p>
          La recepción iniciara a las: <br/><b>7:30 P.M.</b><br/>
          <br/>
          La ceremonia por el civil dará inicio a las: <br/><b>8:00 P.M.</b><br/>
        </p>
      </div>

      <div className="vestimenta">
        <h1>
          Vestimenta
        </h1>
        <p>
          El código de vestimenta será formal/casual 
        </p>
      </div>

      <div className="mesa-de-regalos">
        <div className="txt">
          <h1>
            Regalos
          </h1>
          <p>
            Lo más importante es tu presencia, pero si deseas hacernos un regalo aqui tienes algunas sugerencias
            <br/>
            <b className ="small">* Los regalos seleccionados en cada una de las mesas son sugerencias de lo que nos será útil.
La adquisición de estos artículos puedes realizarla en algún otro sitio, no específicamente en estos lugares.</b>
          </p>
        </div>

        <div className="botones">
          <a className="btn" href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50649048" target="_blank">
            Liverpool | Mesa # 50649048
          </a>
          <a className="btn" href="https://www.amazon.com.mx/wedding/share/sabina-gian" target="_blank">
            Mesa de Regalos amazon
          </a>
          <a className="btn" href="banc">
            Datos Bancarios
          </a>
        </div>
      </div>

      <div className="info">
        <h1>
          Una última cosa
        </h1>
        <p>
          Debido a la situación actual mundial, tenemos un numero limitado de asistentes, por favor haznos llegar tu <b>confirmación</b>.
        </p>
      </div>

    </div>
    );
  }
export default withRouter(Portada);

