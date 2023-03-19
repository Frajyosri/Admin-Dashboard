import React from 'react';
import "./objective.css";
import Dialog from '@mui/material/Dialog';
import Add from "../Addobjective/addobjective";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {FaTrashAlt} from "react-icons/fa"
import { Button } from '@mui/material';
import img from "../.././2953962.jpg";
const Objective = () => {
    const [open, setOpen] = React.useState(false);
    const [data,setdata]= React.useState([])
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <div className='objective '>
            <div className="obheader">
                <h1>Liste of objective </h1>
              <Button variant="outlined" onClick={handleClickOpen}>
                Ajouter Nouveaux Objective </Button>
            </div>
            <hr/>
            { data.length ===0 ?
              <div className='vide '>
                <img src={img} alt='no Data '/>
                <h3 className='videT '>Aucune Objective  ..</h3>
                </div>
                :
                <>
            <div className='singleobjective '>
                <h2>Effectuer une 50 operation de vente </h2>
                <p>Effectuer une 50 operation de vente pour Amelioré votre Classement et agrandir votre Porçentage de vente  <FaTrashAlt className='del'/> </p>
            </div>
            <div className='singleobjective '>
                <h2>Effectuer une 100 operation de vente </h2>
                <p>Effectuer une 100 operation de vente pour Amelioré votre Classement et agrandir votre Porçentage de vente  <FaTrashAlt className='del'/> </p>
               
            </div>
            <div className='singleobjective '>
                <h2>Effectuer une 150 operation de vente </h2>
                <p>Effectuer une 150 operation de vente pour Amelioré votre Classement et agrandir votre Porçentage de vente  <FaTrashAlt className='del'/></p>
            </div>
            </>
                    }
            <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
          >
            <DialogTitle>{"Ajouter Nouveaux Objective"}</DialogTitle>
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

export default Objective;
