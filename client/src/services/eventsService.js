// Fetch public events from the MuseoHub backend API
export async function getEvents() {
  try {
    const response = await fetch("http://localhost:3001/api/events");

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
}

// Fetch details of a specific event by ID from the MuseoHub backend API
export async function getEventById(id) {
  try {
    const response = await fetch(`http://localhost:3001/api/events/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch event details");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
}
