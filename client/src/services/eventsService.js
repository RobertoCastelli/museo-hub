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
