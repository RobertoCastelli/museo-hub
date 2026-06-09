import { Link } from "react-router-dom";
import { GoCalendar, GoPeople } from "react-icons/go";
import { formatDate } from "../Utils/formatDate";
import "../styles/components.css";

function EventCard({ event }) {
  return (
    <Link className="event-card-container" to={`/events/${event.id}`}>
      <img
        className="event-card-image"
        src="https://placehold.co/50x50?text=museum+event"
        alt="event image"
      />

      <div className="event-card-content">
        <p className="event-card-date">
          <GoCalendar />
          {formatDate(event.date)}
        </p>

        <h3 className="event-card-title">{event.title}</h3>

        <p className="event-card-description">{event.description}</p>

        <div className="event-card-footer">
          <div className="event-card-slots">
            <GoPeople />
            <span>{event.available_slots} available slots</span>
          </div>

          <p className="event-card-explore">explore →</p>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
