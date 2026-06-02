import { Link } from "react-router-dom";
import "./EventCard.css";

function EventCard({ event }) {
  return (
    <li className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>

      <Link to={`/events/${event.id}`}>View details</Link>
    </li>
  );
}

export default EventCard;
