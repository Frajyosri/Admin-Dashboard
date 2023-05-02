import React,{useState,useEffect} from 'react';
import "./commande.css"
import useSWR from "swr"
import axios from 'axios';
import img from "../.././2953962.jpg";
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';
import moment from "moment"
const Commande = () => {
  const [livreur,setlivreur]= useState([]);
  const navigate = useNavigate();
  const User=localStorage.getItem("token");
  useEffect(() => {
    if(User===null){ 
       
      navigate("/login");
    }
  }, [User,navigate]);
  const [form,setform]= useState({
    idliv:0
  });
  const fetcher = url => axios.get("http://localhost:8000/api/admin/Commande").then((res)=>res.data)
  const {data}=useSWR("http://localhost:8000/api/admin/Commande",fetcher)
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
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };

      const handelchange=e=>{
        setform({[e.target.name]:e.target.value})
   }
  
   React.useEffect(() => {
     const GetAlllivreur=async()=>{
      const reselt=await axios.get("http://localhost:8000/api/admin/livreurBydispo")
      setlivreur(reselt.data.livreur)
     }
     GetAlllivreur()
   }, []);
    return (
        <div>
          <div className='date'>
            {dateBuilder(new Date())}
          </div>
          {data===undefined ||data.length===0?
               <div className='vide '>
               <img src={img} alt='no Data '/>
               <h3 className='videT '>Aucune Commercant   ..</h3>
               </div>
                :
                <>
            <div className="widgetLg">
      <h3 className="widgetLgTitle">Tous les Commandes</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Client </th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Responsable </th>
          <th className="widgetLgTh">etat</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">livreur </th>
        </tr>
        {data.map(commande => (<tr className="widgetLgTr">
          <td className="widgetLgUser" key={commande.id_cmd}>
            <img
              src="https://th.bing.com/th/id/OIP.llkcvAulBp_qTfYnqOWE6AHaHW?w=215&h=212&c=7&r=0&o=5&pid=1.7"
              alt=""
              className="widgetLgImg"
            />
           <Link to={`/detail/${commande.id}`} className="link"><span className="widgetLgName">{commande.Client.nomCli} {commande.Client.prenomCli} </span></Link> 
          </td>
          <td className="widgetLgDate">{moment(commande.Date_cmd).calendar()} </td>
          <td className="widgetLgNam">{commande.commercant.NomCom} {commande.commercant.prenomCom} </td>
          <td className="widgetLgAmount">
          {
              commande.ispayed===false?
              <button className="notPayed">non  payé </button>
              :
              <button className="isPayed">payé</button>
            }
          </td>
          <td className="widgetLgStatus">
            <Button type={commande.etat} />
          </td>
          {commande.idliv ?
          <td>
            <select onChange={handelchange} className="livreur"  >
            <option  value={commande.idliv} selected>{commande.livreur.nomliv} {commande.livreur.prenomliv}  </option>
            </select>
          </td>
          :
          <>
           <td>
            <select onChange={handelchange} className="livreur" name='idliv' >

            <option  value={null} selected> Choisire Un Livreur  </option>
              {livreur.map((liv)=>(
                <option value={liv.id}  >{liv.nomliv} {liv.prenomliv} </option>
              ))}
            </select>
          </td>
          <td><button className='confirmer ' onClick={async(e)=>{
            e.preventDefault();
              const res= await axios.put(`http://localhost:8000/api/admin/Commande/${commande.id}`,{
                idliv:parseInt(form.idliv)
              })
             if(res.statusText==="OK") {
                swal("Un Livreur  a eté Definir Pour Ce Commande  ", "sucsses", {
                  button: "Ok ",
                });
              }
              window.location.reload()
          
          
          }}>Confirmer</button></td>
       
          </>
        }
         </tr> 
       ))
        
          }
    
      </table>
    </div>
    </>
}
        </div>
    );
}
export default Commande;
