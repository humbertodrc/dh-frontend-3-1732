export const getCharacters = async() => {
  const characters = await fetch("https://www.amiiboapi.com/api/amiibo/", );
	const resp = await characters.json();
  const data = resp.amiibo.slice(0, 20);
  return data;
}
