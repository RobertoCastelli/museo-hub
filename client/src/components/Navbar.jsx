import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-container">
      <NavLink className="navbar-item" to="/">
        events
      </NavLink>

      <NavLink className="navbar-item" to="/feedback">
        feedback
      </NavLink>

      <NavLink className="navbar-item" to="/admin">
        admin
      </NavLink>
    </nav>
  );
}

export default Navbar;
