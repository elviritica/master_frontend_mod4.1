import React from "react";
import { MembersContext } from "@/core/providers";
import { Box, Button, TextField } from "@mui/material";

interface Props {
  onSearch: () => void;
}

export const SearchOrg: React.FC<Props> = ({onSearch}) => {
  const { organization, setOrganization } = React.useContext(MembersContext);
  const [orgName, setOrgName] = React.useState<string>(organization);

  React.useEffect(() => {
    setOrgName(organization);
  }, [organization]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrgName(e.target.value);
  };

  const handleSearchClick = () => {
    setOrganization(orgName);
    onSearch();
  };


  return (
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        type="text"
        placeholder="Search organization"
        value={orgName}
        onChange={handleInputChange}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSearchClick}>
        Search
      </Button>
    </Box>
  );
};
