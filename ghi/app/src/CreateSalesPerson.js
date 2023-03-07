import React, { useState, useEffect } from "react";

const CreateSalesPerson = () => {
  const [formData, setFormData] = useState({
    name: "",
    employee_number: ",",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const salesPersonUrl = "http://localhost:8090/api/sales_people/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(salesPersonUrl, fetchConfig);
    if (response.ok) {
      const newSalesPerson = await response.json();
      console.log(newSalesPerson);

      setFormData({
        name: "",
        employee_number: "",
      });
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Sales Person</h1>
          <form onSubmit={handleSubmit} id="create-sales-person-form">
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
                placeholder="Employee number"
                required
                type="number"
                value={formData.emplo}
                name="employee_number"
                id="employee_number"
                className="form-control"
              />
              <label htmlFor="employee_number">Employee Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateSalesPerson;
