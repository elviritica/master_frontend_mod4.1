import React from "react";
import { MemberEntity, MembersContextModel } from "./members.vm";

export const MembersContext = React.createContext<MembersContextModel>(null);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [members, setMembers] = React.useState<MemberEntity[]>();
  const [organization, setOrganization] = React.useState<string>("lemoncode");
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    if (organization) {
      setError("");
      fetch(`https://api.github.com/orgs/${organization}/members`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Organization not found");
          }
          return response.json();
        })
        .then(setMembers)
        .catch((err) => {
          setError(err.message);
          setMembers([]);
        });
    }
  }, [organization]);

  return (
    <MembersContext.Provider value={{ members, organization, setOrganization, error }}>
      {children}
    </MembersContext.Provider>
  );
};
