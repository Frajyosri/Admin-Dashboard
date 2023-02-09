import React from 'react';
import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet";
import L from "leaflet";
import "./location.css"
var userIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
    iconSize:     [45, 45], // size of the icon
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});
const Location = () => {
    return (
        <div className='leaflet-container'>
            <MapContainer center={[35.82143,  10.634422]} zoom={4} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
            <Marker position={[35.82143,  10.634422]} icon={userIcon} >
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    );
}

export default Location;
