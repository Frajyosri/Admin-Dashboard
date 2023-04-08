import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
const Category = () => {
    const [Category,SetCategory]=React.useState("");
    const handelchange=(e)=>{
        //SetCategory(e.target.value);
        SetCategory(prev=>({...prev,[e.target.name]:e.target.value}))
        console.log(Category)
    }
    const handleAjouter=async(e)=>{
        e.preventDefault();
        try {
            
            const res=await axios.post("http://localhost:8000/api/admin/category",Category)
            if(res){
                swal({
                    title: "Succes",
                    text: "Une Nouvelle Category ajouté avec succès",
                    icon: "success",
                    button: "OK",
                });
            
             SetCategory("");
            }
        } catch (error) {
          swal("Ooops !", "vouz avez un erreur ", "error", {
            button: "Ok ",
          });
          console.log(error)
        }
      }

    return (
        <div>
            <form  method="post" onSubmit={handleAjouter}>
            <input type="text" name='category'  onChange={handelchange} placeholder="Donner  Une Category " />
            <button type="submit" className='Abtn'>Ajouter</button>
      </form>
        </div>
    );
}

export default Category;
