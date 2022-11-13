const API_URL = 'http://20.224.3.185:3401/status/294899214';

export function sendPage(page_id) {
  fetch(API_URL, {
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
