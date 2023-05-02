import React from 'react';
import "./Rapport.css"
import img from "../.././2953962.jpg";
import useSWR from "swr";
import axios from 'axios';
import moment from "moment"
const Rapport = () => {
  const fetcher = url => axios.get("http://localhost:8000/api/admin/Reclamation").then((res)=>res.data)
  const {data}=useSWR("http://localhost:8000/api/admin/Reclamation",fetcher)
 
    const dateBuilder=(d)=>{
        let months =["january","february","March","April",
        "May","June","July","August","September","october","November","December"];
        let days=["sunday","Monday","Tuesday","Wednesday","Thursday","friday","Saturday"];
        let day= days[d.getDay()];
        let date = d.getDate();
        let Month= months[d.getMonth()];
        let annee = d.getFullYear();
        return `${day} ${date} ${Month} ${annee}`
        }
    return (
        <div className='rapport'>
             <div className='date'>
            {dateBuilder(new Date())}
          </div>
            <h1>Tous  les Reclamations </h1>
            { data===undefined ||data.length===0?
              <div className='vide '>
                <img src={img} alt='no Data '/>
                <h3 className='videT '>Aucune Reclamation  ..</h3>
                </div>
                :
                data.map((recl)=>(
                  <div className='wraprapport' key={recl.id}>
                    <div className='singlraport'>
                    <img src="https://th.bing.com/th/id/OIP.uvrjP3go_-Rhd_jliyvIiQAAAA?w=180&h=180&c=7&r=0&o=5&pid=1.7" alt="user_img" />
                    <div className='content'>
                     <h2>{recl.nomCli} {recl.prenomCli}</h2>
                    <p>{recl.Content} </p>
                    </div> 
                  <p className='hour'>
                  {moment(recl.Date, "YYYYMMDD").fromNow()}
                  </p>
                </div>
                </div>
                ))
                
                }
           
            </div>
    );
}

export default Rapport;
