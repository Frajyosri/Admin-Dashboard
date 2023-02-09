import React from 'react';
import Chart from '../charts/chart';
import Widget from '../widget/widget';
import { userData } from "../../dummyData";
import WidgetLg from '../widgetLg/WidgetLg'; 
import  WidgetSm from "../widgetSm/WidgetSm";
import "./Home.css";


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
    return (
        <>
         <div className="home">
          <div > Welcome Mr <span className="home-span">
                Foulen</span>, Have a Nice Day</div>
                 {dateBuilder(new Date())}
        </div>
        <Widget/>
        <Chart data={userData} title="Commande  Analytics" grid dataKey="Total Commande "/>
      <div className="homeWidgets">
        <WidgetLg/>
        <WidgetSm/>
      </div>
        

        </>
       
    );
}

export default Home;
