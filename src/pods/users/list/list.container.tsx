import React from "react";
import { MembersContext } from "@/core/providers";
import { List } from "./list.component";
import { Search } from "@/common/components";
import { Box } from "@mui/material";

interface Props {
  onSelectMember: (id: string) => void;
}

export const ListContainer: React.FC<Props> = ({ onSelectMember }) => {
  const { members, error, organization, setOrganization } = React.useContext(MembersContext);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  const handleNextPage = () => {
    if (members && currentPage < Math.ceil(members.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (members && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedMembers = members
    ? members.slice(startIndex, startIndex + itemsPerPage)
    : [];

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box mb={2}>
        <Search
          searchTerm={organization}
          setSearchTerm={setOrganization}
          onSearch={handleSearch}
          placeholder="Search organization"
        />
      </Box>
      <List
        members={selectedMembers}
        onSelect={onSelectMember}
        error={error}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
        currentPage={currentPage}
        totalPages={members ? Math.ceil(members.length / itemsPerPage) : 0}
        onSearch={handleSearch}
      />
    </Box>
  );
};
