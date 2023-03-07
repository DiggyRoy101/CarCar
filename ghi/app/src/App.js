import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import CreateSalesPerson from "./CreateSalesPerson";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sales_person" element={<CreateSalesPerson />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
