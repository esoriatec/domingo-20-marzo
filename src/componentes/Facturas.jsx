import React from 'react';
import axios from 'axios';
import {useQuery} from 'react-query';
 
const URL_API = "https://my-bdd-server-nlngw9uco-jviejo.vercel.app"

function getFactura() {
  return axios.get(`${URL_API}/sql?sql=select customers.company_name,customers.country, orders.order_date from CUSTOMERS inner join  ORDERS on  customers.CUSTOMER_ID = orders.CUSTOMER_ID and extract(year from order_date)='1997'`);
}

export default function Facturas() {
 //Query
 
 const { isLoading, data } = useQuery('factura', getFactura)
  
if (isLoading) {
  return <div>Espere un momento...por favor</div>
}
 

return (
    <div>
    <h1>Facturas</h1>
    <table className="table">
      <thead>
        <tr>
          <td>compañía</td>
          <td>País</td>
          <td>Fecha</td>
        </tr>
      </thead>
      <tbody>
        {data.data.map(factura =>(
          <tr key={factura.company_name}>
            <td>{factura.company_name}</td>
            <td>{factura.country}</td>
            <td>{factura.order_date}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
  )
}
