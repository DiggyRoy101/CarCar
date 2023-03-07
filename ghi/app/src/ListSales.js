import React, { useState, useEffect } from "react";

const ListSales = () => {
  const [salesList, setSalesList] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8090/api/sales/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSalesList(data.sales);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Sales Person</th>
          <th>Employee Number</th>
          <th>Purchaser</th>
          <th>VIN</th>
          <th>Sale Price</th>
        </tr>
      </thead>
      <tbody>
        {salesList.map((sale) => {
          return (
            <tr key={sale.id}>
              <td>{sale.sales_person.name}</td>
              <td>{sale.sales_person.employee_number}</td>
              <td>{sale.customer.name}</td>
              <td>{sale.automobile.vin}</td>
              <td>{sale.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListSales;
