import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import {
  getAdminEvents,
  createAdminEvent,
  updateAdminEvent,
  deleteAdminEvent,
} from "../services/adminService";
import { formatDate } from "../Utils/formatDate";

function AdminPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    date: "",
    max_capacity: "",
    available_slots: "",
    status: "active",
  });

  useEffect(() => {
    getAdminEvents()
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitEvent = async (e) => {
    e.preventDefault();

    const eventData = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      date: formData.date,
      max_capacity: Number(formData.max_capacity),
      available_slots: Number(formData.available_slots),
      status: formData.status,
    };

    try {
      formData.id === null
        ? await createAdminEvent(eventData)
        : await updateAdminEvent(formData.id, eventData);

      const updateEvents = await getAdminEvents();
      setEvents(updateEvents);

      setFormData({
        id: null,
        title: "",
        description: "",
        date: "",
        max_capacity: "",
        available_slots: "",
        status: "active",
      });

      setShowAddModal(false);
    } catch (error) {
      console.error("Error creating event", error);
    }
  };

  const handleEditEvent = async (event) => {
    setFormData({
      id: event.id,
      title: event.title,
      description: event.description || "",
      date: event.date,
      max_capacity: event.max_capacity,
      available_slots: event.available_slots,
      status: event.status,
    });
    setShowAddModal(true);
  };

  const handleDeleteEvent = async (id) => {
    const confirmDelete = window.confirm(
      "are you sure you want to delete this event?",
    );

    if (!confirmDelete) return;

    try {
      await deleteAdminEvent(id);
      setError(null);
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <main className="admin-container">
      <section className="admin-dashboard">
        <Dashboard />
      </section>

      <section className="admin-header">
        <h1 className="admin-title">admin</h1>
        <p className="admin-subtitle">
          manage events and monitor MuseoHub activity.
        </p>
      </section>

      <section className="admin-content">
        <div className="admin-actions">
          <button
            className="admin-add-button"
            type="button"
            onClick={() => setShowAddModal(true)}
          >
            add event
          </button>
        </div>

        {error && <p className="admin-message">Error: {error.message}</p>}
        {loading && <p className="admin-message">Loading events...</p>}

        {!loading && !error && events.length === 0 && (
          <p className="admin-message">No events available.</p>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Capacity</th>
                  <th>Available</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td>{event.id}</td>
                    <td>{event.title}</td>
                    <td>{formatDate(event.date)}</td>
                    <td>{event.max_capacity}</td>
                    <td>{event.available_slots}</td>
                    <td>{event.status}</td>
                    <td>
                      <div className="admin-table-actions">
                        <button
                          className="admin-edit-button"
                          type="button"
                          onClick={() => handleEditEvent(event)}
                        >
                          edit
                        </button>

                        <button
                          className="admin-delete-button"
                          type="button"
                          onClick={() => handleDeleteEvent(event.id)}
                        >
                          delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {showAddModal && (
        <div className="admin-modal-container">
          <div className="admin-modal-content">
            <h2 className="admin-modal-title">
              {formData.id ? "edit event" : "add event"}
            </h2>

            <form className="admin-form" onSubmit={handleSubmitEvent}>
              <div className="admin-form-group">
                <label htmlFor="title">title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="date">date</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  value={formData.available_slots}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="status">status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              </div>

              <div className="admin-modal-actions">
                <button
                  type="button"
                  className="admin-cancel-button"
                  onClick={() => setShowAddModal(false)}
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
      )}
    </main>
  );
}

export default AdminPage;
