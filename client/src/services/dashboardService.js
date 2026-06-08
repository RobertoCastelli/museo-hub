export async function getDashboard() {
  try {
    const response = await fetch("http://localhost:3001/api/dashboard");

    if (!response.ok) {
      throw new Error("Failed to fetch dashboard stats");
    }
    return response.json();
  } catch (error) {
    console.log("Error fetching dashboard stats:", error);
    throw error;
  }
}
