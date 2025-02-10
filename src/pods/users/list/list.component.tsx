import React from "react";
import {
  Avatar,
  Box,
  TableCell,
  TableRow
} from "@mui/material";
import { GenericTable, Pagination } from "@/common/components";
import { MemberEntity } from "./list.vm";

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
  onSearch,
}) => {
  const columns = [
    { id: "avatar", label: "Avatar" },
    { id: "id", label: "Id" },
    { id: "name", label: "Name" },
  ];

  const renderRow = (member: MemberEntity) => (
    <TableRow
      hover
      onClick={() => onSelect(member.login)}
      style={{ cursor: "pointer" }}
      key={member.id}
    >
      <TableCell align="center">
        <Avatar src={member.avatar_url} />
      </TableCell>
      <TableCell align="center">{member.id}</TableCell>
      <TableCell align="center">{member.login}</TableCell>
    </TableRow>
  );

  return (
    <Box>
      <GenericTable
        columns={columns}
        data={members}
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
