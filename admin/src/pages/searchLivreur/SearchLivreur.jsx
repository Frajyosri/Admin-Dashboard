import React from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import img from "../.././2953962.jpg";
import swal from 'sweetalert';
const SearchLivreur = () => {
    const [data,setdata]=React.useState([]);
    const [query,Setquery]=React.useState('');
    const handelchange=e=>{
        Setquery(e.target.value)
        console.log(query)
     }
     const SearchProduct=async()=>{
        try {
          const res=await axios.get(`http://localhost:8000/api/admin/Lsearch?q=${query}`)
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
             { data.length===0?
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
                    <tr className="widgetLgTr">
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
    );
}

export default SearchLivreur;
