import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminEventsTable from "../components/AdminEventsTable";
import AdminBookingsTable from "../components/AdminBookingsTable";
import AdminEventsModal from "../components/AdminEventsModal";
import Dashboard from "../components/Dashboard";
import { DEFAULT_EVENT_IMAGE_KEY } from "../utils/eventImageOptions";
import {
  getAdminEvents,
  getAdminBookings,
  createAdminEvent,
  updateAdminEvent,
  deleteAdminEvent,
} from "../services/adminService";
import { ADMIN_AUTH_STORAGE_KEY } from "../utils/adminDemoConfig";

function AdminPage() {
  const navigate = useNavigate();
  const isAdminLogged =
    sessionStorage.getItem(ADMIN_AUTH_STORAGE_KEY) === "true";

  const [events, setEvents] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [dashboardRefreshKey, setDashboardRefreshKey] = useState(0);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    date: "",
    max_capacity: "",
    available_slots: "",
    status: "active",
    image_key: DEFAULT_EVENT_IMAGE_KEY,
  });

  const resetForm = () => {
    setFormData({
      id: null,
      title: "",
      description: "",
      date: "",
      max_capacity: "",
      available_slots: "",
      status: "active",
      image_key: DEFAULT_EVENT_IMAGE_KEY,
    });
  };

  useEffect(() => {
    if (!isAdminLogged) {
      navigate("/", { replace: true });
    }
  }, [isAdminLogged, navigate]);

  useEffect(() => {
    if (!isAdminLogged) return;

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
  }, [isAdminLogged]);

  useEffect(() => {
    if (!isAdminLogged) return;

    getAdminBookings()
      .then((data) => {
        setBookings(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [isAdminLogged]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitEvent = async (e) => {
    e.preventDefault();

    const maxCapacity = Number(formData.max_capacity);
    const availableSlots = Number(formData.available_slots);

    if (availableSlots > maxCapacity) {
      setError(
        new Error("available slots cannot be greater than maximum capacity."),
      );
      return;
    }

    const eventData = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      date: formData.date,
      max_capacity: maxCapacity,
      available_slots: availableSlots,
      status: formData.status,
      image_key: formData.image_key,
    };

    try {
      formData.id === null
        ? await createAdminEvent(eventData)
        : await updateAdminEvent(formData.id, eventData);

      const updateEvents = await getAdminEvents();
      setEvents(updateEvents);
      setDashboardRefreshKey((prevKey) => prevKey + 1);
      setError(null);
      setSuccessMessage(
        formData.id === null
          ? "event created successfully."
          : "event updated successfully.",
      );
      resetForm();
      setShowAddModal(false);
    } catch (error) {
      console.error("error saving event", error);
      setError(error);
    }
  };

  const handleEditEvent = (event) => {
    setFormData({
      id: event.id,
      title: event.title,
      description: event.description || "",
      date: event.date,
      max_capacity: event.max_capacity,
      available_slots: event.available_slots,
      status: event.status,
      image_key: event.image_key || DEFAULT_EVENT_IMAGE_KEY,
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
      setDashboardRefreshKey((prevKey) => prevKey + 1);
      setSuccessMessage("event deleted successfully.");
    } catch (error) {
      console.error("error deleting event:", error);
    }
  };

  if (!isAdminLogged) {
    return null;
  }

  return (
    <main className="admin-container">
      <section className="admin-dashboard">
        <Dashboard refreshKey={dashboardRefreshKey} />
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
            onClick={() => {
              resetForm();
              setShowAddModal(true);
            }}
          >
            add event
          </button>
        </div>

        {error && <p className="admin-message error">error: {error.message}</p>}
        {successMessage && (
          <p className="admin-message success">{successMessage}</p>
        )}
        {loading && <p className="admin-message">loading events...</p>}

        {!loading && !error && events.length === 0 && (
          <p className="admin-message">no events available.</p>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="admin-table-wrapper">
            <AdminEventsTable
              events={events}
              onEdit={handleEditEvent}
              onDelete={handleDeleteEvent}
            />
          </div>
        )}
      </section>

      {showAddModal && (
        <AdminEventsModal
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmitEvent}
          closeModal={() => {
            resetForm();
            setShowAddModal(false);
          }}
        />
      )}

      <section className="admin-header">
        <h1 className="admin-title">bookings</h1>
        <p className="admin-subtitle">
          view reservations submitted through the public booking form.
        </p>
      </section>

      <section className="admin-content">
        {bookings.length > 0 ? (
          <div className="admin-table-wrapper">
            <AdminBookingsTable bookings={bookings} />
          </div>
        ) : (
          "no bookings available..."
        )}
      </section>
    </main>
  );
}

export default AdminPage;
