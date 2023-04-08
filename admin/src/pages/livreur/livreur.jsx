import React from 'react';
import { FaSistrix, FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useSWR from "swr"
import axios from 'axios';
import img from "../.././2953962.jpg";
import swal from 'sweetalert';

const Livreur = () => {
  const navigate = useNavigate();
  const User=localStorage.getItem("token");
  React.useEffect(() => {
    if(User===null){ 
       
      navigate("/login");
    }
  }, [User,navigate]);
    const fetcher = url => axios.get("http://localhost:8000/api/admin/livreur").then((res)=>res.data.livreur)
  const {data}=useSWR("http://localhost:8000/api/admin/livreur",fetcher)
 
  console.log(data)
    return (
        <div>
             <div>
            <div className="widgetLg">
              <div className='cherchbox'>
                <h1>Voulez-vous chercher quelque chose?</h1>
              <Link to={`/searchlivreur`}><button type='submit'  ><FaSistrix/> </button></Link>
            </div>
       
        {data===undefined ||data.length===0?
               <div className='vide '>
               <img src={img} alt='no Data '/>
               <h3 className='videT '>Aucune Livreur   ..</h3>
               </div>
                :
                <>
                 <h3 className="widgetLgTitle">Tous les Livreurs </h3>
                <table className="widgetLgTable">
                <tr className="widgetLgTr">
                  <th className="widgetLgTh">Livreur  </th>
                  <th className="widgetLgTh">Adresse </th>
                  <th className="widgetLgTh">Email</th>
                  <th className="widgetLgTh">Nomber de Commande </th>
                  <th className="widgetLgTh">Action </th>
                </tr>
                {data.map((com)=>(
                    <tr className="widgetLgTr" key={com.id}>
                    <td className="widgetLgUser">
                      <img
                        src="https://th.bing.com/th/id/OIP.mjvXBLUGLahtSe83JK2WpAAAAA?pid=ImgDet&rs=1"
                        alt=""
                        className="widgetLgImg"
                      />
                      <span className="widgetLgName">  {com.nomliv } { com.prenomliv}  </span>
                    </td>
                    <td className="widgetLgDate">{com.adress} </td>
                    <td className="widgetLgNam">{com.email}</td>
                    <td className="widgetLgAmount">{com._count.commande}</td>
                    <td className="widgetLgStatus">
                    <button className='hidbtn' 
                    onClick={(e)=>{
                      e.preventDefault();
                      swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to see this livreur anymore !",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                      .then((willDelete) => {
                        if (willDelete) {
                         const response=  axios.delete(`http://localhost:8000/api/admin/livreur/${com.id}`)
                          swal("Poof! Livreur has been deleted!", {
                            icon: "success",
                          });
                          window.location.reload();
                        } else {
                          swal("livreur Not deleted ");
                        }
                      });
                 }} 
                    ><FaTrashAlt className='next'/></button> 
                    </td>
                  </tr>
                ))}
      
        </table>
        </>
               
        }
        
        
        </div>
        </div>
        </div>
    );
}

export default Livreur;
