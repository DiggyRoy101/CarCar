import React, { useState, useEffect } from "react";

const VehicleModelForm = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    picture_url: "",
    manufacturer_id: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchData = async () => {
    const url = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const vehicleModelUrl = "http://localhost:8100/api/models/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(vehicleModelUrl, fetchConfig);
    if (response.ok) {
      const newVehicleModel = await response.json();

      setFormData({
        name: "",
        picture_url: "",
        manufacturer_id: "",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Vehicle Model</h1>
          <form onSubmit={handleSubmit} id="create-vehicle-model-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                placeholder="Name"
                required
                type="text"
                value={formData.name}
                name="name"
                id="name"
                className="form-control"
              />
              <label htmlFor="model_name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                placeholder="Picture Url"
                required
                type="text"
                value={formData.picture_url}
                name="picture_url"
                id="picture_url"
                className="form-control"
              />
              <label htmlFor="model_name">Picture URL</label>
            </div>
            <div className="mb-3">
              <select
                onChange={handleChange}
                required
                value={formData.manufacturer_id}
                name="manufacturer_id"
                id="manufacturer_id"
                className="form-select"
              >
                <option value="">Choose a Manufacturer</option>
                {manufacturers.map((manufacturer) => {
                  return (
                    <option key={manufacturer.id} value={manufacturer.id}>
                      {manufacturer.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VehicleModelForm;
