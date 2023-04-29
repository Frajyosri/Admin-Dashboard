
import axios from "axios";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import StatWidget from "../../componants/StatWidget/StatWidget";
import "./Stat.css";

//Date Builder 
const dateBuilder=(d)=>{
    let months =["january","february","March","April",
    "May","June","July","August","September","october","November","December"];
    let days=["sunday","Monday","Tuesday","Wednesday","Thursday","friday","Saturday"];
    let day= days[d.getDay()];
    let date = d.getDate();
    let Month= months[d.getMonth()];
    let annee = d.getFullYear();
    return `${day} ${date} ${Month} ${annee}`
    }
//End Date Builder
const COLORS = ["#0dff00","#f90000"];
const COLORS2 = ["#1100f9","#00f9a2"];
const COLORS3 = ["#3F497F","#539165"];
const COLORS4 = ["#f90000","#1100f9"];
//Pie Chart Settings
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
//End pie Chart Settings


export default function App() {
    const [NbrCommandeNotPayed,SetNbrCommandeNotPayed] =React.useState(0)
    const [NbrCommandePayed,SetNbrCommandePayed] =React.useState(0)
    const [NbrCommande,SetNbrCommande] =React.useState([])
    const [NbrCommandeLivre,SetNbrCommandeLivre] =React.useState(0)
    const [NbrCommandeNotLivre,SetNbrCommandeNotLivre] =React.useState(0)
    const [NbrCommandeEnRoute,SetNbrCommandeEnRoute] =React.useState(0)
    const [ClientCommande,SetClientCommande] =React.useState([])
    var auMoin=0;
    var auPlus=0;
    var aucune=0;
    var PlusUneCmd=0;
    var MoinUneCmd=0;
         //PieChart Data 
    const data3 = [
      { name: "les Commande Livré ", value: NbrCommandeLivre},
      { name: "les Commande non Livré", value: NbrCommandeNotLivre },
      { name: "les Commande En_route", value: NbrCommandeEnRoute},
    ];
    //End PieChart  Data
    //PieChart Data 
    const data = [
        { name: "les Commande Payer ", value: NbrCommandePayed},
        { name: "les Commande non Payer", value: NbrCommandeNotPayed },
      ];
      //End PieChart  Data
    //UseEffect to Get Data 
React.useEffect(()=>{
    const GetStats=async()=>{
        const stats = await axios.get("http://localhost:8000/api/admin/CommandeNotPayed")
           SetNbrCommandeNotPayed(stats.data)
          }
          const GetPStats=async()=>{
            const stats = await axios.get("http://localhost:8000/api/admin/CommandePayed")
               SetNbrCommandePayed(stats.data)
              }
            const GetComercant=async()=>{
                const Com=await axios.get("http://localhost:8000/api/admin/CommandeCount")
                SetNbrCommande(Com.data)
            }
            const GetCommandeNotLivré=async()=>{
              const Com=await axios.get("http://localhost:8000/api/admin/CommandeC")
              SetNbrCommandeNotLivre(Com.data)
            }
            const GetCommandeLivré=async()=>{
              const Com=await axios.get("http://localhost:8000/api/admin/CommandeLivre")
              SetNbrCommandeLivre(Com.data)
            }
            const GetCommandeEnRoute=async()=>{
              const Com=await axios.get("http://localhost:8000/api/admin/CommandeEnRout")
              SetNbrCommandeEnRoute(Com.data)
            }
          const ClientCommande=async()=>{
            const client=await axios.get("http://localhost:8000/api/admin/ClientCommande")
            SetClientCommande(client.data)
          }
      GetStats()
      ClientCommande()
      GetPStats()
      GetCommandeEnRoute()
      GetCommandeNotLivré()
      GetCommandeLivré()
      GetComercant()
},[])
  for(var i=0;i<NbrCommande.length;i++) {
    if(NbrCommande[i]._count.commande===0){
        aucune++
    }else if(NbrCommande[i]._count.commande===1){
        auMoin++
    }else{
        auPlus++
    }
  }
   //PieChart Data 
   const data2 = [
    { name: "les Comerçant qui Font au moin une Commande ", value: auMoin},
    { name: "les Commande qui Font plus qu'une Commande ", value: auPlus },
    { name: "les Commande qui Font aucune Commande ", value: aucune },
  ];
  //End PieChart  Data
 for (var c = 0; c <ClientCommande.length; c++) {
  if(ClientCommande[c].commande.length>1){
    PlusUneCmd++;
  }else{
    MoinUneCmd++
  }
 }
  const data4 = [
    { name: "les client qui Font au moin une Commande ", value: MoinUneCmd},
    { name: "les Client qui Font plus qu'une Commande ", value: PlusUneCmd },
  ];
  //End PieChart  Data
  return (
  <>
   <div className='dateS'>
            {dateBuilder(new Date())}
    </div>
  
  <StatWidget/>
            
    <h4 className="Titel">Commande Statistique </h4>
    <div className="explecation">
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#f90000"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
        <div className="not">
            <div className="Rcolor"></div>
            <p>Commande non Payer </p>
        </div>
        <div className="not">
            <div className="Vcolor"></div>
            <p>Commande Payer </p>
        </div>
      
    </div>
    <hr className="Shr" />
    <div className="explecation">
        <PieChart width={400} height={400}>
          {/*commande Livrer Statistique */}
      <Pie
        data={data3}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#F7C04A"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS3[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    <div className="not">
            <div className="Ncolor"></div>
            <p>Commande Non Livré</p>
        </div>
        <div className="not">
            <div className="Lcolor"></div>
            <p>Commande  Livré</p>
        </div>
        <div className="not">
            <div className="Ocolor"></div>
            <p>Commande En route</p>
        </div>
        </div>
            {/* Commerçant  Statistique*/}
            
    <h4 className="Titel">Commerçant Statistique </h4>
    <div className="explecation">
    <PieChart width={400} height={400}>
      <Pie
        data={data2}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#f90000"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
        <div className="not">
            <div className="Rcolor"></div>
            <p>Commerçant fait aucune Commande </p>
        </div>
        <div className="not">
            <div className="kcolor"></div>
            <p>Commerçant fait plus q'une Commande</p>
        </div>
        <div className="not">
            <div className="Bcolor"></div>
            <p>Commerçant fait au moins une Commande</p>
        </div>
    </div>
 {/*Client Commande  */}
    <h4 className="Titel">Client Statistique </h4>
    <div className="explecation">
    <PieChart width={400} height={400}>
      <Pie
        data={data4}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#f90000"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS4[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
        <div className="not">
            <div className="Rcolor"></div>
            <p>Client fait Une Seul Commande </p>
        </div>
        <div className="not">
            <div className="Bcolor"></div>
            <p>Client qui Retour a Commander  Une Autre commande Apres Son Premier Commande</p>
        </div>
       
    </div>
    </>
  );
}
