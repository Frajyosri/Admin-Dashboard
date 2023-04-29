import axios from 'axios';
import React,{useEffect} from 'react';
import swal from 'sweetalert';
import "./addproduct.css";
import useSWR from "swr"
const Addproduct = () => {

 
 /* const [Product,SetProduct]=React.useState({
    nom:"",
    description:"",
    prix:"",
    color:"",
    idcategory:"",
    pat:"",
    pht:"",
    remise:"",
    image:""
  });*/
  const [imageProduct,SetimageProduct]=React.useState("");
  const [nom,Setnom]=React.useState('');
  const [description,Setdescription]=React.useState('');
  const [prix,Setprix]=React.useState(0);
  const [color,Setcolor]=React.useState("");
  const [idcategory,Setidcategory]=React.useState("")
 const [pat,Setpat]=React.useState(0);
 const [pht,Setpht]=React.useState(0);
 const [remise,Setremise]=React.useState(0);
 const[category,Setcategory]=React.useState([]);
  const fetcher = url => axios.get("http://localhost:8000/api/admin/produit").then((res)=>res.data.Product)
  const {data}=useSWR("http://localhost:8000/api/admin/produit",fetcher);
  const transformFile=async(file)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>{
      SetimageProduct(reader.result);
    }
  }
  const handelchangeImage=e=>{
    const file=e.target.files[0];
    transformFile(file);
}
const handelchangeName=e=>{
  const name=e.target.value;
  Setnom(name);
}
const handelchangeDesc=e=>{
  const Desc=e.target.value;
  Setdescription(Desc);
}
const handelchangePrix=e=>{
  const prix=e.target.value;
  Setprix(prix);
}
const handelchangeColor=e=>{
  const color=e.target.value;
  Setcolor(color);
}
const handelchangePat=e=>{
  const pat=e.target.value;
  Setpat(pat);
}
const handelchangePht=e=>{
  const pht=e.target.value;
  Setpht(pht);
}
const handelchangeRemise=e=>{
  const remise=e.target.value;
  Setremise(remise);
}
const handelchangeCategory=e=>{
  const idCat=e.target.value;
  Setidcategory(idCat);
}
  const handleAjouter=async(e)=>{
    e.preventDefault();
    try {
      const res= await axios.post("http://localhost:8000/api/admin/produit",{
        nom_produit:nom,
        description:description,
        prix_produit:prix,
        color:color,
        idcategory:idcategory,
        pat:pat,
        pht:pht,
        remise:remise,
        image:imageProduct

      })
      if(res.status===201){
        swal("votre Produit a eté Ajouter  ", "sucsses", {
         timer: 1000,
          button: false,
          timerProgressBar: true,
          closeOnClickOutside: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location.reload()
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
      Setcategory(reslt.data)
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
      <input type="text" name="nom" placeholder='saisir le non de produit ' onChange={handelchangeName}   />
      <input type="text" name="description" placeholder='saisir une description de produit ' onChange={handelchangeDesc} />
      <input type="number" name="prix" placeholder='saisir le prix de produit ' onChange={handelchangePrix}   />
      <div className='stock'>
        <h4>Le color disponible ? : </h4>
        <input type="color" name="color" className='spc' onChange={handelchangeColor}   />
      </div>
      <div className='stock '>
        <h4>Categorie  :  </h4>
        <select  name="idcategory" onChange={handelchangeCategory}>
          {category.map((cat)=>(
             <option value={cat.id}>{cat.category}</option>
          ))}
       
      </select>
      </div>
      <input type="number" name="pat" placeholder='saisir le prix de produit avec tages ' onChange={handelchangePat}       />
      <input type="number" name="pht" placeholder='saisir le prix de produit sans tages ' onChange={handelchangePht}    />
      <input type="number" name="remise" placeholder="saisir le remise s'il existe  "     onChange={handelchangeRemise}      />
      <input type="file" name="image" className='spc' onChange={handelchangeImage}  />
      <div className="bottom">
         <button className='Abtn'>Ajouter </button> 
      </div>
      </form>
    </div>
  );
}

export default Addproduct;
