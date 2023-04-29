import axios from 'axios';
import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./historique.css"
import img from "../.././2953962.jpg";

const Historique = () => {
    const [data,setdata] = React.useState([]);
   const  {id}=useParams();

    useEffect(() => {
       const GetHistorique=(async() =>{
        const res=await axios.get(`http://localhost:8000/api/admin/Chistorique/${id}`)
        setdata(res.data)
       });
       GetHistorique()
    }, [id]);
    console.log(data)
    return (
        <div className='hist'>
            <h2>Historique de paiment </h2> 
            {data.length===0 || data===undefined?
             <div className='vide '>
             <img src={img} alt='no Data '/>
             <h3 className='videT '>Aucune Historique ... </h3>
             </div>
              :
              data.map((item)=>(
                <>   
            <div className="histpaiment" >
            <span>{item.NomCom } { item.prenomCom} </span> 
            <table className="widgetLgTablepaiment ">
                <tbody>
            <tr className="widgetLgTr" key={item.id}>
                <th className="widgetLgTh">Date de paiment   </th>
                <th className="widgetLgTh">Montant à retirer  </th>
               </tr>
               {item.historique.map((hist)=>(
                 <tr className="tableTr">
                 <td className="Date">{hist.Date} </td>
                 <td className="Montant">{hist.montant} </td>
             </tr>
               ))}
              
            </tbody>
            </table>
            </div>
                </>
              ))
            }

           
        </div>
    );
}

export default Historique;
