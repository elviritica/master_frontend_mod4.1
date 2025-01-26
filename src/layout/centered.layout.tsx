import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";

export const CenteredLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      {children}
    </Box>
  );
};
