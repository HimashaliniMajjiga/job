import { API_BASE } from "../config/api";

export async function deployRelease() {
  return fetch(`${API_BASE}/deploy`, {
    method: "POST",
  });
}

export async function rollbackRelease() {
  return fetch(`${API_BASE}/rollback`, {
    method: "POST",
  });
}