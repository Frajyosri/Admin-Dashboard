import axios from 'axios';
import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import "./addproduct.css";
const Addproduct = () => {

 
  const [Product,SetProduct]=React.useState({
    nom:"",
    description:"",
    prix:"",
    color:"",
    idcategory:"",
    pat:"",
    pht:"",
    remise:"",
    image:""
  });
  const [Category,SetCategory]=React.useState([]);

  const handelchange=e=>{
   SetProduct(prev=>({...prev,[e.target.name]:e.target.value}))
}
  const handleAjouter=async(e)=>{
    e.preventDefault();
    try {
      const res=axios.post("http://localhost:8000/api/admin/produit",Product)
      if(res){
        swal("votre Produit a eté Ajouter  ", "sucsses", {
          button: "Ok ",
        });
      }
    } catch (error) {
      swal("Ooops !", "vouz avez un erreur ", "error", {
        button: "Ok ",
      });
      console.log(error)
    }
  }
 
  const GetCategory =async(e)=>{
    try {
      const reslt= await axios.get("http://localhost:8000/api/admin/category")
     SetCategory(reslt.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    GetCategory()
  }, []);

  return (
    <div className='addform '>
      <form  method="post" onSubmit={handleAjouter}>
      <input type="text" name="nom" placeholder='saisir le non de produit ' onChange={handelchange}  />
      <input type="text" name="description" placeholder='saisir une description de produit ' onChange={handelchange} />
      <input type="number" name="prix" placeholder='saisir le prix de produit ' onChange={handelchange}  />
      <div className='stock'>
        <h4>Le color disponible ? : </h4>
        <input type="color" name="color" className='spc'  onChange={handelchange}/>
      </div>
      <div className='stock '>
        <h4>Categorie  :  </h4>
        <select onChange={handelchange} name="idcategory">
          {Category.map((cat)=>(
             <option value={cat.id}>{cat.category}</option>
          ))}
       
      </select>
      </div>
      <input type="number" name="pat" placeholder='saisir le prix de produit avec tages ' onChange={handelchange}  />
      <input type="number" name="pht" placeholder='saisir le prix de produit sans tages ' onChange={handelchange} />
      <input type="number" name="remise" placeholder="saisir le remise s'il existe  " onChange={handelchange}  />
      <input type="file" name="image" className='spc' onChange={handelchange}  />
      <div className="bottom">
         <button className='Abtn'>Ajouter </button> 
      </div>
      </form>
    </div>
  );
}

export default Addproduct;
