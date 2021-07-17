import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./nav/navigation";
import Portada from "./pages/portada";
import Fotos from "./pages/fotos";
import Mapa from "./pages/mapa";
import Mesa from "./pages/mesa"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <div>
              <Navbar/>
            </div>
            
            <div>
              <Switch>
                <Route exact path="/" component={Portada}/>
                <Route path="/mesa" component={Mesa}/>
                <Route path="/fotos" component={Fotos}/>
                <Route path="/mapa" component={Mapa}/>
              </Switch>
            </div>
            
          </div>
        </Router>

      </div>
    );
  }
}
