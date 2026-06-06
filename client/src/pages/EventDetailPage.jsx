import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getEventById } from "../services/eventsService";
import BookingForm from "../components/BookingForm";
import { GoPeople } from "react-icons/go";

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
        <h2>Event Details</h2>
        <img
          src="https://placehold.co/500x200?text=detail+event"
          alt="detail image"
        />
        <h3>{event?.title}</h3>
        <p>{event?.description}</p>
        <div>Date: {event?.date}</div>
        <div>max capacity: {event?.max_capacity}</div>
        <div>
          <GoPeople />
          available slots: {event?.available_slots}
        </div>
        <div>status: {event?.status}</div>
      </section>

      <section>
        <BookingForm eventId={id} />
      </section>
    </>
  );
}

export default EventDetailPage;
