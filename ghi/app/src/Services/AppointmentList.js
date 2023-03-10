import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function AppointmentList () {
    const [appointmentsList, setAppointmentsList] = useState([])
    const [vip, setVIP] = useState([])

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/api/appointments/')
        if (response.ok) {
            const data = await response.json()
            setAppointmentsList(data.appointments)
        }
    }

    useEffect(()=> {
        fetchData()
    }, [])
    const handleClick = async (e) => {
        console.log(e.target)
        const appointmentStatusUrl =`http://localhost:8080/api/appointments/${e.target.id}/`
        // if (appointmentresponse.ok){
        //     const appointmentdetails = await appointmentresponse.json()
        //     console.log(appointmentdetails)
        const fetchStatus = {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                completion: true
            })
        }

        const response = await fetch(appointmentStatusUrl, fetchStatus)
        fetchData()
    }
    const filterAppointmentList = appointmentsList.filter(
        (appointment) => appointment.completion === false
    )
    
    const handleDelete = async (e) => {
        const appointmentUrl = `http://localhost:8080/api/appointments/${e.target.id}/`

        const fetchConfigs = {
            method: "Delete",
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(appointmentUrl, fetchConfigs)
        fetchData()
    }

    const fetchVin = async () => {
        const response = await fetch('http://localhost:8100/api/inventory/')
        if (response.ok) {
            const data = await response.json()
            setVIP(data.vin)
        }
    }

     return (
    <div className="shadow p-4 mt-4">
        <div className="mb-3">
        <h1>List of All Appointments</h1>
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
            <tbody >
                {filterAppointmentList.map(appointment => {
                return (
                    <tr key={appointment.id}>
                        <td>{ appointment.vin }</td>
                        <td>{ appointment.customer_name }</td>
                        <td>{ appointment.date }</td>
                        <td>{ appointment.time }</td>
                        <td>{ appointment.technician.name }</td>
                        <td>{ appointment.reason}</td>
                        {/* <td><img alt="" style={{ width: 200, height: 200}} src={shoe.picture_url}/></td> */}
                        <td><button onClick={handleDelete} id={appointment.id} className="btn btn-danger">Cancel</button></td>
                        <td><button onClick={handleClick} value={appointment.completion} id={appointment.id} className="btn btn-primary">Finished</button></td>
                    </tr>
                );
                })}
            </tbody>
        </table>
      </div>
    </div>
)};

export default AppointmentList;