import { API_BASE } from "../config/api";

export async function getUsers() {
  const response = await fetch(
    `${API_BASE}/users`
  );

  return response.json();
}
export async function disableUser(id) {
8
return fetch(`${API_BASE}/users/${id}`, {
9
method: "PATCH",
10
});
11


}
export async function createUser(data) {
14
return fetch(`${API_BASE}/users`, {
15
method: "POST",
16
body: JSON.stringify(data),
17
});
18
}
19
 
20
export async function deleteUser(id) {
21
return fetch(`${API_BASE}/users/${id}`, {
22
method: "DELETE",
23
});
24
}

export async function disableUser(id) {
  return fetch(`${API_BASE}/users/${id}`, {
    method: "PATCH",
  });
}