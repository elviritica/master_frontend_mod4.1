export interface CharacterEntity {
  id: number;
  name: string;
  image: string;
}

export interface CharactersContextModel {
  characters: CharacterEntity[];
  setCharacters: (characters: CharacterEntity[]) => void;
  searchCharacter: string;
  setSearchCharacter: (searchCharacter: string) => void;
  error: string;
}