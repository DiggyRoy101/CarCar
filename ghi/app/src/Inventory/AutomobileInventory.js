import React, { useState, useEffect } from "react";

const AutomobileInventory = () => {
  const [automobileInventory, setAutomobileInventory] = useState([]);
  const [autoVO, setAutoVO] = useState([]);

  const fetchInventory = async () => {
    const url = "http://localhost:8100/api/automobiles/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setAutomobileInventory(data.autos);
    }
  };

  const fetchAutoVO = async () => {
    const url = "http://localhost:8090/api/autos/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const availableCars = data.autos.filter((car) => car.sold === false);
      setAutoVO(availableCars);
    }
  };

  useEffect(() => {
    fetchInventory();
    fetchAutoVO();
  }, []);

  return (
    <div>
      <h1>Inventory</h1>
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
          {autoVO.map((automobile) => {
            const auto = automobileInventory.find(
              (auto) => auto.id === automobile.id
            );
            return (
              <tr key={automobile.id}>
                <td>{auto?.vin}</td>
                <td>{auto?.color}</td>
                <td>{auto?.year}</td>
                <td>{auto?.model?.name}</td>
                <td>{auto?.model?.manufacturer?.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AutomobileInventory;
