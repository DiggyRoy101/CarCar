import React, { useState, useEffect } from "react";

const SalesForm = () => {
  const [inventory, setInventory] = useState([]);
  const [automobiles, setAutomobiles] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    automobile: "",
    sales_person_id: "",
    customer_id: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchInventory = async () => {
    const url = "http://localhost:8100/api/automobiles/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setInventory(data.autos);
    }
  };

  const fetchAutoVO = async () => {
    const url = "http://localhost:8090/api/autos/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const availableCars = data.autos.filter((car) => car.sold === false);
      setAutomobiles(availableCars);
    }
  };

  const fetchSellers = async () => {
    const url = "http://localhost:8090/api/sales_people/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSellers(data.sales_people);
    }
  };

  const fetchCustomers = async () => {
    const url = "http://localhost:8090/api/customers/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setCustomers(data.customers);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const salesUrl = "http://localhost:8090/api/sales/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(salesUrl, fetchConfig);
    if (response.ok) {
      const newSale = await response.json();

      setFormData({
        automobile: "",
        sales_person_id: "",
        customer_id: "",
        price: "",
      });
    }
  };

  useEffect(() => {
    fetchAutoVO();
    fetchSellers();
    fetchCustomers();
    fetchInventory();
  }, []);

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Sale</h1>
          <form onSubmit={handleSubmit} id="create-sale-form">
            <div className="mb-3">
              <select
                onChange={handleChange}
                required
                value={formData.automobile}
                name="automobile"
                id="automobile"
                className="form-select"
              >
                <option value="">Choose an Automobile</option>
                {automobiles.map((automobile) => {
                  const auto = inventory.find(
                    (auto) => auto.id === automobile.id
                  );
                  return (
                    <option key={automobile.href} value={automobile.href}>
                      {auto?.model?.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <select
                onChange={handleChange}
                required
                value={formData.sales_person_id}
                name="sales_person_id"
                id="sales_person_id"
                className="form-select"
              >
                <option value="">Choose a Seller</option>
                {sellers.map((seller) => {
                  return (
                    <option key={seller.id} value={seller.id}>
                      {seller.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <select
                onChange={handleChange}
                required
                value={formData.customer_id}
                name="customer_id"
                id="customer_id"
                className="form-select"
              >
                <option value="">Choose a Customer</option>
                {customers.map((customer) => {
                  return (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                placeholder="Price"
                required
                type="number"
                value={formData.price}
                name="price"
                id="price"
                className="form-control"
              />
              <label htmlFor="price">Price</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SalesForm;
