import { API_BASE } from "../config/api";

export async function deleteJob(id) {
  const response = await fetch(
    `${API_BASE}/jobs/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: "my-secret-token",
      },
    }
  );

  return response.json();
}

export async function bulkUploadJobs(jobs) {
  const response = await fetch(
    `${API_BASE}/jobs/bulk`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "my-secret-token",
      },
      body: JSON.stringify(jobs),
    }
  );

  return response.json();
}