import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import Countdownlist from '../timer/timer';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='nav'>
        <NavLink exact to="/">
          <div className="text">
              Nuestra Boda
          </div>
        </NavLink>

        <Countdownlist/>
      </div>

      <div className="links-wrapper">
        <NavLink to="/">
          Inicio
        </NavLink>

        <NavLink to="/mesa">
          Mesa
        </NavLink>

        <NavLink to="/fotos">
          Fotos
        </NavLink>

        <NavLink to="/mapa">
          Mapa
        </NavLink>
          
      </div>
    </div>
  );
}

export default withRouter(Navbar);
