import { API_BASE } from "../config/api";

export async function getSystemHealth() {
  const response = await fetch(
    `${API_BASE}/monitoring/health`
  );

  return response.json();
}

export async function getMetrics() {
  const response = await fetch(
    `${API_BASE}/monitoring/metrics`
  );

  return response.json();
}