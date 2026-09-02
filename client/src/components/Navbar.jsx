import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ADMIN_AUTH_STORAGE_KEY,
  ADMIN_DEMO_ID,
  ADMIN_DEMO_PASSWORD,
} from "../utils/adminDemoConfig";

function Navbar() {
  const navigate = useNavigate();

  const [showAdminAuthModal, setShowAdminAuthModal] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminAuthError, setAdminAuthError] = useState("");

  const handleAdminClick = () => {
    setShowAdminAuthModal(true);
  };

  const handleAdminAuthSubmit = (event) => {
    event.preventDefault();

    if (adminId === ADMIN_DEMO_ID && adminPassword === ADMIN_DEMO_PASSWORD) {
      sessionStorage.setItem(ADMIN_AUTH_STORAGE_KEY, "true");
      setShowAdminAuthModal(false);
      setAdminAuthError("");
      setAdminId("");
      setAdminPassword("");
      navigate("/admin");
      return;
    }

    setAdminAuthError("invalid admin credentials.");
  };

  const handleAdminAuthCancel = () => {
    setShowAdminAuthModal(false);
    setAdminAuthError("");
    setAdminId("");
    setAdminPassword("");
  };

  return (
    <>
      <nav className="navbar-container">
        <NavLink className="navbar-item" to="/">
          events
        </NavLink>

        <span className="navbar-separator">|</span>

        <NavLink className="navbar-item" to="/feedback">
          feedback
        </NavLink>

        <span className="navbar-separator">|</span>

        <button
          type="button"
          className="navbar-item navbar-button"
          onClick={handleAdminClick}
        >
          admin
        </button>
      </nav>

      {showAdminAuthModal && (
        <div className="admin-auth-container">
          <section className="admin-auth-content">
            <h2 className="admin-auth-title">admin access</h2>

            <p className="admin-auth-text">
              enter the demo credentials to access the admin panel.
            </p>

            <form className="admin-auth-form" onSubmit={handleAdminAuthSubmit}>
              <div className="admin-auth-field">
                <label htmlFor="admin-id">ID</label>
                <input
                  id="admin-id"
                  type="text"
                  value={adminId}
                  onChange={(event) => setAdminId(event.target.value)}
                  placeholder="admin"
                />
              </div>

              <div className="admin-auth-field">
                <label htmlFor="admin-password">Password</label>
                <input
                  id="admin-password"
                  type="password"
                  value={adminPassword}
                  onChange={(event) => setAdminPassword(event.target.value)}
                  placeholder="pegaso"
                />
              </div>

              {adminAuthError && (
                <p className="admin-auth-message error">{adminAuthError}</p>
              )}

              <div className="admin-auth-actions">
                <button
                  type="button"
                  className="admin-auth-cancel"
                  onClick={handleAdminAuthCancel}
                >
                  cancel
                </button>

                <button type="submit" className="admin-auth-submit">
                  login
                </button>
              </div>
            </form>

            <p className="admin-auth-demo">
              academic review access <br /> ID: admin — password: pegaso.
            </p>
          </section>
        </div>
      )}
    </>
  );
}

export default Navbar;
