export async function createFeedback(feedbackData) {
  try {
    const response = await fetch("http://localhost:3001/api/feedback", {
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
