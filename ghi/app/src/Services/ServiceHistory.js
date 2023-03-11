import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ServiceHistory() {
  const [searchVIN, setSearchVIN] = useState("");
  const [appointmentList, setappointmentList] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/api/appointments/");
    if (response.ok) {
      const data = await response.json();
      setappointmentList(data.appointments);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchVIN(e.target.value);
  };

  const filteredList = appointmentList.filter((appointment) => {
    return appointment.vin.match(searchVIN);
  });

  return (
    <div className="shadow p-4 mt-4">
      <div className="mb-3">
        <h1>Service Appointment History</h1>
        <input
          type="search"
          placeholder="Enter VIN"
          onChange={handleChange}
          value={searchVIN}
        />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((appointment) => {
              return (
                <tr key={appointment.id}>
                  <td>{appointment.vin}</td>
                  <td>{appointment.customer_name}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.technician.name}</td>
                  <td>{appointment.reason}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServiceHistory;
