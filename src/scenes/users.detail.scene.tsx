import React from "react";
import { DetailContainer } from "@/pods/users/detail";
import { useParams } from "react-router-dom";

export const DetailScene: React.FC = () => {
  const { id } = useParams();
  return (
    <>
      <DetailContainer id={id} onReset={() => {}} />
    </>
  );
};
