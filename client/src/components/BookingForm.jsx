import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { createBooking } from "../services/bookingsService";
import { formatDate } from "../Utils/formatDate";
import "../styles/components.css";

function BookingForm({ eventId, eventDate, eventTitle, onBookingSuccess }) {
  const [bookingResult, setBookingResult] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

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

    setBookingResult(null);
    setBookingDetails(null);
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const participants = Number(formData.participants);

    const bookingDetails = {
      name,
      email,
      participants,
    };

    const bookingData = {
      event_id: Number(eventId),
      visitor_name: name,
      visitor_email: email,
      participants,
    };

    try {
      const result = await createBooking(bookingData);

      setBookingResult(result);
      setBookingDetails(bookingDetails);
      setErrorMessage("");

      if (onBookingSuccess) {
        onBookingSuccess(participants);
      }

      setFormData({
        name: "",
        email: "",
        participants: 1,
      });
    } catch (error) {
      setBookingResult(null);
      setBookingDetails(null);
      setErrorMessage(
        "Booking could not be completed. Please check the data and try again.",
      );
    }
  };

  return (
    <section className="booking-form-container">
      <div className="booking-form-header">
        <h2 className="booking-form-title">book your visit</h2>
        <p className="booking-form-subtitle">
          complete the form to reserve your place for this event.
        </p>
      </div>

      {bookingResult && bookingDetails && (
        <div className="booking-modal-container">
          <div className="booking-modal-content">
            <IoCheckmarkCircleOutline className="booking-modal-icon" />

            <h2 className="booking-modal-title">
              booking confirmed successfully
            </h2>

            <div className="booking-modal-text">
              <p>keep this code as reference for the event.</p>
              <p>remember to leave a feedback after your visit.</p>

              <Link className="booking-modal-feedback" to="/feedback">
                leave feedback →
              </Link>
            </div>

            <div className="booking-code-box">
              <span>booking code</span>
              <strong>{bookingResult.booking_code}</strong>
            </div>

            <div className="booking-summary">
              <p>
                <strong>event ·</strong> {eventTitle}
              </p>
              <p>
                <strong>date ·</strong> {formatDate(eventDate)}
              </p>
              <p>
                <strong>email ·</strong> {bookingDetails.email}
              </p>
              <p>
                <strong>participants ·</strong> {bookingDetails.participants}
              </p>
            </div>

            <div className="booking-modal-actions">
              <button
                type="button"
                className="booking-modal-close"
                onClick={() => {
                  setBookingResult(null);
                  setBookingDetails(null);
                }}
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="booking-form-message">
          <p>{errorMessage}</p>
        </div>
      )}

      <form className="booking-form-content" onSubmit={handleSubmit}>
        <div className="booking-form-group">
          <label htmlFor="name">name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="booking-form-group">
          <label htmlFor="email">email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="booking-form-group">
          <label htmlFor="participants">participants</label>
          <select
            id="participants"
            name="participants"
            value={formData.participants}
            onChange={handleChange}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <button className="booking-form-submit" type="submit">
          confirm booking
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
