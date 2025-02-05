import React from "react";
import { Pagination } from "@/common/components";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { CharacterRow } from "./components";
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
  if (error) {
    return <Typography color="error">{error}</Typography>;
  }
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Avatar
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Id
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characters ? (
              characters.map((member) => (
                <CharacterRow
                  key={member.id}
                  character={member}
                  onSelect={() => onSelect(member.id)}
                />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3}>
                  <Typography variant="h6" align="center">
                    Loading members
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
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
