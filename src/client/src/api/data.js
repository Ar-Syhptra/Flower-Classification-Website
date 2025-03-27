const BASE_URL = `http://localhost:3000/api`;
const token = localStorage.getItem("token");
export async function fetchFlowersData() {
  const response = await fetch(`${BASE_URL}/flowers`, {
    method: "GET",
    headers: { "Authorization": `Bearer ${token}` },
  });

  return response.json();
}