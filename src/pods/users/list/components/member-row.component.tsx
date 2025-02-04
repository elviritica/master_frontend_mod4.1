import React from "react";
import { MemberEntity } from "../list.vm";
import { Avatar, TableCell, TableRow } from "@mui/material";

interface Props {
  member: MemberEntity;
  onSelect: () => void;
}

export const MemberRow: React.FC<Props> = ({ member, onSelect }) => (
  <TableRow hover style={{ cursor: "pointer" }}>
    <TableCell>
      <Avatar src={member.avatar_url} />
    </TableCell>
    <TableCell>{member.id}</TableCell>
    <TableCell onClick={onSelect}>{member.login}</TableCell>
  </TableRow>
);
