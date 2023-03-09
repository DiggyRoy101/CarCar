import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <NavLink className="nav-link" to="/manufacturers/">
                    List of Manufacturers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/models/">
                    Vehicle Models
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/models/new">
                    Add a Vehicle Model
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/automobiles/">
                    Automobile Inventory
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/automobiles/new">
                    Create Automobile
                  </NavLink>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <NavLink className="nav-link" to="/technicianform">
                    Technician Form
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/ServiceAppointmentForm">
                    Create Service Appointment
                  </NavLink>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <NavLink className="nav-link" to="/sales_person">
                    Add Sales Person
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/customers">
                    Add Potential Customer
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/sales/">
                    List of All Sales
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/sales/new">
                    Record a Sale
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/sales/employee">
                    Employee Sales
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
