import { Button } from '@mui/material';
import React,{useEffect} from 'react';
import { Link} from 'react-router-dom';
import Add from "../addproduct/addproduct";
import {FaPen, FaSistrix, FaTrashAlt} from "react-icons/fa"
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import "./product.css";
import img from "../.././2953962.jpg";
import axios from "axios";
import swal from 'sweetalert';

const Product = () => {
      const GetAllProduct=async ()=>{
        const res= axios.get("http://localhost:8000/api/admin/produit");
       setdata((await res).data.Product)
      }
     useEffect(()=>{
      GetAllProduct()   
     },[])
      const [data,setdata]=React.useState([]);
      const [open, setOpen] = React.useState(false);
    
      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClickclose = () => {
        setOpen(false);
      };
      
      return (
        <div>
            <div className="widgetLgp">
              <div className='cherchbox'>
                <h1>Voulez-vous chercher quelque chose?</h1>
              <Link to={`/search`}><button type='submit'  ><FaSistrix/> </button></Link>
              </div>
              <Button variant="outlined" onClick={handleClickOpen}>
                Ajouter produit </Button>
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
            src={element.image }
            alt=""
            className="widgetLgImg"
          />
          <span className="widgetLgName">{element.nom}</span>
        </td>
        <td className="widgetLgDate">{element.prix}</td>
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
             
          <Dialog
            open={open}
            keepMounted
            onClose={handleClickclose}
          >
            <DialogTitle>{"Ajouter produit "}</DialogTitle>
            <DialogContent >
              <Add/>
            </DialogContent>
          </Dialog>
        </div>
      );
              
    }
      
export default Product;
