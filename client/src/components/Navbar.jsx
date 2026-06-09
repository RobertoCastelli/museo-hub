import { NavLink } from "react-router-dom";
import "../styles/components.css";

function Navbar() {
  return (
    <nav className="navbar-container">
      <NavLink className="navbar-item" to="/">
        events
      </NavLink>

      <NavLink className="navbar-item" to="/feedback">
        feedback
      </NavLink>

      <NavLink className="navbar-item" to="/dashboard">
        dashboard
      </NavLink>
    </nav>
  );
}

export default Navbar;
