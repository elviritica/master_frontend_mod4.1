import React from "react";
import { MembersContext } from "@/core/providers";
import { TextField, Button } from "@mui/material";

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
    <div>
      <TextField
        type="text"
        placeholder="Search organization"
        value={orgName}
        onChange={handleInputChange}
      />
      <Button onClick={handleSearchClick}>search</Button>
    </div>
  );
};
