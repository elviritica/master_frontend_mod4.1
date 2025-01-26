import { CharacterEntity } from "../list.vm";

export const getCharacters = (): Promise<CharacterEntity[]> => {
  return fetch(`https://rickandmortyapi.com/api/character`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Character not found");
      }
      return response.json();
    });
};