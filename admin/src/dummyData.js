import axios from "axios";
 var Stats=[];
const GetStats=async()=>{
  const stats = await axios.get("http://localhost:8000/api/admin/stats")
      Stats=stats.data.stat;
    }
GetStats()
console.log(Stats)
export const userData = [
    {
      name: "Jan",
      "Total Commande ": 4000,
    },
    {
      name: "Feb",
      "Total Commande ": 3000,
    },
    {
      name: "Mar",
      "Total Commande ": 5000,
    },
    {
      name: "Apr",
      "Total Commande ": 4000,
    },
    {
      name: "May",
      "Total Commande ": 3000,
    },
    {
      name: "Jun",
      "Total Commande ": 2000,
    },
    {
      name: "Jul",
      "Total Commande ": 4000,
    },
    {
      name: "Agu",
      "Total Commande ": 3000,
    },
    {
      name: "Sep",
      "Total Commande ": 4000,
    },
    {
      name: "Oct",
      "Total Commande ": 1000,
    },
    {
      name: "Nov",
      "Total Commande ": 4000,
    },
    {
      name: "Dec",
      "Total Commande ": 3000,
    },
  ];
  

  
  