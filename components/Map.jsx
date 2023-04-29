import { useState } from 'react';
import MapGL from 'react-map-gl';
import getCenter from "geolib/es/getCenter";

function Map({searchjson}) {
    
    // Transform the searchResults object into the required object from geoLib
    const coordinate = searchjson.map((item) => ({
        longitude: item.long,
        latitude: item.lat,
    })
    );

    // console.log(coordinate);

    // Getting the center of coordinate - returning one value
    const center = getCenter(coordinate);
    // console.log(center);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })


  return (
    <div>
        <MapGL
            // initialViewState={{
            // longitude: -100,
            // latitude: 40,
            // zoom: 3.5
            // }}
            // style={{width: 600, height: 400}}
            
            
            
            mapStyle="mapbox://styles/yemarim/clgzfytzs00ic01p6d86xfzvt"
            mapboxAccessToken={process.env.mapbox_key}

            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}

        />
        {/* 
        MAPBOX_ACCESS_TOKEN="pk.eyJ1IjoieWVtYXJpbSIsImEiOiJjbGd6ZnNiODEwNHR3M3BvZTJ6cWZwaWZkIn0.D825qWA5nDDQswIHvdEcLg"
        Access Token can be added here, or better add it into next.config.js as long as it's public key || but for any private keys add it into .env file ;) */}
    </div>
  )
}

export default Map