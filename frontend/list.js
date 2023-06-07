export function getList() {
    return fetch('/names/api/')
      .then(result => result.json())
}