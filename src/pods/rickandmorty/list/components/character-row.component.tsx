import React from "react";
import { CharacterEntity } from "../list.vm";
import { Avatar, TableCell, TableRow } from "@mui/material";

interface Props {
  character: CharacterEntity;
  onSelect: () => void;
}

export const CharacterRow: React.FC<Props> = ({ character, onSelect }) => (
  <TableRow hover onClick={onSelect} style={{ cursor: "pointer" }}>
    <TableCell>
      <Avatar src={character.image} />
    </TableCell>
    <TableCell>{character.id}</TableCell>
    <TableCell>{character.name}</TableCell>
  </TableRow>
);
