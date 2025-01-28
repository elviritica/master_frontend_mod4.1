import { CharacterEntity } from "../list.vm";

export const getCharacters = async (): Promise<CharacterEntity[]> => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};