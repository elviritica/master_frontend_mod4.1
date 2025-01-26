import React, { PropsWithChildren } from "react";
import { ProfileContext } from "@/core/providers";
import { Box, AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import { routes } from "@/router";
import { Link, useLocation } from "react-router-dom";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { username } = React.useContext(ProfileContext);
  const location = useLocation();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Tabs
            value={location.pathname}
            textColor="inherit"
            sx={{ flexGrow: 1 }}
          >
            <Tab
              label="Users"
              component={Link}
              to={routes.list}
              value={routes.list}
              sx={{ color: 'white' }}
            />
            <Tab
              label="Rick and Morty"
              component={Link}
              to={routes.ram}
              value={routes.ram}
              sx={{ color: 'white' }}
            />
          </Tabs>
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
