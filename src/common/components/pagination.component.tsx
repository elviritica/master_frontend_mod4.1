import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface Props {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage,
}) => {
  return (
    <Box mt={2} display="flex" justifyContent="center" alignItems="center">
      <Button variant="contained" color="primary" onClick={onPreviousPage}>
        Previous Page
      </Button>
      <Box mx={2}>
        <Typography variant="body1">
          Page {currentPage} of {totalPages}
        </Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={onNextPage}>
        Next Page
      </Button>
    </Box>
  );
};
