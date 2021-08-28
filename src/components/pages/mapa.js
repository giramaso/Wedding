import React, {Component} from "react";
import {render} from "react-dom";
import Map from "./map-center"
import {GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
/*
function Map () {
  return <GoogleMap defaultZoom={8} defaultCenter={{lat: -34.397, lng: 150.644  }}>
          {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>

}
const WrappedMap = withScriptjs(withGoogleMap(Map))
const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCcRLVxVlVNIA43ai_r3OLBFx7tS1bZ0dc`;

export default function Map(){
  return <div className="mapa">
    <WrappedMap 
      googleMapURL={mapURL}
      loadingElement={<div>loading </div>}
      containerElement={<div style={{ height: '400px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
   
    </div>
}*/

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCcRLVxVlVNIA43ai_r3OLBFx7tS1bZ0dc`;

class Mapa extends Component{
  constructor(){
    super();
    this.state = {
      name: "react"
    };
  }

  
  render(){
    return(
    <div >
      <Map className= "mapa"
        googleMapURL={mapURL}
        loadingElement={<div>loading </div>}
        containerElement={<div style={{ height: '500px', border: 'solid black'}} />}
        mapElement={<div style={{ height: '100%', width: '100%' }} />}

      />
    </div>
    );
  }
}

export default Mapa;