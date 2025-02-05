import { CharacterDetail } from "./api.model";

export const getCharacterDetail = (id: number): Promise<CharacterDetail> =>
  fetch(`https://rickandmortyapi.com/api/character/${id}`).then((response) =>
    response.json()
  );
