import React, { useState, useEffect } from "react";

const SalesPersonHistory = () => {
  const [selectedSalesPersonID, setSelectedSalesPersonID] = useState("");
  const [salesList, setSalesList] = useState([]);
  const salesPersonIDs = salesList.map(
    (sale) => sale?.sales_person?.employee_number
  );
  const uniqueIDs = [...new Set(salesPersonIDs)];

  const filteredSalesList = salesList.filter(
    (sale) =>
      Number(sale.sales_person.employee_number) ===
      Number(selectedSalesPersonID)
  );

  const fetchSales = async () => {
    const url = "http://localhost:8090/api/sales/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSalesList(data.sales);
    }
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <div className="mb-3">
      <select
        onChange={(e) => setSelectedSalesPersonID(e.target.value)}
        required
        value={selectedSalesPersonID}
        className="form-select"
      >
        <option value="">Choose a Model</option>
        {uniqueIDs.map((id) => {
          const sale = salesList.find(
            (sale) => sale.sales_person.employee_number === id
          );
          return (
            <option key={id} value={id}>
              {sale.sales_person.name}
            </option>
          );
        })}
      </select>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sales Person</th>
            <th>Purchaser</th>
            <th>VIN</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredSalesList.map((sale) => {
            return (
              <tr key={sale.id}>
                <td>{sale.sales_person.name}</td>
                <td>{sale.customer.name}</td>
                <td>{sale.automobile.vin}</td>
                <td>{sale.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SalesPersonHistory;
