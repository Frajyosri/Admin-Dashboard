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
    var nom_com,prenom,nom_cli,prenom_cli,phone_com,phone_cli,montant,dateFact,nomliv,prenomliv;
    if (Facture.length > 0 && 'NomCom' in Facture[0] && 'nomliv' in Facture[0] && 'prenomliv' in Facture[0]){
         nom_com = Facture[0]['NomCom']
         nomliv=Facture[0]['nomliv']
         prenomliv=Facture[0]['prenomliv']
    }
   else{
       nom_com=null;
   }
   if (Facture.length > 0 && 'prenomCom' in Facture[0]){
    prenom = Facture[0]['prenomCom']
    }
    else{
     prenom=null;
    }
    if (Facture.length > 0 && 'phoneCom' in Facture[0]){
        phone_com = Facture[0]['phoneCom']
        }
        else{
         phone_com=null;
        }
        if (Facture.length > 0 && 'phoneCli' in Facture[0] && "montant" in Facture[0]){
            phone_cli = Facture[0]['phoneCli']
            montant=Facture[0]['montant']
            }
            else{
             phone_cli=null;
            }
            if (Facture.length > 0 && 'nomCli' in Facture[0] && 'prenomCli' in Facture[0] && "dateFact" in Facture[0]){
                nom_cli = Facture[0]['nomCli']
                prenom_cli=Facture[0]['prenomCli']
                dateFact=Facture[0]['dateFact']
                }
                else{
                 nom_cli=null;
                 prenom_cli=null;
                }
    return (
        <div>
           
           <div className="card">
            <Topbar/>
        <h3 className="Titel">Bon de Commande °  </h3>
            </div>
            <div className="card-body">
                <div className="client">
                   <p><span>Facturé A :</span>{nom_cli} {prenom_cli } </p>  
                   <p><span>Telephone:</span> +216 {phone_cli}</p>
                </div>
                <div className="client">
                   <p><span>Facturé par :</span>{nom_com} {prenom} </p>  
                   <p><span>Telephone:</span> +216 {phone_com} </p>
                </div>
                <div className="client">
                   <p><span>Date:</span>{dateFact} </p>
                   <p><span>Code  Commande :</span>  {id} </p>
                   <p><span>livré par :</span> {nomliv} {prenomliv}</p>
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
                <p className='Total'><span>TOTAL : </span> {montant} DT </p>
                <p className='Condition'><span>Condition ET Modelité de Payment</span>  </p>
                <p className='remarque' >le paiment est du dans 15 jours / 1 moins Maximum  </p>
            </div>
           </div>
        
    );
}

export default Detail;
