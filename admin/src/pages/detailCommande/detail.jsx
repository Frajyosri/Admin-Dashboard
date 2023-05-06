import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Topbar from '../../componants/Topbar/topbar';
import "./detail.css"

const Detail = () => {
    const {id} =useParams();
    const [Facture,setfacture] =  useState([]);

    useEffect(()=>{
        const GetFacture=async()=>{
            const Facture = await axios.get(`http://localhost:8000/api/admin/facture/${id}`)
          setfacture(Facture.data)
            
        }
       
        GetFacture()
    },[id])
    console.log(Facture)
    
    return (
        <div>
           
           <div className="card">
            <Topbar/>
        <h3 className="Titel">Bon de Commande °  </h3>
            </div>
            <div className="card-body">
                <div className="client">
                   <p><span>Facturé A :</span>{Facture[0]?.nomCli} {Facture[0]?.nomCli} </p>  
                   <p><span>Telephone:</span> +216 {Facture[0]?.phoneCli}</p>
                </div>
                <div className="client">
                   <p><span>Facturé par :</span>{Facture[0]?.NomCom} {Facture[0]?.nomCom} </p>  
                   <p><span>Telephone:</span> +216 {Facture[0]?.phoneCom} </p>
                </div>
                <div className="client">
                   <p><span>Date:</span>{Facture[0]?.dateFact} </p>
                   <p><span>Code  Commande :</span>  {id} </p>
                   <p><span>livré par :</span> {Facture[0]?.nomliv} {Facture[0]?.prenomliv}</p>
                </div>
            </div>
            <div className="table">
                <table className="widgetLgTable" >
                    <thead>
                        <tr className="widgetLgTr">
                            <th scope="col" className="widgetLgTh">QTE</th>
                            <th scope="col" className="widgetLgTh">Desigation</th>
                            <th scope="col" className="widgetLgTh">Prix Unit HT</th>
                            <th scope="col" className="widgetLgTh">Remise</th>
                            <th scope="col" className="widgetLgTh">Category</th>
                            <th scope="col" className="widgetLgTh">Montant HT</th>
                        </tr>
                    </thead>
                    {Facture.map((item)=>(
                         
                    <tbody>
                    <tr className="widgetLgTr">
                    <td className="widgetLgUser">{item.qte_produit}</td>
                    <td className="widgetLgNam">{item.nom_Produit}</td>
                    <td className="widgetLgAmount">{item.prix_produit}</td>
                    <td className="widgetLgAmount">{item.remise}</td>
                    <td className="widgetLgAmount">{item.idcategory}</td>
                    <td className="widgetLgAmount">{item.qte_produit*item.prix_produit}</td>
                </tr>
                     </tbody>
                    ))}
                    
                </table>
                <p className='Total'><span>TOTAL : </span> {Facture[0]?.montant} DT </p>
                <p className='Condition'><span>Condition ET Modelité de Payment</span>  </p>
                <p className='remarque' >le paiment est du dans 15 jours / 1 moins Maximum  </p>
            </div>
           </div>
        
    );
}

export default Detail;
