import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";
import { GoCalendar, GoCommentDiscussion } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getDashboard()
      .then((data) => {
        setStats(data);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });
  }, []);

  if (!stats) {
    return (
      <section className="dashboard-container">
        <div className="dashboard-header">
          <p className="dashboard-message">loading dashboard...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">dashboard</h1>
        <p className="dashboard-subtitle">
          a synthetic view of events, bookings and visitor feedback collected by
          MuseoHub.
        </p>
      </div>

      <section className="dashboard-content">
        <div className="dashboard-grid">
          <article className="dashboard-card">
            <GoCalendar className="dashboard-icon" />
            <span className="dashboard-value">{stats.totalEvents}</span>
            <span className="dashboard-label">total events</span>
          </article>

          <article className="dashboard-card">
            <IoTicketOutline className="dashboard-icon" />
            <span className="dashboard-value">{stats.totalBookings}</span>
            <span className="dashboard-label">total bookings</span>
          </article>

          <article className="dashboard-card">
            <GoCommentDiscussion className="dashboard-icon" />
            <span className="dashboard-value">{stats.totalFeedback}</span>
            <span className="dashboard-label">total feedback</span>
          </article>

          <article className="dashboard-card">
            <FaStar className="dashboard-icon" />
            <span className="dashboard-value">
              {Number(stats.averageRating).toFixed(1)}
            </span>
            <span className="dashboard-label">average rating</span>
          </article>
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
