import React from 'react';
import "./addproduct.css";
const Addproduct = () => {
  return (
    <div className='addform '>
      <input type="text" name="name " placeholder='saisir le non de produit '  />
      <input type="text" name="desc " placeholder='saisir une description de produit ' />
      <input type="number" name="prix " placeholder='saisir le prix de produit '  />
      <div className='stock '>
        <h4>Categorie  :  </h4>
        <select>
        <option value={"litre "}>Par litre</option>
        <option value={"boite"}>par boite </option>
      </select>
      </div>
      <input type="file" name="picture " className='spc'  />
      <div className='stock'>
        <h4>Les colors disponible ? : </h4>
        <input type="color" name="color" className='spc' />
        <input type="color" name="color" className='spc' />
      </div>
      <div className='stock '>
        <h4>En stock ? :  </h4>
        <select>
        <option value={"oui"}>oui</option>
        <option value={"non"}>Non</option>
      </select>
      </div>
      
    </div>
  );
}

export default Addproduct;
