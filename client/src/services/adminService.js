import API_BASE_URL from "../Utils/apiConfig";

export async function getAdminEvents() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/admin`);

    if (!response.ok) {
      throw new Error("Failed to fetch admin");
    }

    return response.json();
  } catch (error) {
    console.log("Error fetching admin:", error);
    throw error;
  }
}

export async function createAdminEvent(formEventData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/admin/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formEventData),
    });

    if (!response.ok) {
      throw new Error("Failed to create event");
    }

    return response.json();
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
}

export async function updateAdminEvent(id, formEventData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/admin/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formEventData),
    });

    if (!response.ok) {
      throw new Error("Failed to edit event");
    }
    return response.json();
  } catch (error) {
    console.error("Error editing event:", error);
    throw error;
  }
}

export async function deleteAdminEvent(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/admin/events/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete event");
    }
    return response.json();
  } catch (error) {
    console.error("Error deleting event:", error);
    MediaKeyStatusMap;
    throw error;
  }
}

export async function getAdminBookings() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/admin/bookings`);

    if (!response.ok) {
      throw new Error("Failed to fetch bookings");
    }

    return response.json();
  } catch (error) {
    console.log("Error fetching bookings:", error);
    throw error;
  }
}
