import { ProfileContext } from "@/core/providers";
import React, { PropsWithChildren } from "react";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { username } = React.useContext(ProfileContext);
  return (
    <div className="layout-app-container">
      <div className="layout-app-header">{username}</div>
      {children}
    </div>
  );
};
