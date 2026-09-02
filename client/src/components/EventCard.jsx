import { Link } from "react-router-dom";
import { getEventInitials } from "../utils/getEventInitials";
import { getEventImageByKey } from "../utils/eventImageOptions";
import { formatDate } from "../utils/formatDate";
import { GoCalendar, GoPeople } from "react-icons/go";

function EventCard({ event }) {
  const eventImage = getEventImageByKey(event.image_key);

  return (
    <Link className="event-card-container" to={`/events/${event.id}`}>
      <div className="event-card-thumbnail">
        <img
          className="event-card-image"
          src={eventImage}
          alt=""
          aria-hidden="true"
        />
        <span className="event-card-initials">
          {getEventInitials(event.title)}
        </span>
      </div>

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
