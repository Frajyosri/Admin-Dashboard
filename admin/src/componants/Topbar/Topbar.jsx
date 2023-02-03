import React from 'react';
import {  FaShareSquare } from 'react-icons/fa';
import "./topbar.css";

const Topbar = () => {
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
        <div className='header'>
            <div className="logo">
                This is a logo 
            </div>
            <div className='day'>
          {dateBuilder(new Date())}
           </div>
            <div className='exit'>
                    <FaShareSquare className='logout'/>
                    <span>Exite</span>
            </div>
          
            
            
        </div>
    );
}

export default Topbar;

