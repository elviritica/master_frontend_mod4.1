import React from "react";
import { MemberDetail } from "./detail.vm";
import {
  Avatar,
  Button,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { GenericDetail } from "@/common/components";

interface Props {
  member: MemberDetail;
  onReset: () => void;
}

export const Detail: React.FC<Props> = ({ member, onReset }) => {
  if (!member) {
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
      value: <Avatar src={member.avatarUrl} alt={member.name} />,
    },
    { id: "id", label: "ID", value: member.id },
    { id: "name", label: "Name", value: member.name },
    { id: "login", label: "login", value: member.login },
    { id: "company", label: "company", value: member.company },
    { id: "bio", label: "bio", value: member.bio },
  ];
  return (
    <Box display="flex" justifyContent="center">
      <GenericDetail fields={fields} onReset={onReset} />
    </Box>
  );
};
