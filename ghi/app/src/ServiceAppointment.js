import React, { useEffect, useState } from "react";

function ServiceAppointmentForm() {
  const [appointments, setAppointments] = useState([]);

  const [formData, setFormData] = useState({
    vehicle: "",
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
  const fetchData = async () => {
    const url = "http://localhost:8100/api/inventory/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointments);
    }
    // const fetchData = async () => {
    //     const url = 'http://localhost:8100/api/inventory/';
    //     const response = await fetch(url)

    //     if(response.ok) {
    //         const data = await response.json()
    //         setAppointments(data.appointments)
    //         }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    const serviceUrl = "http://localhost:8080/api/service/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(serviceUrl, fetchConfig);
    if (response.ok) {
      setFormData({
        vin: "",
        vehicle_owner: "",
        date: "",
        time: "",
        technician: "",
        reason: "",
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
          <h1>Service Appointment Form</h1>
          <form onSubmit={handleSubmit} id="create-shoes-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleNameChange}
                value={formData.vin}
                placeholder="Vin"
                required
                type="text"
                name="vin"
                id="vin"
                className="form-control"
              ></input>
              <label htmlFor="Vin">VIN</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleNameChange}
                value={formData.vehicle_owner}
                placeholder="Vehicle_Owner"
                required
                type="text"
                name="vehicle_owner"
                id="vehicle_owner"
                className="form-control"
              ></input>
              <label htmlFor="Vehicle_Owner">Vehicle Owner</label>
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
            <div className="form-floating mb-3">
              <input
                onChange={handleNameChange}
                value={formData.technician}
                placeholder="Technician"
                required
                type="text"
                name="technician"
                id="technician"
                className="form-control"
              ></input>
              <label htmlFor="Technician">Technician</label>
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
