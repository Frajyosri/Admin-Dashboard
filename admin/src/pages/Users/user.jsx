import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import "./user.css";
const User = () => {
    return (
        <div>
          
            <div className="widgetLg">
              <div className='cherchbox'>
                <input type="email" name="email" placeholder='E.g Foulen@gmail.com  '/>
                <button type='submit'>Chercher </button>
            </div>
        <h3 className="widgetLgTitle">Tous les Commerçants </h3>
        <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Client </th>
          <th className="widgetLgTh">Adresse </th>
          <th className="widgetLgTh">Email</th>
          <th className="widgetLgTh">Nomber de Commande </th>
          <th className="widgetLgTh">Montant a Gagner</th>
          <th className="widgetLgTh">5ales ? </th>
          <th className="widgetLgTh">Action </th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Monjiya el souda </span>
          </td>
          <td className="widgetLgDate">Tunis</td>
          <td className="widgetLgNam">Mongia@gmail.com</td>
          <td className="widgetLgAmount">3</td>
          <td className="widgetLgAmount">150DT</td>
          <td className="widgetLgAmount">
            <select>
                <option value={"non"}>Non</option>
                <option value={"oui"}>oui</option>
            </select>
          </td>
          <td className="widgetLgStatus">
          <FaTrashAlt className='next'/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Monjiya el souda </span>
          </td>
          <td className="widgetLgDate">Tunis</td>
          <td className="widgetLgNam">Mongia@gmail.com</td>
          <td className="widgetLgAmount">3</td>
          <td className="widgetLgAmount">150DT</td>
          <td className="widgetLgAmount">
          <select>
                <option value={"non"}>Non</option>
                <option value={"oui"}>oui</option>
            </select>
          </td>
          <td className="widgetLgStatus"></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Monjiya el souda </span>
          </td>
          <td className="widgetLgDate">Tunis</td>
          <td className="widgetLgNam">Mongia@gmail.com</td>
          <td className="widgetLgAmount">3</td>
          <td className="widgetLgAmount">150DT</td>
          <td className="widgetLgAmount">
            <select>
                <option value={"oui"}>oui</option>
                <option value={"Non"}>Non</option>
            </select>
          </td>
          <td className="widgetLgStatus"></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Monjiya el souda </span>
          </td>
          <td className="widgetLgDate">Tunis</td>
          <td className="widgetLgNam">Mongia@gmail.com</td>
          <td className="widgetLgAmount">3</td>
          <td className="widgetLgAmount">150DT</td>
          <td className="widgetLgAmount">
          <select>
                <option value={"non"}>Non</option>
                <option value={"oui"}>oui</option>
            </select>
          </td>
          <td className="widgetLgStatus"></td>
        </tr>
        </table>
        </div>
        </div>
    );
}

export default User;
