import API_BASE_URL from "../utils/apiConfig";

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
      const errorData = await response.json();
      throw new Error(errorData.error || "feedback could not be submitted.");
    }

    return response.json();
  } catch (error) {
    console.error("Error creating feedback:", error);
    throw error;
  }
}
