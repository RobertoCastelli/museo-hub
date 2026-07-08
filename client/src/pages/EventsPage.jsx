import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import { getEvents } from "../services/eventsService";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then((events) => {
        setEvents(events);
      })
      .catch((error) => {
        console.error("Error fetching events in App component:", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="events-container">
      <section className="events-header">
        <h1 className="events-title">events</h1>
        <p className="events-subtitle">
          explore current cultural activities available for booking.
        </p>
      </section>

      <section className="events-content">
        {error && <p className="events-message">{error.message}</p>}
        {loading && <p className="events-message">loading events...</p>}
        {!loading && !error && events.length === 0 && (
          <p className="events-message">no events available.</p>
        )}
        {!loading && !error && events.length > 0 && (
          <div className="events-list">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default EventsPage;
