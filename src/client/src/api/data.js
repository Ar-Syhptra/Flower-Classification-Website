const BASE_URL = `http://localhost:${process.env.PORTBE}/api`;
const token = localStorage.getItem("token");
export async function fetchFlowersData() {
  const response = await fetch(`${BASE_URL}/flowers`, {
    method: "GET",
    headers: { "Authorization": `Bearer ${token}` },
  });

  return response.json();
}