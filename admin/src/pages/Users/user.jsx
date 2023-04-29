import React,{useEffect} from 'react';
import { FaTrashAlt,FaRedoAlt, FaSistrix, FaCheck} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./user.css";
import useSWR from "swr"
import axios from 'axios';
import img from "../.././2953962.jpg";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [montant,setmontant]=React.useState(0)
  const navigate = useNavigate();
  const User=localStorage.getItem("token");
  useEffect(() => {
    if(User===null){ 
       
      navigate("/login");
    }
  }, [User,navigate]);
  const fetcher = url => axios.get("http://localhost:8000/api/admin/Comercant").then((res)=>res.data)
  const {data}=useSWR("http://localhost:8000/api/admin/Comercant",fetcher)
  console.log(data)
    return (
        <div>
            <div className="widgetLg">
              <div className='cherchbox'>
                <h1>Voulez-vous chercher quelque chose?</h1>
              <Link to={`/searchComercant`}><button type='submit'  ><FaSistrix/> </button></Link>
            </div>
       
        {data===undefined ||data.length===0?
               <div className='vide '>
               <img src={img} alt='no Data '/>
               <h3 className='videT '>Aucune Commercant   ..</h3>
               </div>
                :
                <>
                 <h3 className="widgetLgTitle">Tous les Commerçants </h3>
                <table className="widgetLgTable">
                <tr className="widgetLgTr">
                  <th className="widgetLgTh">Commerçant </th>
                  <th className="widgetLgTh">Adresse </th>
                  <th className="widgetLgTh">Email</th>
                  <th className="widgetLgTh">Nomber de Commande </th>
                  <th className="widgetLgTh">Montant a Gagner</th>
                  <th className="widgetLgTh">payé </th>
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
                      <span className="widgetLgNom"> <Link to={`/historique/${com.id}`} className="link"> {com.NomCom } { com.prenomCom}</Link>  </span>
                    </td>
                    <td className="widgetLgDate">{com.Adress} </td>
                    <td className="widgetLgNam">{com.email}</td>
                    <td className="widgetLgAmount">{com.commande.length}</td>
                    <td className="widgetLgAmount">{com.montant_actuelle} </td>
                    <td className="widgetLgAmount">
                      <select onChange={()=>{
                        console.log(montant)
                      }}>
                          <option value={false} >Non</option>
                          <option value={true}>oui</option>
                      </select>
                    </td>
                    <td className="widgetLgStatus">
                    <button className='hidbtn' 
                    onClick={(e)=>{
                      e.preventDefault();
                      swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to see this Commerçant anymore !",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                      .then((willDelete) => {
                        if (willDelete) {
                         const response=  axios.delete(`http://localhost:8000/api/admin/comercant/${com.id}`)
                          swal("Poof! Commerçant has been deleted!", {
                            icon: "success",
                          });
                          window.location.reload();
                        } else {
                          swal("Commerçant Not deleted ");
                        }
                      });
                 }} 
                    ><FaTrashAlt className='next'/></button> 
                   <button className='hidbtn' onClick={async(e)=>{
                    e.preventDefault();
                    const res=await axios.put(`http://localhost:8000/api/admin/commercant/reset/${com.id}`)
                    console.log(res)
                    window.location.reload();
                   }} >
                    < FaRedoAlt className='next'/></button> 
                   <button className='hidbtn' onClick={async(e)=>{
                    const response=await axios.post(`http://localhost:8000/api/admin/historique/${com.id}`,{
                      montant:com.montant_actuelle,
                    })
                    if(response.status===200){
                      swal("Poof! Commerçant Salary  has been Updated!", {
                        icon: "success",
                      });
                      window.location.reload();
                    }
                   }}><FaCheck className='next'/></button> 
                    </td>
                  </tr>
                ))}
      
        </table>
        </>     
        }
        </div>
        </div>
    );
}

export default User;
