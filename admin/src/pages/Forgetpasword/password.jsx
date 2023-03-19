import {useState} from 'react';
import "./password.css";
import Topbar from "../../componants/Topbar/topbar";
import swal from 'sweetalert';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Password = () => {
    const [inputs, setinputs] = useState({
        UserName:"",
        Password:"",
        Cpassword:""
       });
        const Navigate=useNavigate()
       const handelchange=e=>{
            setinputs(prev=>({...prev,[e.target.name]:e.target.value}))
            
       }
      const handelReset=async e=>{
        e.preventDefault();
         const {Cpassword,...other}=inputs
        try {
            if(e.target.Password.value===e.target.Cpassword.value){
            const reslt=await axios.put("http://localhost:8000/api/admin/reset",other)
            swal("Yesss  !", "votre mot de passe a eté changer", "sucsses", {
                button: "Ok ",
              });
             Navigate("/login")
           } else{
                swal("Ooops !", "incompatible mot de passe ", "error", {
                    button: "Ok ",
                  });
            }
           } catch (error) {
                swal("Ooops !", "il ya un erreur ", "error", {
                   button: "Ok ",
                 });
           }
            
       }
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
             <form method='POST' onSubmit={handelReset}>  
            <input type={'text'} placeholder="Nom d'utilisateur" name='UserName' onChange={handelchange} />
            <input type={'password'} placeholder="Saisir votre password" name='Password' onChange={handelchange}/>
             <input type={"password"} placeholder="Confirmer Mot de passe " name='Cpassword' onChange={handelchange}  />
             <button type='submit' className='btn'>Changer</button>
             </form>
             </div>
        </div>
        </div>
        </>
    );
}
export default Password;
