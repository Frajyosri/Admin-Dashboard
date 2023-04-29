import axios from 'axios';
import React from 'react';
import { FaCheck, FaRedoAlt, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import img from "../.././2953962.jpg";
const Search = () => {
    const [data,setdata]=React.useState([]);
    const [query,Setquery]=React.useState('');
    const handelchange=e=>{
        Setquery(e.target.value)
        console.log(query)
     }
     const SearchProduct=async()=>{
        try {
          const res=await axios.get(`http://localhost:8000/api/admin/Csearch?q=${query}`)
           console.log(res.data.Commercant)
           setdata(res.data.Commercant)
            } catch (error) {
          <div className='erorpage'>
            <img src='https://stock.adobe.com/images/page-not-found-error-404-a-hand-drawn-vector-layout-template-of-a-broken-robot-for-your-website-projects/119982932' alt='' />
          </div>
          
        }
      }
    return (
        <div>
             <div className="widgetLgp">
              <div className='cherchbox'>
                <input type="text" name="nom"  placeholder='saisir le non de produit ' onChange={handelchange}/>
              <button type='submit' onClick={SearchProduct} >Chercher </button>
              </div>
              </div>
              <h3 className="widgetTitle">Tous les Commerçants </h3>
             {data.length===0?
               <div className='vide '>
               <img src={img} alt='no Data '/>
               <h3 className='videT '>Aucune Commercant trouver  ..</h3>
               </div>
                :
                <>
                <table className="widgetLgTable">
                <tr className="widgetLgTr">
                  <th className="widgetLgTh">Commerçant </th>
                  <th className="widgetLgTh">Adresse </th>
                  <th className="widgetLgTh">Email</th>
                  <th className="widgetLgTh">Nomber de Commande </th>
                  <th className="widgetLgTh">Montant a Gagner</th>
                  <th className="widgetLgTh">5ales ? </th>
                  <th className="widgetLgTh">Action </th>
                </tr>
                {data.map((com)=>(
                    <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                      <img
                        src={com.image}
                        alt=""
                        className="widgetLgImg"
                      />
                      <span className="widgetLgName"> <Link to={`/historique/${com.id}`} className="link"> {com.NomCom } { com.prenomCom}</Link>  </span>
                    </td>
                    <td className="widgetLgDate">{com.Adress} </td>
                    <td className="widgetLgNam">{com.email}</td>
                    <td className="widgetLgAmount">{com.commande.length}</td>
                    <td className="widgetLgAmount">{com.montant_actuelle} </td>
                    <td className="widgetLgAmount">
                      <select>
                          <option value={com.Paye} defaultValue>Non</option>
                          <option value={true}>oui</option>
                      </select>
                    </td>
                    <td className="widgetLgStatus">
                    <button className='hidbtn'><FaTrashAlt className='next'/></button> 
                   <button className='hidbtn' >< FaRedoAlt className='next'/></button> 
                   <button className='hidbtn'><FaCheck className='next'/></button> 
                    </td>
                  </tr>
                ))}
      
        </table>
        </>
}
        </div>
    );
}

export default Search;
