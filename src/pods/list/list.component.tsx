import React from "react";
import { MemberRow, Pagination, SearchOrg } from "./components";
import { MemberEntity } from "./list.vm";
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface Props {
  members: MemberEntity[];
  onSelect: (id: string) => void;
  error: string;
  onNextPage: () => void;
  onPreviousPage: () => void;
  currentPage: number;
  totalPages: number;
  onSearch: () => void;
}

export const List: React.FC<Props> = ({
  members,
  onSelect,
  error,
  onNextPage,
  onPreviousPage,
  currentPage,
  totalPages,
  onSearch
}) => {
  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box>
      <Box mb={2}>
        <SearchOrg onSearch={onSearch}/>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Avatar</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Id</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members ? (
              members.map((member) => (
                <MemberRow
                  key={member.id}
                  member={member}
                  onSelect={() => onSelect(member.login)}
                />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3}>
                  <Typography variant="h6" align="center">Loading members</Typography>
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