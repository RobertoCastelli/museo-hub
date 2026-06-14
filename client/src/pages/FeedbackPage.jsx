import { useState } from "react";
import { createFeedback } from "../services/feedbackService";
import "../styles/pages.css";
import { FaStar } from "react-icons/fa";

function FeedbackPage() {
  const [feedbackResult, setFeedbackResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [hoverRating, setHoverRating] = useState(0);
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

    if (!formData.rating) {
      setErrorMessage("Please select a rating before submitting feedback.");
      return;
    }

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
    <main className="feedback-container">
      <section className="feedback-header">
        <h1 className="feedback-title">feedback</h1>
        <p className="feedback-subtitle">
          use your booking code to leave feedback after attending a MuseoHub
          event.
        </p>
      </section>

      <section className="feedback-content">
        {feedbackResult && (
          <div className="feedback-message success">
            <h2>feedback submitted successfully</h2>
            <p>thank you for sharing your experience.</p>
          </div>
        )}

        {errorMessage && (
          <div className="feedback-message error">
            <p>{errorMessage}</p>
          </div>
        )}

        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="feedback-form-group">
            <label htmlFor="bookingCode">booking code</label>

            <input
              id="bookingCode"
              name="bookingCode"
              type="text"
              value={formData.bookingCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="feedback-form-group">
            <label htmlFor="rating">rating</label>

            <div className="feedback-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={
                    star <= (hoverRating || Number(formData.rating))
                      ? "feedback-star active"
                      : "feedback-star"
                  }
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() =>
                    setFormData((prevData) => ({
                      ...prevData,
                      rating: String(star),
                    }))
                  }
                />
              ))}
            </div>
          </div>

          <div className="feedback-form-group">
            <label htmlFor="comment">comment</label>

            <textarea
              id="comment"
              name="comment"
              rows="5"
              value={formData.comment}
              onChange={handleChange}
            />
          </div>

          <button className="feedback-form-submit" type="submit">
            submit feedback
          </button>
        </form>
      </section>
    </main>
  );
}

export default FeedbackPage;
