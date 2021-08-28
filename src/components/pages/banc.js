import React, { Component } from 'react';

export default class Banc extends Component {
  render() {
    return (
        <div className="banco">
            <div>
              Aqui encontraras datos para poder hacer depositos bancarios a alguno de los novios
            </div>
            <div className="novios">
                <div className="gian">
                    <div className="datos">
                        <div className="name">
                            <h1>
                                Giancarlo Marquez 
                            </h1>
                        </div>
                        <div className="bnco">
                            <p>
                                Banamex
                            </p>
                        </div>
                        <div className="cuenta">
                            <p>
                                <b>Cuenta:</b> 3169132
                            </p>  
                        </div>
                        <div className="clave">
                            <p>
                                <b>Cuenta CLABE:</b> 002180701631691322
                            </p>
                        </div>
                        <div className="sucursal">
                            <p>
                                <b>Sucursal:</b> 7016
                            </p>
                        </div>
                    </div>
                </div>

                <div className ="sabi">
                    <div className="datos">
                        <div className="name">
                            <h1>
                                Maria Lira 
                            </h1> 
                        </div>
                        <div className="bnco">
                            <p>
                                Banco
                            </p>                          
                        </div>
                        <div className="cuenta">
                            <p>
                                <b>Cuenta:</b>###
                            </p>                         
                        </div>
                        <div className="clave">
                            <p>
                                <b>Cuenta CLABE:</b>###
                            </p>
                        </div>
                        <div className="sucursal">
                            <p>
                                <b>Sucursal:</b> ###
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
