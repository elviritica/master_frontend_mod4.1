import React from "react";
import { MembersContext } from "@/core/providers";
import { Box, Button, TextField } from "@mui/material";

interface Props {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  onSearch: () => void;
  placeholder: string;
}

export const Search: React.FC<Props> = ({searchTerm, setSearchTerm, onSearch, placeholder}) => {

  const [input, setInput] = React.useState(searchTerm);

  React.useEffect(() => {
    setInput(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(input);
    onSearch();
  };


  return (
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={handleInputChange}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSearchClick}>
        Search
      </Button>
    </Box>
  );
};
