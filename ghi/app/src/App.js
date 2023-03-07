import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import CreateSalesPerson from "./CreateSalesPerson";
import CustomerForm from "./CustomerForm";
import TechnicianForm from "./TechnicianForm";
import ManufacturerList from "./ManufacturerList";
import ManufacturerForm from "./ManufacturerForm";
import VehicleModelList from "./VehicleModelList";
import VehicleModelForm from "./VehicleModelForm";
import AutomobileInventory from "./AutomobileInventory";
import CreateAutomobileForm from "./CreateAutomobileForm";

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
          <Route path="/sales_person" element={<CreateSalesPerson />} />
          <Route path="/customers" element={<CustomerForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
