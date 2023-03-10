import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Les Dernier  Commandes </h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Client </th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Responsable </th>
          <th className="widgetLgTh">Montant </th>
          <th className="widgetLgTh">Status</th>
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
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgNam">Mohsen Rabhi</td>
          <td className="widgetLgAmount">122.00DT</td>
          <td className="widgetLgStatus">
            <Button type="Confirmer" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Maram Marouma </span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgNam">Mohsen Rabhi</td>
          <td className="widgetLgAmount">122.00DT</td>
          <td className="widgetLgStatus">
            <Button type="En_Cours" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nabil naboula </span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgNam">Mohsen Rabhi</td>
          <td className="widgetLgAmount">122.00DT</td>
          <td className="widgetLgStatus">
            <Button type="Confirmer " />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">souad bouzidi </span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgNam">Mohsen Rabhi</td>
          <td className="widgetLgAmount">122.00DT</td>
          <td className="widgetLgStatus">
            <Button type="Confirmer" />
          </td>
        </tr>
      </table>
    </div>
  );
}
