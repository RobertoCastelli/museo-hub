import { NavLink } from "react-router-dom";
import "../styles/components.css";

function Navbar() {
  return (
    <nav>
      <NavLink className="navbar-item" to="/">
        <div>events</div>
      </NavLink>

      <NavLink className="navbar-item" to="/feedback">
        <div>feedback</div>
      </NavLink>

      <NavLink className="navbar-item" to="/dashboard">
        <div>dashboard</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
