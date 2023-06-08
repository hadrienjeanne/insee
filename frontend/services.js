export function getName() {
    return fetch('/names/api/')
      .then(result => result.json())
}

export function setName(name) {
  return fetch('/names/api/' + name + '/', {
    method: 'GET'
  })
    .then(data => data.json())
 }