import API_BASE_URL from "../Utils/apiConfig";

export async function getEvents() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/events`);

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
}

export async function getEventById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/events/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch event details");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
}
