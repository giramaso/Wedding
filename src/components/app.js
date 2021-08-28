import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./nav/navigation";
import Portada from "./pages/portada";
import Banc from './pages/banc';

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
                <Route path="/banc" component={Banc}/>
              </Switch>
            </div>
            
          </div>
        </Router>

      </div>
    );
  }
}
