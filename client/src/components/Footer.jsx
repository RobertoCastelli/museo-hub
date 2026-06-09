import { useEffect, useState } from "react";
import { getHealthStatus } from "../services/healthService";
import "../styles/components.css";

function Footer() {
  const [health, setHealth] = useState({
    api: "disconnected",
    database: "disconnected",
  });

  useEffect(() => {
    async function checkHealth() {
      try {
        const result = await getHealthStatus();
        setHealth(result);
      } catch (error) {
        setHealth({
          api: "disconnected",
          database: "disconnected",
        });
      }
    }

    checkHealth();
  }, []);

  return (
    <footer className="footer-container">
      <p className="footer-project">L-31 project work n.22</p>

      <p className="footer-copyright">
        MuseoHub &copy; {new Date().getFullYear()} robertocastelli.dev
      </p>

      <div className="footer-status">
        <span className="footer-status-item">
          <span
            className={`footer-status-dot ${
              health.api === "connected" ? "connected" : "disconnected"
            }`}
          />
          backend
        </span>

        <span className="footer-status-item">
          <span
            className={`footer-status-dot ${
              health.database === "connected" ? "connected" : "disconnected"
            }`}
          />
          database
        </span>
      </div>
    </footer>
  );
}

export default Footer;
