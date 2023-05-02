import "./widgetLg.css";
import useSWR from "swr"
import moment from "moment"
import axios from 'axios';
export default function WidgetLg() {
  
  const fetcher = url => axios.get("http://localhost:8000/api/admin/lastCommande").then((res)=>res.data)
  const {data}=useSWR("http://localhost:8000/api/admin/lastCommande",fetcher)
  console.log(data)
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (

    <div className="widgetLg">
      <h3 className="widgetLgTitle">Les Dernier  Commandes </h3>
      {!data || data.length === 0?
       <div className='vide '>
       <h3 className='videtext '>Aucune Nouveux Nouveaux Commande   ..</h3>
       </div>
      :
      <table className="widgetLgTable">
      <tr className="widgetLgTr">
        <th className="widgetLgTh">Client </th>
        <th className="widgetLgTh">Date</th>
        <th className="widgetLgTh">Responsable </th>
        <th className="widgetLgTh">Payé </th>
        <th className="widgetLgTh">Etat</th>
      </tr>
      {data.map((cmd)=>(
        <>
       
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://th.bing.com/th/id/OIP.llkcvAulBp_qTfYnqOWE6AHaHW?w=215&h=212&c=7&r=0&o=5&pid=1.7"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{cmd.Client.nomCli} {cmd.Client.prenomCli}  </span>
          </td>
          <td className="widgetLgDate">{moment(cmd.Date_cmd).calendar()} </td>
          <td className="widgetLgNam">{cmd.commercant.NomCom } {cmd.commercant.prenomCom } </td>
          <td className="widgetLgAmount">
            {
              cmd.ispayed===false?
              <button className="notPayed">non  payé </button>
              :
              <button className="isPayed">payé</button>
            }
          </td>
          <td className="widgetLgStatus">
            <Button type={cmd.etat} />
          </td>
        </tr>
      
        </>
    
      ))}
    </table>
}
    </div>
  );
}
