export interface CharacterEntity {
  id: number;
  name: string;
  image: string;
}

export interface CharactersContextModel {
  characters: CharacterEntity[];
  setCharacters: (characters: CharacterEntity[]) => void;
  error: string;
}