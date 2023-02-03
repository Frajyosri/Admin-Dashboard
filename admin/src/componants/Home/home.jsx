import React from 'react';
import Chart from '../charts/chart';
import Widget from '../widget/widget';
import { userData } from "../../dummyData";
import WidgetLg from '../widgetLg/WidgetLg'; 
import  WidgetSm from "../widgetSm/WidgetSm";
import "./Home.css";


const Home = () => {
    return (
        <>
         <div className="home">
            Welcome Mr <span className="home-span">
                Foulen</span>, Have a Nice Day 
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
