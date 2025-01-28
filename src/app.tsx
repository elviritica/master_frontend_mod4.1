import React from "react";
import { MembersProvider } from "@/core/providers/members/members.provider";
import { AppRouter } from "@/router";
import { ProfileProvider } from "@/core/providers";
import { LoginScene } from "@/scenes";
import { CharactersProvider } from "./core/providers/characters";

export const App: React.FC = () => {
  return (
    <>
      <ProfileProvider components={{ Login: <LoginScene /> }}>
        <MembersProvider>
          <CharactersProvider>
            <AppRouter />
          </CharactersProvider>
        </MembersProvider>
      </ProfileProvider>
    </>
  );
};
