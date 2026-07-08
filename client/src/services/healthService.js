import API_BASE_URL from "../utils/apiConfig";

export async function getHealthStatus() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);

    if (!response.ok) {
      throw new Error("Health check failed");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching health status:", error);
    throw error;
  }
}
