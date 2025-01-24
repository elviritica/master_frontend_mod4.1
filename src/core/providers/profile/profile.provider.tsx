import React, { PropsWithChildren } from "react";
import { ProfileContextModel } from "./profile.vm";
import { LoginScene } from "@/scenes";

export const ProfileContext = React.createContext<ProfileContextModel>(null);

interface Props {
  components: {
    Login: React.ReactNode;
  };
}

export const ProfileProvider: React.FC<PropsWithChildren<Props>> = ({
  children,
  components: { Login },
}) => {
  const [username, setUsername] = React.useState<string>("");

  return (
    <ProfileContext.Provider value={{ username, setProfile: setUsername }}>
      {username ? <>{children}</> : Login}
    </ProfileContext.Provider>
  );
};
