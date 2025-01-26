import React from "react";
import { MemberDetail } from "./detail.vm";
import { Button } from "@mui/material";

interface Props {
  member: MemberDetail;
  onReset: () => void;
}

export const Detail: React.FC<Props> = ({ member, onReset }) => {
  return (
    <>
      {member ? (
        <>
        <Button onClick={onReset}>Back</Button>
        <br />
          <img src={member.avatarUrl} />
          <h3>User Id: {member.id}</h3>
          <p> id: {member.id}</p>
          <p> login: {member.login}</p>
          <p> name: {member.name}</p>
          <p> company: {member.company}</p>
          <p> bio: {member.bio}</p>
        </>
      ) : (
        <h1>Member not yet available</h1>
      )}
    </>
  );
};
