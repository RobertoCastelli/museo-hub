import API_BASE_URL from "../utils/apiConfig";

export async function getDashboard() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/dashboard`);

    if (!response.ok) {
      throw new Error("Failed to fetch dashboard stats");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    throw error;
  }
}
