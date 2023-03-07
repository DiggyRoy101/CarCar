import React, { useEffect, useState } from 'react';

function TechnicianForm() {
    const [automobiles, setAutomobiles] = useState([])

    const [formData, setFormData] = useState({
        technician: "",
        employee_no:"",
    })

    const handleNameChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const fetchData = async () => {
        const url = 'http://localhost:8100/api/inventory/';
        const response = await fetch(url)

        if(response.ok) {
            const data = await response.json()
            setAutomobiles(data.automobiles)
            }
        }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData)

        const serviceUrl = 'http://localhost:8080/api/service/';
            const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
            };
            const response = await fetch(serviceUrl, fetchConfig);
            if (response.ok) {
                setFormData({
                    technician: "",
                    employee_no:"",
                })
            }
    };
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Technician Form</h1>
                    <form onSubmit={handleSubmit} id="create-shoes-form">
                       <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={formData.technician} placeholder="Technician" required type ="text" name="technician" id="technician" className="form-control"></input>
                            <label htmlFor="Technician">Technician Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={formData.employee_no} placeholder="Employee_No" required type ="text" name="employee_no" id="employee_no" className="form-control"></input>
                            <label htmlFor="Employee_No">Employee Number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default TechnicianForm;