import React,{useState,useEffect} from 'react';
import "./sidbar.css";
import { FaAward, FaCartArrowDown, FaCartPlus, FaComment, FaHome, FaMapMarkerAlt, FaShareSquare, FaUserAlt,FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const User=localStorage.getItem("token");
const handelLogout =async e=>{
    e.preventDefault();
   localStorage.removeItem("token");
}
const Sidbar = () => {
    
    return (
        <div className='sidbar'>
            <div className="sidbarwraper">
                <div className="sidbarimage">
                    <img src={"https://th.bing.com/th/id/R.50fd05c2825e9d476583d350c3afbc3f?rik=SZClPhmMhiAz1w&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery%2f407905.png&ehk=e4LxHFtrW7s%2fPosBaKsDfr%2f0Jv%2bh3jp%2fdxqwAdi8q%2fU%3d&risl=&pid=ImgRaw&r=0"} alt="user" className="image"/>
                    <span className='name'> {User} </span>
                    <br></br>
                    <span className='post'>CEO Manager  </span>
                    <br></br>
                </div>
                <div className="sidbarmenu">
                    <h3 className="sidbartitle">Dashboard</h3>
                      <ul className='sidbarliste'>
                        <li className='sidbaritems active ' ><FaHome className='icon'/><Link to={"/"} className="link">Home</Link></li>
                        <li className='sidbaritems'><FaCartArrowDown className='icon'/><Link to={"/product"} className="link">Produits</Link> </li>
                        <li className='sidbaritems'><FaUserAlt className='icon'/> <Link to={"/user"} className="link">commerçant</Link></li>
                        <li className='sidbaritems'><FaUserAlt className='icon'/> <Link to={"/livreur"} className="link">livreur</Link></li>
                         <li className='sidbaritems'><FaCartPlus className='icon'/><Link to={"/commande"} className="link">Commandes</Link>  </li>
                         <li className='sidbaritems'><FaChartLine className='icon'/><Link to={"/statistique"} className="link">Statistique</Link> </li>
                        <li className='sidbaritems'> <FaAward className='icon'/> <Link to={"/objective"} className="link">Objective</Link> </li>
                        <li className='sidbaritems'><FaMapMarkerAlt className='icon'/><Link to={"/location"} className="link">Geographie</Link> </li>
                        <li className='sidbaritems'><FaComment className='icon'/><Link to={"/rapport"} className="link">Rapport</Link> </li>
                       
                        <li className='sidbarlogout'><button className='ibtn ' onClick={handelLogout}><FaShareSquare className='icon' /><Link to={"/login"} className="link"> Exit </Link></button>  </li>
                      </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidbar;
