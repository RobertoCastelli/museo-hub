import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-container">
      <NavLink className="navbar-item" to="/">
        events
      </NavLink>

      <span className="navbar-separator">|</span>

      <NavLink className="navbar-item" to="/feedback">
        feedback
      </NavLink>

      <span className="navbar-separator">|</span>

      <NavLink className="navbar-item" to="/admin">
        admin
      </NavLink>
    </nav>
  );
}

export default Navbar;
