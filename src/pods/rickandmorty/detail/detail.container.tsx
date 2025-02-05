import React from "react";
import { useNavigate } from "react-router-dom";
import { getCharacterDetail } from "./api/api";
import { Detail } from "./detail.component";
import { mapDetailToVM } from "./detail.mappers";
import { CharacterDetail } from "./detail.vm";
import { routes } from "@/router";

interface Props {
  id: number;
  onReset: () => void;
}

export const DetailContainer: React.FC<Props> = (props) => {
  const { id, onReset } = props;
  const [character, setCharacter] = React.useState<CharacterDetail>();
  const navigate = useNavigate();

  React.useEffect(() => {
    getCharacterDetail(id).then(mapDetailToVM).then(setCharacter);
  }, [id]);

  const handleReset = () => {
    navigate(routes.ram);
  };

  return (
    <>
      <Detail character={character} onReset={handleReset} />
    </>
  );
};
