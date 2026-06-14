import API_BASE_URL from "../Utils/apiConfig";

export async function createFeedback(feedbackData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackData),
    });

    if (!response.ok) {
      throw new Error("Failed to create feedback");
    }

    return response.json();
  } catch (error) {
    console.error("Error creating feedback:", error);
    throw error;
  }
}
