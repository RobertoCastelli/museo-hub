import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";

function DashboardPage() {
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
      <main className="dashboard-container">
        <section className="dashboard-header">
          <p className="dashboard-message">loading dashboard...</p>
        </section>
      </main>
    );
  }

  return (
    <main className="dashboard-container">
      <section className="dashboard-header">
        <h1 className="dashboard-title">dashboard</h1>
        <p className="dashboard-subtitle">
          a synthetic view of events, bookings and visitor feedback collected by
          MuseoHub.
        </p>
      </section>

      <section className="dashboard-content">
        <div className="dashboard-grid">
          <article className="dashboard-card">
            <span className="dashboard-value">{stats.totalEvents}</span>
            <span className="dashboard-label">total events</span>
          </article>

          <article className="dashboard-card">
            <span className="dashboard-value">{stats.totalBookings}</span>
            <span className="dashboard-label">total bookings</span>
          </article>

          <article className="dashboard-card">
            <span className="dashboard-value">{stats.totalFeedback}</span>
            <span className="dashboard-label">total feedback</span>
          </article>

          <article className="dashboard-card">
            <span className="dashboard-value">
              {Number(stats.averageRating).toFixed(1)}
            </span>
            <span className="dashboard-label">average rating</span>
          </article>
        </div>
      </section>
    </main>
  );
}

export default DashboardPage;
