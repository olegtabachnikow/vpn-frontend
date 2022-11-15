const API_URL = 'http://20.224.3.185:3401/status/294899214';

export function getCurrentUser(user_id) {
  return fetch(`http://20.224.3.185:3401/userdata/${user_id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ZGtvKJDPYAys8TEBGd33',
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export function sendPage(page_id) {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ZGtvKJDPYAys8TEBGd33',
    },
    body: {
      id: page_id,
    },
  }).then((res) => res.json());
}
