const API_URL = 'https://api1.getrobovpn.com:3401';

export function getCurrentUser(user_id) {
  console.log(`${API_URL}/userdata/${user_id}`);
  return fetch(`${API_URL}/userdata/${user_id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ZGtvKJDPYAys8TEBGd33',
    },
  }).then((res) => res.json());
}

export function getPrices() {
  return fetch(`${API_URL}/prices`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ZGtvKJDPYAys8TEBGd33',
    },
  }).then((res) => res.json());
}
