import React, { useState } from "react";
import "../css/MyCustomMap.css";

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function MyCustomMap(props) {

    const { locationNeededForStaff, setLocationNeededForStaff } = props

    const [position, setPosition] = useState({ lat: 25.2048, lng: 55.2708 })

    const clickedOnMap = (mapClickedEvent) => {

        console.log(" clicked ", mapClickedEvent, typeof (mapClickedEvent))
        setPosition({ lat: mapClickedEvent.detail.latLng.lat, lng: mapClickedEvent.detail.latLng.lng })
        setLocationNeededForStaff({ lat: mapClickedEvent.detail.latLng.lat, lng: mapClickedEvent.detail.latLng.lng })
    }

    return (
        <div className="MyCustomMap-root-container">
            <APIProvider apiKey={'AIzaSyB1WjOaZdzMLxijAYEcAzFwmGNp8qaFM7c'}>


                <Map center={position} zoom={12} onClick={(e) => clickedOnMap(e)}>

                    {
                        locationNeededForStaff != null && <Marker position={position} />
                    }

                </Map>



            </APIProvider>
        </div>
    )
}

export default MyCustomMap;