import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getEventById } from "../services/eventsService";
import BookingForm from "../components/BookingForm";
import { GoCalendar, GoPeople } from "react-icons/go";

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

  // Refresh available_slots
  const handleBookingSuccess = (participants) => {
    setEvent((prevEvent) => {
      if (!prevEvent) return prevEvent;

      return {
        ...prevEvent,
        available_slots: prevEvent.available_slots - participants,
      };
    });
  };

  return (
    <>
      {error && <p>error: {error.message}</p>}
      {loading && <p>loading event...</p>}
      <section className="detail-page">
        <div className="detail-page-content">
          <Link className="detail-page-back-link" to="/">
            ← back to events
          </Link>
          <img
            className="detail-page-image"
            src="https://placehold.co/500x200?text=detail+event"
            alt="detail event"
          />

          <h1>{event?.title}</h1>
          <p className="detail-page-description">{event?.description}</p>
          <p className="detail-page-date">
            <GoCalendar />
            date · {event?.date}
          </p>
          <p className="detail-page-slots">
            <GoPeople />
            available slots · {event?.available_slots}/{event?.max_capacity}
          </p>
        </div>

        <aside className="detail-page-booking">
          <BookingForm
            eventId={id}
            eventTitle={event?.title}
            onBookingSuccess={handleBookingSuccess}
          />
        </aside>
      </section>
    </>
  );
}

export default EventDetailPage;
