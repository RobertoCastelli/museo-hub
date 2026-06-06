import { useState } from "react";
import { useParams } from "react-router-dom";
import { createBooking } from "../services/bookingsService";
import "../styles/components.css";

function BookingPage() {
  const { eventId } = useParams();
  const [bookingResult, setBookingResult] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participants: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Booking data:", formData); // <-- Debug log
    const bookingData = {
      event_id: Number(eventId),
      visitor_name: formData.name,
      visitor_email: formData.email,
      participants: Number(formData.participants),
    };

    try {
      const result = await createBooking(bookingData);
      setBookingResult(result);
      console.log("Booking created successfully:", result); // <-- Debug log
    } catch (error) {
      console.error("Error creating booking:", error); // <-- Debug log
    }
  };

  return (
    <section>
      <h2>Booking</h2>
      {bookingResult && (
        <div>
          <p>Booking created successfully!</p>
          <p>Booking code: {bookingResult.booking_code}</p>
        </div>
      )}
      Book event with ID: {eventId}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="participants">Number of Participants:</label>
          <input
            id="participants"
            name="participants"
            type="number"
            min="1"
            max="4"
            value={formData.participants}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default BookingPage;
