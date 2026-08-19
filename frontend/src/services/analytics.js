import { API_BASE } from "../config/api";

export async function getAnalytics() {
  const response = await fetch(
    `${API_BASE}/analytics`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch analytics");
  }

  return response.json();
}
