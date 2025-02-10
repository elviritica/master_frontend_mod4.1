import React from "react";
import { GenericDetail } from "@/common/components";
import { Avatar, Box, Typography } from "@mui/material";
import { CharacterDetail } from "./detail.vm";

interface Props {
  character: CharacterDetail;
  onReset: () => void;
}

export const Detail: React.FC<Props> = ({ character, onReset }) => {
  if (!character) {
    return (
      <Box display="flex" justifyContent="center">
        <Typography variant="h5" component="h1">
          Character not yet available
        </Typography>
      </Box>
    );
  }

  const fields = [
    {
      id: "avatar",
      label: "Avatar",
      value: <Avatar src={character.image} alt={character.name} />,
    },
    { id: "id", label: "ID", value: character.id },
    { id: "name", label: "Name", value: character.name },
    { id: "status", label: "Status", value: character.status },
    { id: "species", label: "Species", value: character.species },
    { id: "type", label: "Type", value: character.type },
    { id: "gender", label: "Gender", value: character.gender },
  ];
  return (
    <Box display="flex" justifyContent="center">
      <GenericDetail fields={fields} onReset={onReset} />
    </Box>
  );
};
