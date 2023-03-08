import React, { useState } from 'react';

function TechnicianForm() {

    const [formData, setFormData] = useState({
        name: "",
        employee_no:"",
    })

    const handleNameChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData)

        const Url = 'http://localhost:8080/api/technician/';
            const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
            };
            const response = await fetch(Url, fetchConfig);
            if (response.ok) {
                setFormData({
                    name: "",
                    employee_no:"",
                })
            }
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Technician Form</h1>
                    <form onSubmit={handleSubmit} id="create-shoes-form">
                       <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={formData.technician} placeholder="Name" required type ="text" name="name" id="name" className="form-control"></input>
                            <label htmlFor="Name">Technician Name</label>
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