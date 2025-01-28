import React from "react";
import { CharactersContext } from "@/core/providers/characters";
import { List } from "./list.component";

interface Props {
  onSelectMember: (id: string) => void;
}

export const ListContainer: React.FC<Props> = ({ onSelectMember }) => {
  const { characters, error } = React.useContext(CharactersContext);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  const handleNextPage = () => {
    if (characters && currentPage < Math.ceil(characters.length / itemsPerPage)) {
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
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedMembers = characters
    ? characters.slice(startIndex, startIndex + itemsPerPage)
    : [];

  return (
    <>
      <List
        characters={selectedMembers}
        onSelect={onSelectMember}
        error={error}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
        currentPage={currentPage}
        totalPages={characters ? Math.ceil(characters.length / itemsPerPage): 0}
        onSearch={handleSearch}
      />
    </>
  );
};
