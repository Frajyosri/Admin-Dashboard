import axios from 'axios';
import React,{useState} from 'react';
import "./addobjective.css"
import swal from 'sweetalert';
import useSWR from "swr"
import useSWRImmutable from 'swr/immutable'
const Addproduct = () => {
  const fetcher = url => axios.get("http://localhost:8000/api/admin/AllObjective").then((res)=>res.data.Objective)
  const {data,error}=useSWR("http://localhost:8000/api/admin/AllObjective",{
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  }
  )
  useSWRImmutable("http://localhost:8000/api/admin/AllObjective",fetcher)

  const [objective,setobjective] = useState(
    {
      Titel: "",
      Description: "",
      nbr_defi:""
    }
  )
  const handelchange=e=>{
    setobjective(prev=>({...prev,[e.target.name]:e.target.value}))
 }
  const handelAdd=async(e)=>{
    e.preventDefault();
    const res=  await axios.post("http://localhost:8000/api/admin/objective",objective)
.then(res=>{
     swal("Success", "Objective Added Successfully", "success")
 })
.catch(err=>{
     console.log(err)
     swal("Error", "Something Went Wrong", "error")
 })
}
  return (
    <>
    <form  method="post" onSubmit={handelAdd}>
      <div className='addojective '>
      <input type="text" name='Titel' placeholder='saisir un Titel '  onChange={handelchange}  />
      <textarea name='Description' placeholder='saisir une description ... ' onChange={handelchange}>
      </textarea>
      <input type="number" name="nbr_defi" placeholder="saisir le nombre d'objective atteind" onChange={handelchange}  />
      <button type="submit" className='Abtn'>Ajouter </button>
      </div>
      </form>
    
      </>
    
      
  );
}
export default Addproduct;
