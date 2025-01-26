import React from "react";
import { MemberRow, Pagination, SearchOrg } from "./components";
import { MemberEntity } from "./list.vm";

interface Props {
  members: MemberEntity[];
  onSelect: (id: string) => void;
  error: string;
  onNextPage: () => void;
  onPreviousPage: () => void;
  currentPage: number;
  totalPages: number;
  onSearch: () => void;
}

export const List: React.FC<Props> = ({
  members,
  onSelect,
  error,
  onNextPage,
  onPreviousPage,
  currentPage,
  totalPages,
  onSearch
}) => {
  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <>
      <div>
        <SearchOrg onSearch={onSearch}/>
      </div>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>

        {members ? (
          members.map((member) => (
            <MemberRow
              key={member.id}
              member={member}
              onSelect={() => onSelect(member.login)}
            />
          ))
        ) : (
          <h1>Loading members</h1>
        )}
      </div>
      <div>
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        />
      </div>
    </>
  );
};
