function AdminBookingsTable({ bookings }) {
  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Booking Code</th>
          <th>Event</th>
          <th>Visitor</th>
          <th>Email</th>
          <th>Participants</th>
          <th>Created At</th>
        </tr>
      </thead>

      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td>{booking.booking_code}</td>
            <td>{booking.event_title}</td>
            <td>{booking.visitor_name}</td>
            <td>{booking.visitor_email}</td>
            <td>{booking.participants}</td>
            <td>{booking.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminBookingsTable;
