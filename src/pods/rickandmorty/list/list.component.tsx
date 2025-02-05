import React from "react";
import { Avatar, Box, TableCell, TableRow } from "@mui/material";
import { Pagination, GenericTable } from "@/common/components";
import { CharacterEntity } from "./list.vm";

interface Props {
  characters: CharacterEntity[];
  onSelect: (id: number) => void;
  error: string;
  onNextPage: () => void;
  onPreviousPage: () => void;
  currentPage: number;
  totalPages: number;
  onSearch: () => void;
}

export const List: React.FC<Props> = ({
  characters,
  onSelect,
  error,
  onNextPage,
  onPreviousPage,
  currentPage,
  totalPages,
  onSearch,
}) => {

  const columns = [
    { id: "avatar", label: "Avatar" },
    { id: "id", label: "Id" },
    { id: "name", label: "Name" },
  ];
  
  const renderRow = (character: CharacterEntity) => (
    <TableRow
      hover
      onClick={() => onSelect(character.id)}
      style={{ cursor: "pointer" }}
      key={character.id}
    >
      <TableCell align="center">
        <Avatar src={character.image} />
      </TableCell>
      <TableCell align="center">{character.id}</TableCell>
      <TableCell align="center">{character.name}</TableCell>
    </TableRow>
  );

  return (
    <Box>
      <GenericTable
        columns={columns}
        data={characters}
        renderRow={renderRow}
        error={error}
      />
      <Box mt={2}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={onNextPage}
          onPreviousPage={onPreviousPage}
        />
      </Box>
    </Box>
  );
};
