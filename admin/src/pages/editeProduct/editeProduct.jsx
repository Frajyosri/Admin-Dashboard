import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import swal from 'sweetalert';
const EditeProduct = () => {
  const [formData, setFormData] = useState({
    nom:"",
    description:"",
    prix:"",
    color:"color",
    pht:"",
    pat:"",
    remise:""
  });
  const { id } = useParams();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
       axios.put(`http://localhost:8000/api/admin/produit/${id}`, formData).then((response) => {
      if(response.status===201){
        swal("Good job!", "Produit a eté Modifier ", "success");
      }
    });
    } catch (error) {
      swal("Warning !! ", "il ya une erreur ", "error");
    }
   
  };

  useEffect(()  => {
    const GetProductById=async()=>{
      // Fetch the data for the specified ID
      try{
      const response= await axios.get(`http://localhost:8000/api/admin/produit/${id}`)
      setFormData(response.data.GetProdById);
    } catch (error) {
      console.log(error)
    }
      } 
  GetProductById()
  }, [id]);


    return (
        <div className='addform '>
            <h1>Modifier Produit </h1>
      <form  method="post" onSubmit={handleSubmit}>
      <input type="text" name="nom" placeholder='saisir le non de produit ' value={formData.nom} onChange={handleInputChange}  />
      <input type="text" name="description" placeholder='saisir une description de produit ' value={formData.description} onChange={handleInputChange} />
      <input type="number" name="prix" placeholder='saisir le prix de produit ' value={formData.prix}  onChange={handleInputChange}  />
      <div className='stock'>
        <h4>Le color disponible ? : </h4>
        <input type="color" name="color" className='spc'   onChange={handleInputChange}/>
      </div>
      <input type="number" name="pht" placeholder='saisir le prix de produit sans tages ' value={formData.pat} onChange={handleInputChange}  />
      <input type="number" name="pat" placeholder='saisir le prix de produit avec tages ' value={formData.pht} onChange={handleInputChange} />
      <input type="number" name="remise" placeholder="saisir le remise s'il existe  " value={formData.remise} onChange={handleInputChange}  />
      <div className="bottom">
         <button className='Abtn'>Update </button>
      <Link to={"/product"} ><button className='Abtn'>Retour </button></Link>  
      </div>
      </form>
    </div>
    );
}

export default EditeProduct;
