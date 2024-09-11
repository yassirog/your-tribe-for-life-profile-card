import fetchJson from "$lib/fetch-json.js"
 
export async function load() {
  const url = 'https://fdnd.directus.app/items/person/?filter={"id":47}'
 
  const persons = await fetchJson(url)
 
  return {
    persons: persons.data
  }
}