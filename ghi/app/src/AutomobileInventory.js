import React, { useState, useEffect } from "react";

const AutomobileInventory = () => {
  const [automobileInventory, setAutomobileInventory] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8100/api/automobiles/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setAutomobileInventory(data.autos);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>VIN</th>
          <th>Color</th>
          <th>Year</th>
          <th>Model</th>
          <th>Manufacturer</th>
        </tr>
      </thead>
      <tbody>
        {automobileInventory.map((automobile) => {
          return (
            <tr key={automobile.id}>
              <td>{automobile.vin}</td>
              <td>{automobile.color}</td>
              <td>{automobile.year}</td>
              <td>{automobile.model.name}</td>
              <td>{automobile.model.manufacturer.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AutomobileInventory;
