import React from "react";

export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export interface MembersContextModel {
  members: MemberEntity[];
}

export const MembersContext = React.createContext<MembersContextModel>(null);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [members, setMembers] = React.useState<MemberEntity[]>();

  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then(setMembers);
  }, []);
  return (
    <MembersContext.Provider value={{ members }}>
      {children}
    </MembersContext.Provider>
  );
};
