import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ServiceHistory () {
    const [carVIN, setcarVIN] = useState([])
    const [serviceList, setServiceList] = useState([]);
    const 

    const getData = async () => {
        const response = await fetch('http://localhost:8080/api/appointments/')
        if (response.ok) {
            const data = await response.json()
            setAppointments(data.appointments)
        }
    }