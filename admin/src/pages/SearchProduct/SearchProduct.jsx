import axios from 'axios';
import React from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import img from "../.././2953962.jpg";
const SearchProduct = () => {
    const [data,setdata]=React.useState([]);
    const [query,Setquery]=React.useState('');

    const handelchange=e=>{
        Setquery(e.target.value)
        console.log(query)
     }
        const SearchProduct=async()=>{
            try {
              const res=await axios.get(`http://localhost:8000/api/admin/search?q=${query}`)
             setdata(res.data.Product) 
             console.log(res.data)  
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
              <h3 className="widgetTitle">Tous les produits  </h3>
              {data.length===0?
               <div className='vide '>
               <img src={img} alt='no Data '/>
               <h3 className='videT '>Aucune Produit  ..</h3>
               </div>
                :
                  <table className="widgetLgTable">
                    <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">produit </th>
          <th className="widgetLgTh">Prix </th>
          <th className="widgetLgTh">Categorie </th>
          <th className="widgetLgTh">Action </th>
        </tr>
       {data.map((element) => (
        <tr className="widgetLgTr" key={element.id} >
        <td className="widgetLgUser" >
          <img
            src={element.image}
            alt=""
            className="widgetLgImg"
          />
          <span className="widgetLgName">{element.nom_Produit}</span>
        </td>
        <td className="widgetLgDate">{element.prix_produit}</td>
        <td className="widgetLgNam"><span> {element.idcategory} </span> </td>
        <td className="widgetLgStatus">
           <Link to={`/edite/${element.id}`} className="link"><FaPen className='next'/></Link> 
        <button onClick={(e)=>{
             e.preventDefault();
             swal({
               title: "Are you sure?",
               text: "Once deleted, you will not be able to see this Product anymore !",
               icon: "warning",
               buttons: true,
               dangerMode: true,
             })
             .then((willDelete) => {
               if (willDelete) {
                const response=  axios.delete(`http://localhost:8000/api/admin/product/${element.id}`)
                 swal("Poof! Your product has been deleted!", {
                   icon: "success",
                 });
               } else {
                 swal("Product Not deleted ");
               }
             });
        }} className="hidbtn"><FaTrashAlt className='next' /> </button> 
        </td>
        </tr>
       ))}
          </tbody>
        </table>
                
                
}
             
        </div>
    );
}

export default SearchProduct;
