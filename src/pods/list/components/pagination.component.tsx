import { Button } from "@mui/material";
import React from "react";

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
    <div>
      <Button onClick={onPreviousPage} disabled={currentPage === 1}>
        previous page
      </Button>
      <Button onClick={onNextPage} disabled={currentPage === totalPages}>
        next page
      </Button>
    </div>
  );
};
