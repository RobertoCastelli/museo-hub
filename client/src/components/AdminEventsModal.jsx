import { EVENT_IMAGE_OPTIONS } from "../utils/eventImageOptions";

function AdminEventsModal({ formData, onSubmit, onChange, closeModal }) {
  return (
    <div>
      <div className="admin-modal-container">
        <div className="admin-modal-content">
          <h2 className="admin-modal-title">
            {formData.id ? "edit event" : "add event"}
          </h2>
          <p className="admin-modal-subtitle">
            {formData.id
              ? "update the event information stored in MuseoHub."
              : "complete the form to create a new event in MuseoHub."}
          </p>

          <form className="admin-form" onSubmit={onSubmit}>
            <div className="admin-form-group">
              <label htmlFor="title">title</label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={onChange}
                required
              />
            </div>

            <div className="admin-form-group">
              <label htmlFor="description">description</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={onChange}
              />
            </div>

            <div className="admin-form-group">
              <label htmlFor="date">date</label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={onChange}
                required
              />
            </div>

            <div className="admin-form-group">
              <label htmlFor="max_capacity">capacity</label>
              <input
                id="max_capacity"
                name="max_capacity"
                type="number"
                min="1"
                value={formData.max_capacity}
                onChange={onChange}
                required
              />
            </div>

            <div className="admin-form-group">
              <label htmlFor="available_slots">available slots</label>
              <input
                id="available_slots"
                name="available_slots"
                type="number"
                min="0"
                max={formData.max_capacity || undefined}
                value={formData.available_slots}
                onChange={onChange}
                required
              />
            </div>

            <div className="admin-form-group">
              <label htmlFor="image_key">event image</label>
              <select
                id="image_key"
                name="image_key"
                value={formData.image_key}
                onChange={onChange}
              >
                {EVENT_IMAGE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="admin-form-group">
              <label htmlFor="status">status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={onChange}
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </div>

            <div className="admin-modal-actions">
              <button
                type="button"
                className="admin-cancel-button"
                onClick={closeModal}
              >
                cancel
              </button>

              <button className="admin-save-button" type="submit">
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminEventsModal;
