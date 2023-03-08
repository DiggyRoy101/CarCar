import React, { useState, useEffect } from "react";

const CreateAutomobileForm = () => {
  const [models, setModels] = useState([]);
  const [formData, setFormData] = useState({
    color: "",
    year: "",
    vin: "",
    model_id: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchData = async () => {
    const url = "http://localhost:8100/api/models/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setModels(data.models);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inventoryUrl = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(inventoryUrl, fetchConfig);
    if (response.ok) {
      const newAutomobile = await response.json();

      setFormData({
        color: "",
        year: "",
        vin: "",
        model_id: "",
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
          <h1>Add an Automobile</h1>
          <form onSubmit={handleSubmit} id="create-automobile-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                placeholder="Color"
                required
                type="text"
                value={formData.color}
                name="color"
                id="color"
                className="form-control"
              />
              <label htmlFor="model_name">Color</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                placeholder="Year"
                required
                type="text"
                value={formData.year}
                name="year"
                id="year"
                className="form-control"
              />
              <label htmlFor="model_name">Year</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                placeholder="VIN"
                required
                type="text"
                value={formData.vin}
                name="vin"
                id="vin"
                className="form-control"
              />
              <label htmlFor="model_name">VIN</label>
            </div>
            <div className="mb-3">
              <select
                onChange={handleChange}
                required
                value={formData.model_id}
                name="model_id"
                id="model_id"
                className="form-select"
              >
                <option value="">Choose a Model</option>
                {models.map((model) => {
                  return (
                    <option key={model.id} value={model.id}>
                      {model.name}
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

export default CreateAutomobileForm;
