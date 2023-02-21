import { Button } from '@mui/material';
import React from 'react';
import Add from "../addproduct/addproduct";
import {FaPen, FaTrashAlt} from "react-icons/fa"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import "./product.css";
const Product = () => {
      const [open, setOpen] = React.useState(false);
      const [data,setdata]=React.useState([]);
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      return (
        <div>
            <div className="widgetLgp">
              <div className='cherchbox'>
                <input type="email" name="email" placeholder='saisir le non de produit '/>
                <button type='submit'>Chercher </button>
              </div>
              <Button variant="outlined" onClick={handleClickOpen}>
                Ajouter produit </Button>
              </div>
              <h3 className="widgetTitle">Tous les produits  </h3>
              { data.length ===0 ?
              <div className='vide '><h3 className='videT '>Aucune produit ..</h3></div>
                :
                <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">produit </th>
          <th className="widgetLgTh">Prix </th>
          <th className="widgetLgTh">Categorie </th>
          <th className="widgetLgTh">Etat  </th>
          <th className="widgetLgTh">Action </th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Fachfacha bta3 riha </span>
          </td>
          <td className="widgetLgDate">22.5 DT</td>
          <td className="widgetLgNam"><span>par litre </span> </td>
          <td className="widgetLgNam"><span>En stock </span> </td>
          <td className="widgetLgStatus">
            <FaPen className='next'/>
            <FaTrashAlt className='next'/>
          </td>
        </tr>
        </table>
              }
             
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
          >
            <DialogTitle>{"Ajouter produit "}</DialogTitle>
            <DialogContent>
              <Add/>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} >Ajouter</Button>
              <Button onClick={handleClose}>Annuler</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
    
export default Product;
