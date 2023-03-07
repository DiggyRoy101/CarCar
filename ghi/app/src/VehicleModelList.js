import React, { useState, useEffect } from "react";

const VehicleModelList = () => {
  const [vehicleModelList, setVehicleModelList] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8100/api/models/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setVehicleModelList(data.models);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>Picture</th>
        </tr>
      </thead>
      <tbody>
        {vehicleModelList.map((model) => {
          return (
            <tr key={model.id}>
              <td>{model.name}</td>
              <td>{model.manufacturer.name}</td>
              <td>
                <img src={model.picture_url} alt="Add Image" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default VehicleModelList;
