import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import CreateSalesPerson from "./Sales/CreateSalesPerson";
import CustomerForm from "./Sales/CustomerForm";
import TechnicianForm from "./Services/TechnicianForm";
import ServiceAppointmentForm from "./Services/ServiceAppointment";
import ManufacturerList from "./Inventory/ManufacturerList";
import ManufacturerForm from "./Inventory/ManufacturerForm";
import VehicleModelList from "./Inventory/VehicleModelList";
import VehicleModelForm from "./Inventory/VehicleModelForm";
import AutomobileInventory from "./Inventory/AutomobileInventory";
import CreateAutomobileForm from "./Inventory/CreateAutomobileForm";
import SalesList from "./Sales/SalesList";
import SalesForm from "./Sales/SalesForm";
import SalesPersonHistory from "./Sales/SalesPersonHistory";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers/" element={<ManufacturerList />} />
          <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="/models/" element={<VehicleModelList />} />
          <Route path="/models/new" element={<VehicleModelForm />} />
          <Route path="/automobiles/" element={<AutomobileInventory />} />
          <Route path="/automobiles/new" element={<CreateAutomobileForm />} />
          <Route path="technicianform" element={<TechnicianForm />} />
          <Route
            path="serviceappointmentform"
            element={<ServiceAppointmentForm />}
          />
          <Route path="/sales_person" element={<CreateSalesPerson />} />
          <Route path="/customers" element={<CustomerForm />} />
          <Route path="/sales" element={<SalesList />} />
          <Route path="/sales/new" element={<SalesForm />} />
          <Route
            path="/sales/employee"
            element={<SalesPersonHistory />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
