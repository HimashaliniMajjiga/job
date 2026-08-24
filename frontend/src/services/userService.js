import { API_BASE } from "../config/api";

export async function getUsers() {
  const response = await fetch(
    `${API_BASE}/users`
  );

  return response.json();
}

export async function disableUser(id) {
  return fetch(`${API_BASE}/users/${id}`, {
    method: "PATCH",
  });
}