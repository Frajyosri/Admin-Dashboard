import React,{useState} from 'react';
import Chart from '../charts/chart';
import Widget from '../widget/widget';
import WidgetLg from '../widgetLg/WidgetLg'; 
import  WidgetSm from "../widgetSm/WidgetSm";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
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

    const User=localStorage.getItem("token");
   const [Statis,SetStatis]= useState([]);
    const navigate=useNavigate()
    //UseEfect Hook
    React.useEffect(() => {
      if(User===null){ 
      navigate("/login");
    }
    const GetStats=async()=>{
      const stats = await axios.get("http://localhost:8000/api/admin/stats")
          SetStatis(stats.data.stat)
        }
    GetStats()
    }, [User,navigate]);
    //End UseEffect Hook 

    return (
        <>
         <div className="home">
          <div > Welcome Mr <span className="home-span">
                {User}</span>, Have a Nice Day</div>
                 {dateBuilder(new Date())}
        </div>
        <Widget/>
        {<Chart data={Statis} title="Commande  Analytics"/>}
      <div className="homeWidgets">
        <WidgetLg/>
        <WidgetSm/>
      </div>
        </>
       
    );
}

export default Home;
