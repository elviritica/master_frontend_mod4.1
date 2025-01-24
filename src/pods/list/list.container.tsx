import { MembersContext } from "@/core/providers";
import React from "react";
import { List } from "./list.component";

interface Props {
  onSelectMember: (id: string) => void;
}

export const ListContainer: React.FC<Props> = ({onSelectMember}) => {
  const { members } = React.useContext(MembersContext);

  return (
    <>
      <List members={members} onSelect={onSelectMember} />
    </>
  );
};
