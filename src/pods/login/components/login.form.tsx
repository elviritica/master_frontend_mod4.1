import React from "react";
import { FormData } from "../login.vm";
import { Button, TextField } from "@mui/material";

interface Props {
  onSubmit: (username: string, password: string) => void;
}

export const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    password: "",
  });

  const handleChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit(formData.username, formData.password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="username"
        value={formData.username}
        onChange={handleChange("username")}
      />
      <TextField
        label="password"
        value={formData.password}
        type="password"
        onChange={handleChange("password")}
      />
      <br />
      <br />
      <Button type="submit">Login</Button>
    </form>
  );
};
