export async function getHealthStatus() {
  try {
    const response = await fetch(`http://localhost:3001/api/health`);

    if (!response.ok) {
      throw new Error("Health check failed");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching health status:", error);
    throw error;
  }
}
