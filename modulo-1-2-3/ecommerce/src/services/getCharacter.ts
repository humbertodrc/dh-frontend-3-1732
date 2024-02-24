export const getCharacter = async (id: string) => {
  const response = await fetch(`https://amiiboapi.com/api/amiibo/?tail=${id}`);
	const data = await response.json();
  const character = data.amiibo[0];
  return character;
};