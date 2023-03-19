import React from 'react';
import "./historique.css"

const Historique = () => {
    return (
        <div className='hist'>
            <h2>Historique de paiment </h2><span>Monjiya Souda </span>  
            <div className="histpaiment">
            <table className="widgetLgTablepaiment ">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Date de paiment   </th>
                <th className="widgetLgTh">Montant à retirer  </th>
               </tr>
              
               <tr className="tableTr">
                    <td className="Date">05/03/2023</td>
                    <td className="Montant">150.000 DT </td>
                </tr>
                <tr className="tableTr">
                    <td className="Date">05/03/2023</td>
                    <td className="Montant">150.000 DT </td>
                </tr>
                <tr className="tableTr">
                    <td className="Date">05/03/2023</td>
                    <td className="Montant">150.000 DT </td>
                </tr>
            </table>
            </div>
        </div>
    );
}

export default Historique;
