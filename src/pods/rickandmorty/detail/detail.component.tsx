import React from "react";
import { CharacterDetail} from "./detail.vm";
import { Avatar, Button, Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

interface Props {
  character: CharacterDetail;
  onReset: () => void;
}

export const Detail: React.FC<Props> = ({ character, onReset }) => {
  return (
    <Box display="flex" justifyContent="center">
      {character ? (
        <Card>
          <CardHeader
            avatar={<Avatar src={character.image} />}
            title={character.name}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              name: {character.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              status: {character.status}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              species: {character.species}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              type: {character.type}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              gender: {character.gender}
            </Typography>
          </CardContent>
          <Box display="flex" justifyContent="center" mt={2} mb={2}>
          <Button variant="contained" color="primary" onClick={onReset}>Back</Button>
          </Box>
        </Card>
      ) : (
        <Typography variant="h5" component="h1">
          Character not yet available
        </Typography>
      )}
    </Box>
  );
};