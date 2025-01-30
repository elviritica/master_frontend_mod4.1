import React from "react";
import { CharactersContext } from "@/core/providers/characters";
import { debounce } from "lodash";
import { List } from "./list.component";
import { Box } from "@mui/material";
import { Search } from "@/common/components";

interface Props {
  onSelectMember: (id: string) => void;
}

export const ListContainer: React.FC<Props> = ({ onSelectMember }) => {
  const { characters, error, searchCharacter, setSearchCharacter } =
    React.useContext(CharactersContext);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  const handleNextPage = () => {
    if (
      characters &&
      currentPage < Math.ceil(characters.length / itemsPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (characters && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchCharacter.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedMembers = characters
    ? filteredCharacters.slice(startIndex, startIndex + itemsPerPage)
    : [];

  const debouncedSetSearchTerm = React.useCallback(
    debounce((value: string) => {
      setSearchCharacter(value);
    }, 300),
    []
  );

  return (
    <>
      <Box mb={2}>
        <Search
          searchTerm={searchCharacter}
          setSearchTerm={debouncedSetSearchTerm}
          onSearch={handleSearch}
          placeholder="Search characters"
        />
      </Box>
      <List
        characters={selectedMembers}
        onSelect={onSelectMember}
        error={error}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
        currentPage={currentPage}
        totalPages={
          characters ? Math.ceil(filteredCharacters.length / itemsPerPage) : 0
        }
        onSearch={handleSearch}
      />
    </>
  );
};
