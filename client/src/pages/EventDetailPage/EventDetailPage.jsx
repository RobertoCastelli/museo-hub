import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getEventById } from "../../services/eventsService";

function EventDetailPage() {
  const { id } = useParams(); // Get the event ID from the URL parameters
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEventById(id)
      .then((event) => {
        setEvent(event);
      })
      .catch((error) => {
        console.error(
          "Error fetching event in EventDetailPage component:",
          error,
        );
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {error && <p>Error: {error.message}</p>}
      {loading && <p>Loading event...</p>}
      <section>
        <Link to="/">Back to Events</Link>
        <h2>Event Details</h2>
        <h3>{event?.title}</h3>
        <div>{event?.description}</div>
        <div>Date: {event?.date}</div>
        <div>max capacity: {event?.max_capacity}</div>
        <div>available slots: {event?.available_slots}</div>
      </section>
    </>
  );
}

export default EventDetailPage;
