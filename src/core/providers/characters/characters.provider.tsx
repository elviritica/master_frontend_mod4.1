import React from "react";
import { CharacterEntity, CharactersContextModel } from "./characters.vm";
import { getCharacters } from "@/pods/rickandmorty/list/api/api";

export const CharactersContext =
  React.createContext<CharactersContextModel>(null);

export const CharactersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const [searchCharacter, setSearchCharacter] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    setError("");
    getCharacters()
      .then((data) => setCharacters(data))
      .catch((err) => {
        setError(err.message);
        setCharacters([]);
      });
  }, []);

  return (
    <CharactersContext.Provider value={{ characters, setCharacters, error, searchCharacter, setSearchCharacter }}>
      {children}
    </CharactersContext.Provider>
  );
};
