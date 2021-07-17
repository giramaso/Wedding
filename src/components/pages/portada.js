import React, { Component } from 'react';
import { withRouter } from "react-router";


const Portada = () => {
  return (
        <div className="portada">
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
    );
  }
export default withRouter(Portada);

