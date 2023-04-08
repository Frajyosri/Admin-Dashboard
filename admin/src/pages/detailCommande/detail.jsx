import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Topbar from '../../componants/Topbar/topbar';
import "./detail.css"

const Detail = () => {
    const {id} =useParams();
    const [Facture,setfacture] =  useState([]);
    const [CardItem,setCardItem] = useState([]);

    useEffect(()=>{
        const GetFacture=async()=>{
            const Facture = await axios.get(`http://localhost:8000/api/admin/facture/${id}`)
          setfacture(Facture.data.Facture)
            
        }
       const GetCardItem=async()=>{
            const CardItem = await axios.get(`http://localhost:8000/api/admin/cardItem/${Facture.idCard}`)
            console.log(CardItem.data.Card)
            setCardItem(CardItem.data.Card)
        }
        GetFacture()
        GetCardItem()
    },[id,Facture.idCard])
    console.log(Facture)
    return (
        <div>
           
           <div className="card">
            <Topbar/>
        <h3 className="widgetLgTitle ">Bon de Commande Num° {id} </h3>
            </div>
            <div className="card-body">
                <div className="client">
                   <p><span>Facturé A :</span>{Facture.Client.nom} {Facture.Client.prenom} </p>  
                   <p><span>Telephone:</span></p>
                </div>
                <div className="client">
                   <p><span>Facturé par :</span></p>  
                   <p><span>Telephone:</span></p>
                </div>
                <div className="client">
                   <p><span>Numuro Facture:</span></p>  
                   <p><span>Date:</span></p>
                   <p><span>Code  Commande :</span> </p>
                   <p><span>livré par :</span></p>
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
                    <tbody>
                        <tr className="widgetLgTr">
                            <td className="widgetLgUser"></td>
                            <td className="widgetLgNam"></td>
                            <td className="widgetLgAmount"></td>
                            <td className="widgetLgAmount"></td>
                            <td className="widgetLgAmount"></td>
                            <td className="widgetLgAmount"></td>
                        </tr>
                    </tbody>
                </table>
                <p className='Total'><span>TOTAL : </span></p>
                <p className='Condition'><span>Condition ET Modelité de Payment</span>  </p>
                <p className='remarque' >le paiment est du dans 15 jours / 1 moins Maximum  </p>
            </div>
           </div>
        
    );
}

export default Detail;
