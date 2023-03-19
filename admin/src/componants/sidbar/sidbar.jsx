import React from 'react';
import "./sidbar.css";
import { FaAward, FaCartArrowDown, FaCartPlus, FaComment, FaHome, FaMapMarkerAlt, FaShareSquare, FaUserAlt } from 'react-icons/fa';
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
                    <img src="data:image/jpeg;base64,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" alt="user" className="image"/>
                    <span className='name'> {User} </span>
                    <input type="file" style={{ display:'none' }} id="file" />
                    <br></br>
                    <span className='post'>CEO Manager  </span>
                    <br></br>
                    <label htmlFor='file' >Changer l'image </label>
                </div>
                <div className="sidbarmenu">
                    <h3 className="sidbartitle">Dashboard</h3>
                      <ul className='sidbarliste'>
                        <li className='sidbaritems active ' ><FaHome className='icon'/><Link to={"/"} className="link">Home</Link></li>
                        <li className='sidbaritems'><FaCartArrowDown className='icon'/><Link to={"/product"} className="link">Produits</Link> </li>
                        <li className='sidbaritems'><FaUserAlt className='icon'/> <Link to={"/user"} className="link">commerçant</Link></li>
                        <li className='sidbaritems'><FaCartPlus className='icon'/><Link to={"/commande"} className="link">Commandes</Link>  </li>
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
