const API_URL = process.env.REACT_APP_API_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

export function getCurrentUser(user_id) {
  console.log(`${API_URL}/userdata/${user_id}`);
  return fetch(`${API_URL}/userdata/${user_id}`, {
    method: 'GET',
    headers: generateHeaders(),
  }).then(checkResponse);
}

export function getPrices() {
  return fetch(`${API_URL}/prices`, {
    method: 'GET',
    headers: generateHeaders(),
  }).then(checkResponse);
}
export function getPaymentLink(id, value) {
  return fetch(`${API_URL}/payment`, {
    method: 'POST',
    headers: generateHeaders(),
    body: {
      user_id: id,
      amount: value,
      desc: 'test1',
    },
  }).then(checkResponse);
}

function generateHeaders() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  };
}
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else Promise.reject(`Error: ${res.status}`);
}
