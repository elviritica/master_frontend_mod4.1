import React from "react";

export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export interface MembersContextModel {
  members: MemberEntity[];
  setOrganization: (org: string) => void;
}

export const MembersContext = React.createContext<MembersContextModel>(null);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [members, setMembers] = React.useState<MemberEntity[]>();
  const [organization, setOrganization] = React.useState<string>("lemoncode");

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then(setMembers);
  }, [organization]);
  return (
    <MembersContext.Provider value={{ members, setOrganization }}>
      {children}
    </MembersContext.Provider>
  );
};
