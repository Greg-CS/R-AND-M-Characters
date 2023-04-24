// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  // retrieve information with this https://pokeapi.co/api/v2/pokemon/ditto
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  res.status(200).json(data);
}
