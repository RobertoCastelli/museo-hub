import { useState, useEffect } from "react";
import { getEvents } from "./services/eventsService";

import EventCard from "./components/EventCard";

function App() {
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
    <>
      <h1>MuseoHub</h1>
      {error && <p>Error: {error.message}</p>}
      {loading && <p>Loading events...</p>}
      {!loading && !error && events.length === 0 && <p>No events available.</p>}
      {!loading && !error && events.length > 0 && (
        <ul>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
