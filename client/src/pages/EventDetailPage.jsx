import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getEventInitials } from "../utils/getEventInitials";
import BookingForm from "../components/BookingForm";
import { getEventById } from "../services/eventsService";
import { formatDate } from "../utils/formatDate";
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
    <main className="detail-container">
      <section className="detail-header">
        <Link className="detail-back-link" to="/">
          ← back to events
        </Link>
      </section>

      <section className="detail-content">
        {error && <p className="detail-message">error: {error.message}</p>}
        {loading && <p className="detail-message">loading event...</p>}

        {!loading && !error && event && (
          <div className="detail-layout">
            <article className="detail-info">
              <div className="detail-thumbnail">
                {getEventInitials(event.title)}
              </div>

              <h1 className="detail-title">{event.title}</h1>
              <p className="detail-description">{event.description}</p>

              <p className="detail-date">
                <GoCalendar />
                date · {formatDate(event.date)}
              </p>

              <p className="detail-slots">
                <GoPeople />
                available slots · {event.available_slots}/{event.max_capacity}
              </p>
            </article>

            <aside className="detail-booking">
              <BookingForm
                eventId={id}
                eventDate={event.date}
                eventTitle={event.title}
                onBookingSuccess={handleBookingSuccess}
              />
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}

export default EventDetailPage;
