import React from 'react';
import "./Rapport.css"
const Rapport = () => {
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
        const [data,setdata]=React.useState([]);
    return (
        <div className='rapport'>
             <div className='date'>
            {dateBuilder(new Date())}
          </div>
            <h1>Tous  les Reclamations </h1>
            {  data.length ===0 ?
              <div className='vide '><h3 className='videT '>Aucune Reclamation  ..</h3></div>
                :
                <>
                <div className='wraprapport'>
                    <div className='singlraport'>
                    <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="user_img" />
                    <div className='content'>
                     <h2>Touhami machakel </h2>
                    <p>Ma aajebni chay ani hor ka mowaten </p>
                    </div> 
                  <p className='hour'>1 hour ago </p>
                </div>
                </div>
                <div className='wraprapport'>
                    <div className='singlraport'>
                    <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="user_img" />
                    <div className='content'>
                     <h2>Touhami machakel </h2>
                    <p>Ma aajebni chay ani hor ka mowaten </p>
                    </div> 
                  <p className='hour'>1 hour ago </p>
                </div>
                </div>
                <div className='wraprapport'>
                    <div className='singlraport'>
                    <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="user_img" />
                    <div className='content'>
                     <h2>Touhami machakel </h2>
                    <p>Ma aajebni chay ani hor ka mowaten </p>
                    </div> 
                  <p className='hour'>1 hour ago </p>
                </div>
                </div>
                </>
                }
           
            </div>
    );
}

export default Rapport;
