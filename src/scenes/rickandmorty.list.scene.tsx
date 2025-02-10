import React from "react";
import { ListContainer } from "@/pods/rickandmorty/list";
import { routes } from "@/router/routes";
import { useNavigate } from "react-router-dom";

export const RickAndMortyScene: React.FC = () => {
  const navigate = useNavigate();


  return (
    <>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
      <ListContainer onSelectCharacter={(id) => {
        navigate(routes.ramDetail(Number(id)));
      }} />
      </div>
    </>
  );
};
