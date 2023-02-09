import React from 'react';
import "./password.css";
const Password = () => {
    return (
        <div className='newpasswordContainer'>
            <div className='intro'>
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
              <p className='error'>Nom d'utilisateur est incorrect  </p>
             </div>
        </div>
    );
}

export default Password;
