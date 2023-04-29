import React from 'react';
import "./widget.css";
import axios from 'axios';
import { FaMoneyCheckAlt, FaShoppingBag, FaUserAlt } from 'react-icons/fa';

const Widget = () => {
    const [nbrCostomer, setnbrCostomer] =React.useState(0);
    const [nbrCommande, setnbrCommande] =React.useState(0);
    const [nbrSales, setnbrSales] =React.useState([]);
    
   React.useEffect(() => {
    const getCountCommercant=async()=>{
        const nbrCom= await  axios.get("http://localhost:8000/api/admin/Countcommercant")
        setnbrCostomer(nbrCom.data)
        
     }
     const getCountCommande=async()=>{
        const nbrCmd= await axios.get("http://localhost:8000/api/admin/Countcommande")
        setnbrCommande(nbrCmd.data)
       
     }
     const getCountSales=async()=>{
        const nbrSal= await axios.get("http://localhost:8000/api/admin/somme")
        setnbrSales(nbrSal.data[0]._sum.montant)
     }
   
     getCountCommercant()
     getCountCommande()
     getCountSales()
    }, []);
    return (
        <div>
             <div className="widget">
            <div className="widgetitems">
                <span className='widgettitel'>Total commerçant</span>
                <div className="widgetInfo">
                    <span className='nbrCostomer'>{nbrCostomer} </span>
                    <span className='Rating'><FaUserAlt/></span>
                </div>
                <span className='SubtitelC'>le Nomber de Commerçant inscrit dans l'application </span>
                
            </div>
            <div className="widgetitems">
                <span className='widgettitel'>Total Commande </span>
                <div className="widgetInfo">
                    <span className='nbrCostomer'>{nbrCommande} </span>
                    <span className='Rating'><FaShoppingBag/></span> 
                </div>
                <span className='Subtitel'>le Nomber  de Commande Passé </span>
            </div>
            <div className="widgetitems">
                <span className='widgettitel'>Chiffre d'Affairt </span>
                <div className="widgetInfo">
                    {nbrSales===null ? <span className='nbrCostomer'> 0 DT</span> :<span className='nbrCostomer'>{nbrSales} DT</span> }
                    
                    <span className='Rating'><FaMoneyCheckAlt/></span>
                </div>
                <span className='Subtitel'>Le Montant Total des Commandes</span>
            </div>
        </div>
        </div>
    );
}

export default Widget;
