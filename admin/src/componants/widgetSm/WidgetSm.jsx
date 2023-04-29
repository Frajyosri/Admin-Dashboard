import axios from "axios";
import { Link } from "react-router-dom";
import "./widgetSm.css";
import useSWR from "swr"

export default function WidgetSm() {
  const fetcher = url => axios.get("http://localhost:8000/api/admin/lastCommercant").then((res)=>res.data.reslt)
  const {data}=useSWR("http://localhost:8000/api/admin/lastCommercant",fetcher)
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Les Nouveaux  Members</span>
      {
        !data||data.length===0?
        <div className='vide '>
               <h3 className='videtext '>Aucune Nouveux Member  ..</h3>
               </div>
               :
                data.map((item)=>(<>
                <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src={item.image}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{item.NomCom } { item.prenomCom} </span>
            <span className="widgetSmUserTitle">{item.Adress} </span>
          </div>
          <Link to={"/user"}  className="widgetSmButton">
            Display
          </Link>
        </li>
        </ul>
               </>))
               
              
      }
      
    </div>
  );
}
