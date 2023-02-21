import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css"
import Topbar from "../../componants/Topbar/topbar"
const Login = () => {
    return (
        <>
        <Topbar/>
        <div className='allside'>
            <div className='leftside'>
            <img src="https://img.freepik.com/free-vector/cloud-storage-idea-online-computing-internet-database-backup-server-programming-equipment-limited-access-control-pass-privacy-settings-vector-isolated-concept-metaphor-illustration_335657-4337.jpg?w=740&t=st=1675950861~exp=1675951461~hmac=4919224b6dd00af60514aa2da97ae74e5e8fd94b7aa9c57f131aea3d5a967819" alt='loginIcon'/>
            <h3 className='quote'>Decouvrir votre progression de projet </h3>
            </div>
        <div className='Logincontainer'>
            <h1>Login</h1>
             <h3> Welcome back Again ... </h3>
             <form> 
            <input type={'text'} placeholder="Nom d'utilisateur" name='name'/>
            <input type={'password'} placeholder="Saisir votre password" name='psd'/>
              <Link  to={"/newpassword"} className="new">mot de passe oublier ?</Link>
            <button type='submit'> Connexion</button>
            </form>
           
        </div>
        </div>
        </>
    );
}

export default Login;
