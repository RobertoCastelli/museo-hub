import API_BASE_URL from "../Utils/apiConfig";

export async function createBooking(bookingData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      throw new Error("Failed to create booking");
    }

    return response.json();
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
}
