import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, DrawingManagerF, CircleF, MarkerF } from '@react-google-maps/api';
// import { GoogleMap, useJsApiLoader, DrawingManagerF, CircleF, MarkerF } from '@vis.gl/react-google-maps';
import "../css/GeoFencingSettings.css";
import ic_delete from "../img/ic_delete_carton.png";
import ic_eye from "../img/ic_view_geofence.png";
import ic_help_geofencing from "../img/ic_help_geofencing.png";
import ic_close_info_popup from "../img/ic_close_info_popup.png";
import Header from "./Header";

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 25.2048,
    lng: 55.2708
};

const citymap = {
    chicago: {
        center: { lat: 41.878, lng: -87.629 },
        population: 2714856,
    },
    newyork: {
        center: { lat: 40.714, lng: -74.005 },
        population: 8405837,
    },
    losangeles: {
        center: { lat: 34.052, lng: -118.243 },
        population: 3857799,
    },
    vancouver: {
        center: { lat: 49.25, lng: -123.1 },
        population: 603502,
    },
};

function GeofencingSettings() {

    const [userMessage, setUserMessage] = useState("")
    const [radiusOfLocationForGeofence, setRadiusOfLocationForGeofence] = useState(100) // in meter
    const [showInfoPopup, setShowInfoPopup] = useState(false)
    const [listOfGeofences, setListOfGeofences] = useState(null)
    const [nameOfGeofence, setNameOfGeoFence] = useState("")
    const [zoomLevel, setZoomLevel] = useState(11)

    const [locationForOfficeGeofence, setLocationForOfficeGeofence] = useState(null)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB1WjOaZdzMLxijAYEcAzFwmGNp8qaFM7c",
        libraries: ["drawing"]

    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {

        setMap(map)

        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        // const bounds = new window.google.maps.LatLngBounds(center);


        // const cityCircle = new window.google.maps.Circle({
        //     strokeColor: "#FF0000",
        //     strokeOpacity: 0.8,
        //     strokeWeight: 2,
        //     fillColor: "#FF0000",
        //     fillOpacity: 0.35,
        //     map,
        //     center: { lat: 41.878, lng: -87.629 },
        //     radius: Math.sqrt(2714856) * 100,
        // });

        // previous
        // map.setCenter(bounds);
        // setMap(map)

        // cityCircle.setCenter(bounds);
        // setMap(map)

        for (const city in citymap) {
            // Add the circle for this city to the map.
            const cityCircle = new window.google.maps.Circle({
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
                map,
                center: citymap[city].center,
                radius: Math.sqrt(citymap[city].population) * 100,
            });
        }

        const triangleCoords = [
            { lat: 25.774, lng: -80.19 },
            { lat: 18.466, lng: -66.118 },
            { lat: 32.321, lng: -64.757 },
            { lat: 25.774, lng: -80.19 },
        ];

        // Construct the polygon.
        const bermudaTriangle = new window.google.maps.Polygon({
            paths: triangleCoords,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map
        });



    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const clickedOnMap = (mapClickedEvent) => {

        console.log(" clicked ", mapClickedEvent.latLng.lat(), mapClickedEvent.latLng.lng(), typeof (mapClickedEvent))

        setLocationForOfficeGeofence({ lat: mapClickedEvent.latLng.lat(), lng: mapClickedEvent.latLng.lng() })
    }

    const markerPlacedOnMap = (markerLoc) => {
        console.log(" clicked ", markerLoc.location)
    }

    const onCircleComplete = (shape) => {
        if (shape == null || (!(shape instanceof window.google.maps.Circle))) return;

        // if (circle != null) {
        //     circle.setMap(null);
        //     circle = null;
        // }

        // circle = shape;

        // returns radius in meter
        console.log('radius', shape.getRadius());
        console.log('lat', shape.getCenter().lat());
        console.log('lng', shape.getCenter().lng());
    }

    const circleOptions = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 50,
        zIndex: 10
    }

    const doThingsAfterMarkerDragEnd = (mapDragEndEvent) => {

        console.log("marker location ", mapDragEndEvent.latLng.lat())

        setLocationForOfficeGeofence({ lat: mapDragEndEvent.latLng.lat(), lng: mapDragEndEvent.latLng.lng() })
    }


    const refreshListOfGeofences = () => {

        const listOfGeofencesFromLocalStorage = localStorage.getItem("list_of_geofences")
        if (listOfGeofencesFromLocalStorage != null) {

            if (listOfGeofencesFromLocalStorage != "") {
                let parsedArray = JSON.parse(listOfGeofencesFromLocalStorage)
                setListOfGeofences(parsedArray)
            }
        }

    }

    const clickedOnSaveButton = () => {

        const objectToSave = {
            name_of_geofence: nameOfGeofence,
            latitude: locationForOfficeGeofence?.lat,
            longitude: locationForOfficeGeofence?.lng,
            radius_of_geofence: radiusOfLocationForGeofence
        }

        const listOfGeofencesFromLocalStorage = localStorage.getItem("list_of_geofences")

        let newArray = null

        if (listOfGeofencesFromLocalStorage != null) {

            if (listOfGeofencesFromLocalStorage != "") {

                let parsedArray = JSON.parse(listOfGeofencesFromLocalStorage)
                newArray = [...parsedArray, objectToSave]
            } else {
                newArray = [objectToSave]
            }
        } else {
            newArray = [objectToSave]
        }

        localStorage.setItem("list_of_geofences", JSON.stringify(newArray))

        // clear and reset previous values
        setNameOfGeoFence("")
        setLocationForOfficeGeofence(null)
        setRadiusOfLocationForGeofence(100)
        refreshListOfGeofences()

        // now just show success , later will decide what to do 

        setUserMessage("Added to Geofence list")

    }

    useEffect(() => {

        const listOfGeofencesFromLocalStorage = localStorage.getItem("list_of_geofences")

        if (listOfGeofencesFromLocalStorage != null) {
            if (listOfGeofencesFromLocalStorage != "") {
                setListOfGeofences(JSON.parse(listOfGeofencesFromLocalStorage))
            }
        }

    }, [])

    const clickedOnViewInGeofenceListItem = (item) => {

        console.log("item ", item)
        const bounds = new window.google.maps.LatLngBounds();
        bounds.extend({ lat: item.latitude, lng: item.longitude })


        if (map) {
            map.fitBounds(bounds)
            map.setZoom(17)
        } else {
            console.log(" map is nul")
        }

    }

    const clickedOnInfoPopup = () => {
        setShowInfoPopup(prev => !prev)
    }

    const handleRadiusInput = (e) => {
        console.log(" meter ", e.target.value, Number(e.target.value))

        setRadiusOfLocationForGeofence(Number(e.target.value))
    }

    const removegeofenceFromList = (clickedGeofence) => {

        console.log(" clickedGeofence ", clickedGeofence)

        const listOfGeofencesFromLocalStorage = localStorage.getItem("list_of_geofences")

        if (listOfGeofencesFromLocalStorage != "") {

            let parsedArray = JSON.parse(listOfGeofencesFromLocalStorage)

            let filteredArray = parsedArray.filter((item) => {
                return (item.name_of_geofence != clickedGeofence.name_of_geofence)
            })

            localStorage.setItem("list_of_geofences", JSON.stringify(filteredArray))

            setListOfGeofences(filteredArray)
        }

    }



    return (

        <div>
            <Header />
            <div className="GeofencingSettings-root-container">
                {/* left panel */}
                <div className='Geofencing-map-holder'>
                    {
                        isLoaded ?
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={locationForOfficeGeofence != null ? locationForOfficeGeofence : center}
                                onLoad={onLoad}
                                onUnmount={onUnmount}
                                onClick={clickedOnMap}
                                zoom={map != null ? map.zoom : 11}
                                defaultCenter={center}
                            >
                                { /* Child components, such as markers, info windows, etc. */}
                                {/* <DrawingManagerF onCircleComplete={(e) => onCircleComplete(e)} onMarkerComplete={(e) => markerPlacedOnMap(e)} /> */}

                                <>
                                    <CircleF
                                        center={locationForOfficeGeofence}
                                        radius={radiusOfLocationForGeofence}
                                        options={circleOptions} />
                                    <MarkerF
                                        position={locationForOfficeGeofence}
                                        draggable={true}
                                        onDragEnd={(e) => doThingsAfterMarkerDragEnd(e)}
                                    />
                                </>

                                <>
                                    {listOfGeofences?.map((item) => {
                                        return (
                                            <>
                                                <CircleF
                                                    center={{ lat: item.latitude, lng: item.longitude }}
                                                    radius={item.radius_of_geofence}
                                                    options={circleOptions} />
                                                <MarkerF
                                                    position={{ lat: item.latitude, lng: item.longitude }}
                                                />
                                            </>
                                        )
                                    })}
                                </>
                            </GoogleMap>
                            :
                            <div>

                                <p>No Map Available At the moment, please try later</p>

                            </div>
                    }
                </div>

                {/* right panel */}

                <div className='Geofencing-map-setttings-panel p-2'>
                    <div className='heading-panel-geofence add_geofence_heading_panel mt-4 p-3'>
                        <h5>Add new geofence</h5>
                        <img src={ic_help_geofencing} onClick={() => clickedOnInfoPopup()} />
                        {
                            showInfoPopup &&
                            <div className='info_popup'>
                                <div className='d-flex justify-content-end'>
                                    <img className='close_info_popup_icon' src={ic_close_info_popup} onClick={() => clickedOnInfoPopup()} />
                                </div>
                                <p className='mt-2'>1. Select a location in map</p>
                                <p>2. Drag the marker to adjust location </p>
                                <p>3. Adjust radius if needed </p>
                                <p>4. Enter place name</p>
                                <p>5. Then Save</p>
                            </div>
                        }

                    </div>
                    <div className='add_place_panel p-3 mb-5 bg-white body_part_of_card'>
                        <div>
                            <input className='common_input w-100' type="text" placeholder='Enter name' onChange={(e) => setNameOfGeoFence(e.target.value)} />
                        </div>
                        <div>
                            <input type='number' min="1" placeholder='enter radius in meter' className='common_input' value={radiusOfLocationForGeofence} onChange={(e) => handleRadiusInput(e)} /><label>&#40; in mtr &#41;</label>
                        </div>
                        <div className='d-flex justify-content-end mt-2'>
                            <button className='btn btn-warning' onClick={() => clickedOnSaveButton()}>Save</button>
                        </div>
                    </div>


                    <div>
                        <div className='heading-panel-geofence'>
                            <h5 className='mt-4 mb-0 text-bg-secondary p-3'>List of Geofences</h5>
                        </div>
                        <div className='add_place_panel p-3 mb-5 bg-white body_part_of_card'>
                            {
                                listOfGeofences?.map((item) => {
                                    return (
                                        <div className='d-flex justify-content-between align-items-center list_of_geofence_single_element'>

                                            <div>
                                                <label>{item.name_of_geofence}</label>
                                            </div>
                                            <div>
                                                <button className='btn btn-light me-2' onClick={() => clickedOnViewInGeofenceListItem(item)} ><img className='geofence_button_icon' src={ic_eye} /></button>
                                                <button className='btn btn-light' onClick={() => removegeofenceFromList(item)}><img className='geofence_button_icon' src={ic_delete} /></button>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {
                        userMessage.length > 0 ?
                            <div className='user-message-popup'>
                                <label>
                                    {userMessage}
                                </label>
                                <button className='btn btn-dark' onClick={() => setUserMessage("")} >Ok</button>
                            </div>
                            :
                            null
                    }

                </div>

            </div>
        </div>
    )
}

export default React.memo(GeofencingSettings)