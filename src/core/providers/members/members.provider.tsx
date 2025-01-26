import React from "react";
import { MemberEntity, MembersContextModel } from "./members.vm";
import { getMembers } from "@/pods/list/api/api";

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
      getMembers(organization)
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
