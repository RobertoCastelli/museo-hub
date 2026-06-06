import { useEffect, useState } from "react";
import { getHealthStatus } from "../services/healthService";
import { GoDatabase } from "react-icons/go";
import { TbApi } from "react-icons/tb";
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
    <footer>
      <p>
        <span className="footer-pw">L-31 project work n.22</span>
      </p>

      <p>MuseoHub &copy; {new Date().getFullYear()} robertocastelli.dev</p>

      <div className="system-status">
        <span className="status-item">
          <TbApi />
          <span
            className={`status-dot ${
              health.api === "connected" ? "connected" : "disconnected"
            }`}
          />
          Backend
        </span>

        <span className="status-separator">|</span>

        <span className="status-item">
          <GoDatabase />
          <span
            className={`status-dot ${
              health.database === "connected" ? "connected" : "disconnected"
            }`}
          />
          Database
        </span>
      </div>
    </footer>
  );
}

export default Footer;
