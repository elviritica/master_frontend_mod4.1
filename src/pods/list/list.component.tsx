import { routes } from "@/router";
import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./list.vm";
import { MemberRow } from "./components";

interface Props {
  members: MemberEntity[];
  onSelect: (id: string) => void;
}

export const List: React.FC<Props> = ({ members, onSelect }) => {
  return (
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
  );
};
