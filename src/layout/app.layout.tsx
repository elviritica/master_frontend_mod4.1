import { ProfileContext } from "@/core/providers";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { username } = React.useContext(ProfileContext);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Application
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Typography variant="body2" component="div">
              {username}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box mt={2}>{children}</Box>
    </Box>
  );
};
