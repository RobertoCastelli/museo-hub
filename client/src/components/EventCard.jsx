function EventCard({ event }) {
  return (
    <li>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Available Slots: {event.available_slots}</p>
      <p>Max Capacity: {event.max_capacity}</p>
    </li>
  );
}

export default EventCard;
