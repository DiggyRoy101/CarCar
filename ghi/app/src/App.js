import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import CreateSalesPerson from "./CreateSalesPerson";
import CustomerForm from "./CustomerForm";
import TechnicianForm from './TechnicianForm'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technicianform" element={<TechnicianForm />} />
          <Route path="/sales_person" element={<CreateSalesPerson />} />
          <Route path="/customers" element={<CustomerForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
