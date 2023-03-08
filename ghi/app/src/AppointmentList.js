import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function AppointmentList () {
    const [appointments, setAppointments] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:8080/api/service/')
        if (response.ok) {
            const data = await response.json()
            setAppointments(data.appointments)
        }
    }

    useEffect(()=> {
        getData()
    }, [])
    // const handleClick = async (e) => {
    //     console.log(e.target)
    //     const appointmentresponse = await fetch(`http://localhost:8080/api/services/${e.target.id}/`)
    //     if (appointmentresponse.ok){
    //         const appointmentdetails = await appointmentresponse.json()
    //         console.log(appointmentdetails)
    //         alert(`The ${appointmentdetails.vin} ${appointmentdetails.customer_name} can be found in: \n\nCloset Name: ${.bin.closet_name}\nBin Number: ${shoedetails.bin.bin_number}\nBin Size: ${shoedetails.bin.bin_size}`
    //         )
    //     }
    // }
    const handleDelete = async (e) => {
        console.log(e.target.id)
        const serviceUrl = `http://localhost:8080/api/service/${e.target.id}/`

        const fetchConfigs = {
            method: "Delete",
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(serviceUrl, fetchConfigs)
        getData()
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody >
                {appointments.map(appointment => {
                return (
                    <tr key={appointment.id}>
                        <td>{ appointment.vin }</td>
                        <td>{ appointment.customer_name }</td>
                        <td>{ appointment.date }</td>
                        <td>{ appointment.time }</td>
                        <td>{ appointment.technician }</td>
                        <td>{ appointment.reason}</td>
                        {/* <td><img alt="" style={{ width: 200, height: 200}} src={shoe.picture_url}/></td> */}
                        <td><button onClick={handleDelete} id={appointment.id} className="btn btn-danger">Cancel</button></td>
                        <td><button onClick={handleClick} value={shoe.bin} id={shoe.id} className="btn btn-primary">Locate</button></td>
                    </tr>
                );
                })}
            </tbody>
        </table>
)};

export default AppointmentList;