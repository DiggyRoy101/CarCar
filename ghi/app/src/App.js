import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import CreateSalesPerson from "./CreateSalesPerson";
import CustomerForm from "./CustomerForm";
import TechnicianForm from "./TechnicianForm";
import ServiceAppointmentForm from "./ServiceAppointment";
import ManufacturerList from "./Inventory/ManufacturerList";
import ManufacturerForm from "./Inventory/ManufacturerForm";
import VehicleModelList from "./Inventory/VehicleModelList";
import VehicleModelForm from "./Inventory/VehicleModelForm";
import AutomobileInventory from "./Inventory/AutomobileInventory";
import CreateAutomobileForm from "./Inventory/CreateAutomobileForm";
import SalesList from "./SalesList";
import SalesForm from "./SalesForm";
import SalesPersonHistory from "./SalesPersonHistory";

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
