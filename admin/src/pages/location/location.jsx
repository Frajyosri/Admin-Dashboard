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

    const navigate=useNavigate();
    
    React.useEffect(()=>{
        
       const GetCommandePosition=async()=>{
        const response=await axios("http://localhost:8000/api/admin/Commande")
        console.log(response.data)
        setcomand(response.data)
       }
       GetCommandePosition();
    
    },[])
   
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
           <p><span>Client :</span>{cmd.Client.nomCli} {cmd.Client.prenomCli}   </p> 
           <span>Tel/Client: {cmd.Client.phoneCli}</span>
           <p><span>Date :</span>{cmd.Date_cmd}  </p>
           <p><span>Responsable :</span>{cmd.commercant.NomCom} {cmd.commercant.prenomCom} </p>
           <p>Tel/commerçant : {cmd.commercant.phoneCom}  </p>
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
