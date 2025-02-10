import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";

interface DetailField {
  id: string;
  label: string;
  value: string | number | React.ReactNode;
}

interface Props {
  fields: DetailField[];
  onReset: () => void;
}

export const GenericDetail: React.FC<Props> = ({ fields, onReset }) => {
  return (
    <Box>
      <Paper>
        {fields.map((field) => (
          <Box
            key={field.id}
            p={2}
            display="flex"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1" fontWeight="bold">
              {field.label}:
            </Typography>
            <Typography variant="subtitle1">{field.value}</Typography>
          </Box>
        ))}
        <Box display="flex" justifyContent="center" mt={2} mb={2}>
          <Button variant="contained" color="primary" onClick={onReset}>
            Back
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
