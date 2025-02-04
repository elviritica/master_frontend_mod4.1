import React from "react";
import { DetailContainer } from "@/pods/rickandmorty/detail";
import { useParams } from "react-router-dom";

export const RickAndMortyDetailScene: React.FC = () => {
  const { id } = useParams();
  return (
    <>
      <DetailContainer id={id} onReset={() => {}} />
    </>
  );
};
