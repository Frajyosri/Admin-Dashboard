import React,{useEffect} from 'react';
import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet";
import L from "leaflet";
import "./location.css";
import img from "./cargo.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
var userIcon = L.icon({
    iconUrl:img ,
    iconSize:     [45, 45], // size of the icon
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});
const Location = () => {
    const [comande,setcomand]=React.useState([])
    const [location,setlocation]=React.useState({});
    const navigate=useNavigate();
    
    React.useEffect(()=>{
        const GetCurentPosition=()=>{
            const location=navigator.geolocation.getCurrentPosition((position)=>{
                setlocation({
                    lat:position.coords.latitude,
                    lng:position.coords.longitude
                })
            })
        }
       const GetCommandePosition=async()=>{
        const response=await axios("http://localhost:8000/api/admin/Commande")
        console.log(response.data)
        setcomand(response.data)
       }
       GetCommandePosition();
       GetCurentPosition()
    },[])
   console.log(location)
   
    const User=localStorage.getItem("token");
    useEffect(() => {
      if(User===null){ 
         
        navigate("/login");
      }
    }, [User,navigate]);
    return (
        <div className='leaflet-container'>
            <MapContainer center={[35.82143,  10.634422]} zoom={10} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {comande.map((cmd)=>(
     <Marker position={[cmd.lat,  cmd.long]} icon={userIcon} >
     <Popup>
         <div className="commande">
           <p><span>Client :</span>{cmd.Client.nom} {cmd.Client.prenom}   </p> 
           <span>Tel/Client: {cmd.Client.phone}</span>
           <p><span>Date :</span>{cmd.Date_cmd}  </p>
           <p><span>Responsable :</span>{cmd.commercant.Nom} {cmd.commercant.prenom} </p>
           <p>Tel/commerçant : {cmd.commercant.phone}  </p>
           <span>Etat de Commande : {cmd.etat} </span>
         </div>
     </Popup>
 </Marker>
  ))
            }  
            </MapContainer>
        </div>
    );
}

export default Location;
