import React, { Component } from 'react';
import Bnl from "../../../static/assets/images/bnl.png"
import Stl from "../../../static/assets/images/st.png"

export default class Banc extends Component {
  render() {
    return (
        <div className="banco">
            <h1>
              Aqui encontraras datos para poder hacer depositos bancarios a alguno de los novios
            </h1>
            <div className="novios">
                <div className="gian">
                    <div className="datos">
                        <div className="name">
                            <h1>
                                Giancarlo <br/> Marquez 
                            </h1>
                        </div>
                        <div className="bnco">
                            <img src={Bnl}></img>
                        </div>
                        <div className="cuenta">
                            <p>
                                <b>Cuenta:</b> 3169132
                            </p>  
                        </div>
                        <div className="cuenta">
                            <p>
                                <b>Cuenta CLABE:</b> 0021 8070 1631 691 322
                            </p>
                        </div>
                        <div className="cuenta">
                            <p>
                                <b>Sucursal:</b> 7016
                            </p>
                        </div>
                    </div>
                </div>

                <div className="spacer"/>
                
                <div className ="sabi">
                    <div className="datos">
                        <div className="name">
                            <h1>
                                Sabina <br/> Lira 
                            </h1> 
                        </div>
                        <div className="bnco">
                            <img src={Stl}></img>                         
                        </div>
                        <div className="cuenta">
                            <p>
                                <b>Cuenta: </b> 567 587 752 54
                            </p>                         
                        </div>
                        <div className="cuenta">
                            <p>
                                <b>Cuenta CLABE: </b> 0141 8056 7587 7525 47 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
