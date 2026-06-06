import { useState } from "react";
import { createFeedback } from "../services/feedbackService";
import "../styles/pages.css";

function FeedbackPage() {
  const [feedbackResult, setFeedbackResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    bookingCode: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFeedbackResult(null);
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedbackData = {
      booking_code: formData.bookingCode.trim(),
      rating: Number(formData.rating),
    };

    if (formData.comment.trim() !== "") {
      feedbackData.comment = formData.comment.trim();
    }

    try {
      const result = await createFeedback(feedbackData);
      setFeedbackResult(result);
      setErrorMessage("");
      setFormData({
        bookingCode: "",
        rating: "",
        comment: "",
      });
    } catch (error) {
      setFeedbackResult(null);
      setErrorMessage(
        "Feedback could not be submitted. Please check the booking code and rating",
      );
    }
  };

  return (
    <section>
      <h2>Feedback</h2>
      <p>share your experince</p>

      {feedbackResult && (
        <div>
          <p>Feedback created successfully!</p>
        </div>
      )}

      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bookingCode">Booking code:</label>
          <input
            id="bookingCode"
            name="bookingCode"
            type="text"
            value={formData.bookingCode}
            onChange={handleChange}
            required
          />

          <label htmlFor="rating">Rating:</label>
          <input
            id="rating"
            name="rating"
            type="number"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="5"
          />
        </div>

        <button type="submit">Submit feedback</button>
      </form>
    </section>
  );
}

export default FeedbackPage;
