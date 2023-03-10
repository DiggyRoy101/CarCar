import React, { useEffect, useState } from "react";

function ServiceAppointmentForm() {
  const [technicians, setTechnicians] = useState([]);
  const [formData, setFormData] = useState({
    vin: "",
    customer_name: "",
    date: "",
    time: "",
    technician: "",
    reason: "",
  });

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchtechnicians = async () => {
    const url = "http://localhost:8080/api/technician/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const appointmentUrl = "http://localhost:8080/api/appointments/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(formData);
    const response = await fetch(appointmentUrl, fetchConfig);
    if (response.ok) {
      const newAppointment = await response.json();
      console.log(newAppointment);
      setFormData({
        vin: "",
        customer_name: "",
        date: "",
        time: "",
        technician: "",
        reason: "",
      });
    }
  };

  
  useEffect(() => {
    fetchtechnicians();
  }, []);

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Service Appointment Form</h1>
          <form onSubmit={handleSubmit} id="create-shoes-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleNameChange}
                value={formData.vin}
                placeholder="vin"
                required
                type="text"
                name="vin"
                id="vin"
                className="form-control"
              ></input>
              <label htmlFor="vehicle">VIN</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleNameChange}
                value={formData.customer_name}
                placeholder="Customer_Name"
                required
                type="text"
                name="customer_name"
                id="customer_name"
                className="form-control"
              ></input>
              <label htmlFor="Customer_Name">Vehicle Owner</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleNameChange}
                value={formData.date}
                placeholder="Date"
                required
                type="text"
                name="date"
                id="date"
                className="form-control"
              ></input>
              <label htmlFor="Date">Date</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleNameChange}
                value={formData.time}
                placeholder="Time"
                required
                type="text"
                name="time"
                id="time"
                className="form-control"
              ></input>
              <label htmlFor="Time">Time</label>
            </div>
            <div className="mb-3">
              <select
                onChange={handleNameChange}
                required
                value={formData.technician}
                name="technician"
                id="technician"
                className="form-select"
              >
                <option value="">Choose a Technician</option>
                {technicians.map((technician) => {
                  return (
                    <option key={technician.id} value={technician.id}>
                      {technician.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleNameChange}
                value={formData.reason}
                placeholder="Reason"
                required
                type="text"
                name="reason"
                id="reason"
                className="form-control"
              ></input>
              <label htmlFor="Reason">Reason</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ServiceAppointmentForm;
