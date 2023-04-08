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
import axios from 'axios';
import useSWR from "swr"
import useSWRImmutable from 'swr/immutable'
import swal from 'sweetalert';

const Objective = () => {
    const [open, setOpen] = React.useState(false);
    const fetcher = url => axios.get("http://localhost:8000/api/admin/AllObjective").then((res)=>res.data.Objective)
    const {data,error}=useSWR("http://localhost:8000/api/admin/AllObjective",fetcher)
    console.log(data)
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
            { data===undefined ||data.length===0?
              <div className='vide '>
                <img src={img} alt='no Data '/>
                <h3 className='videT '>Aucune Objective  ..</h3>
                </div>
                :
                data.map((obj)=>(
            <div className='singleobjective ' key={obj.id}>
                <h2>{obj.Titel}</h2>
                <div className="description">
                <p>{obj.Description}</p> 
                <button className='hidbtn' onClick={(e)=>{
                   e.preventDefault();
                   swal({
                     title: "Are you sure?",
                     text: "Once deleted, anyone will not be able to see this objective anymore !",
                     icon: "warning",
                     buttons: true,
                     dangerMode: true,
                   })
                   .then((willDelete) => {
                     if (willDelete) {
                      const response=  axios.delete(`http://localhost:8000/api/admin/objective/${obj.id}`)
                       swal("Poof! Your objective has been deleted!", {
                         icon: "success",
                       });
                       window.location.reload();
                     } else {
                       swal("Objective Not deleted ");
                     }
                   });
                }}>
                <FaTrashAlt className='del'/></button>  
                </div>
                
            </div>
                ))
               
                    }
            <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
          >
            <DialogTitle>{"Ajouter Nouveaux Objective"}</DialogTitle>
            <DialogContent>
              <Add />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Retour</Button>
            </DialogActions>
          </Dialog>
        </div>
        
    );
}

export default Objective;
