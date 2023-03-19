import React from 'react';
import "./addobjective.css"
const Addproduct = () => {
  return (
    <div className='addojective '>
      <input type="text" name="name " placeholder='saisir un Titel '  />
      <textarea name='Desc' placeholder='saisir une description ... '>
      </textarea>
      <input type="number" name="nbr" placeholder="saisir le nombre d'objective atteind"  />
      </div>
      
  );
}

export default Addproduct;
