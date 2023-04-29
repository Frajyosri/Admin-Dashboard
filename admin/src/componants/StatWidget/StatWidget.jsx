import axios from 'axios';
import React from 'react';
import {FaShoppingBag, FaUserAlt, FaUserCheck} from "react-icons/fa"
const StatWidget = () => {
    const [nbrClient, setnbrClient] =React.useState(0);
    const [nbrCommande, setnbrCommande] =React.useState(0);
    const [nbrSales, setnbrSales] =React.useState(0);
    const [nbrCostomer,setnbrCostomer]=React.useState(0);
    
   React.useEffect(() => {
    const getCountClient=async()=>{
        const nbrCom= await  axios.get("http://localhost:8000/api/admin/countClient")
        setnbrClient(nbrCom.data)
        console.log(nbrCom.data)
     }
     const getCountCommande=async()=>{
        const nbrCmd= await axios.get("http://localhost:8000/api/admin/Countcommande")
        setnbrCommande(nbrCmd.data)
        console.log(nbrCmd.data)
     }
     const getCountSales=async()=>{
        const nbrSal= await axios.get("http://localhost:8000/api/admin/countCompt")
        setnbrSales(nbrSal.data)
     }
     const getCountCommercant=async()=>{
        const nbrCom= await  axios.get("http://localhost:8000/api/admin/Countcommercant")
        setnbrCostomer(nbrCom.data)
       
     }
   
     getCountCommercant()
     getCountClient()
     getCountCommande()
     getCountSales()
    }, []);
    return (
        <div>
    
             <div className="widget">
            <div className="widgetitems">
                <span className='widgettitel'>Total Client</span>
                <div className="widgetInfo">
                    <span className='nbrCostomer'>{nbrClient} </span>
                    <span className='Rating'><FaUserAlt/></span>
                </div>
                <span className='SubtitelC'>le Nomber de client qui Passé une Commande </span>
                
            </div>
            <div className="widgetitems">
                <span className='widgettitel'>Total Commande </span>
                <div className="widgetInfo">
                    <span className='nbrCostomer'>{nbrCommande} </span>
                  <span className='Rating'><FaShoppingBag/></span>  
                </div>
                <span className='SubtitelC'>le Nomber Total de Commande passé</span>
            </div>
            <div className="widgetitems">
                <span className='widgettitel'>Compte Client</span>
                <div className="widgetInfo">
                    <span className='nbrCostomer'>{nbrSales}</span> 
                   <span className='Rating'><FaUserCheck/></span> 
                </div>
                <span className='SubtitelC'>le Nomber de Client inscrit dans l'application </span>
            </div>
            <div className="widgetitems">
                <span className='widgettitel'>Total de Commerçant</span>
                <div className="widgetInfo">
                    <span className='nbrCostomer'>{nbrCostomer} </span> 
                    <span className='Rating'><FaUserAlt/></span>
                </div>
                <span className='SubtitelC'>le Nomber de Commerçant inscrit dans l'application </span>
            </div>
        </div>
        </div>
    );
}

export default StatWidget;
