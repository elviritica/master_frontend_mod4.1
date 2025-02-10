import React from "react";
import { CardHeader, Card, CardContent } from "@mui/material";
import { LoginForm } from "./components/login.form";

interface Props {
  onSubmit: (username: string, password: string) => void;
}

export const Login: React.FC<Props> = ({ onSubmit: onsubmit }) => {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader title="Login" />
        <CardContent>
          <LoginForm onSubmit={onsubmit} />
        </CardContent>
      </Card>
    </>
  );
};
