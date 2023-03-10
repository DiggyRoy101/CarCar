import React, { useState, useEffect } from "react";

const ManufacturerList = () => {
  const [manufacturerList, setManufacturerList] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8100/api/manufacturers/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setManufacturerList(data.manufacturers);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-4 my-4">
      <h1>Manufacturers</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {manufacturerList.map((manufacturer) => {
            return (
              <tr key={manufacturer.id}>
                <td>{manufacturer.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManufacturerList;
