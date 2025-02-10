import React from "react";
import {
  Table,
  Typography,
  Box,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

interface Column {
  id: string;
  label: string;
}

interface Props<T> {
  columns: Column[];
  data: T[];
  renderRow: (row: T) => React.ReactNode;
  error: string;
}

export const GenericTable = <T,>({
  columns,
  data,
  renderRow,
  error,
}: Props<T>) => {
  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data.map((item) => renderRow(item))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <Typography variant="h6" align="center">
                    No data available
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
