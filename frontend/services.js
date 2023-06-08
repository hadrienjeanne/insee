export function getName() {
    return fetch('/names/api/')
      .then(result => result.json())
}

export function setName(name) {
  return fetch('/names/api/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  })
    .then(data => data.json())
 }