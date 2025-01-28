import { ListContainer } from "@/pods/rickandmorty/list/list.container";
import React from "react";

export const RickAndMortyScene: React.FC = () => {
    const [selected, setSelected] = React.useState<string>("");
  
  return <ListContainer onSelectMember={setSelected}/>;
};