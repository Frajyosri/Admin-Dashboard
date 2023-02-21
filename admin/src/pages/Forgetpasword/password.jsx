import React from 'react';
import "./password.css";
import Topbar from "../../componants/Topbar/topbar"
const Password = () => {
    return (
        <>
        <Topbar/>
        <div className='newpasswordalside'>
            <img src='https://img.freepik.com/premium-vector/forgot-password-account-login-web-page-protection-security-key-access-system-smartphone-computer-flat-vector-illustration_2175-1382.jpg?w=740' alt='forgetpassword'/>
            <div className='intro'>
        <div className='newpasswordContainer'>
            <h1 > Vouz avez <span className='oublier'>oublier</span> Votre mot de passe ? </h1>
           <p>ça arrive à tout le Monde ! Vous pouvez Modifier votre Mot
             de passe a tout momment . C'est Simple et Rapide :)  </p>
            </div>
            <div className='formul'> 
             <label>Indiquer a nous votre Nom d'utilisateur </label>
             <input type={"Text"} placeholder="Nom d'utilisateur" /> 
             <input type={"password"} placeholder="Nouveaux Mot de passe " />
             <input type={"password"} placeholder="Confirmer Mot de passe " />
             <button type='submit' className='btn'>Changer</button>
             </div>
        </div>
        </div>
        </>
    );
}
export default Password;
