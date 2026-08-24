import { API_BASE } from "../config/api";

export async function getSystemHealth() {
  const response = await fetch(
    `${API_BASE}/monitoring/health`
  );

  return response.json();
}
export async function getMetrics() {
8
return fetch(`${API_BASE}/monitoring/metrics`);
9
}
10
 
11
export async function getDatabaseHealth() {
12
return fetch(`${API_BASE}/monitoring/database`);
13
}
export async function getMetrics() {
  const response = await fetch(
    `${API_BASE}/monitoring/metrics`
  );

  return response.json();
}