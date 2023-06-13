export function getNames() {
    return fetch('/names/api/')
      .then(result => result.json())
}

export function getNameStats(name) {
  return fetch('/names/api/' + name + '/', {
    method: 'GET'
  })
    .then(data => data.json())
 }