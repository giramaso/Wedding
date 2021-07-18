import React from "react";

import {GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = (props) =>{
    return(
        <GoogleMap 
            defaultZoom={17} 
            defaultCenter={{lat: 19.383258, lng: -99.069789}}
        />
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)