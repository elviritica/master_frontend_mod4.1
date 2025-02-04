import React from "react";
import { getCharacterDetail } from "./api/api";
import { Detail } from "./detail.component";
import { mapDetailToVM } from "./detail.mappers";
import { CharacterDetail } from "./detail.vm";

interface Props {
  id: string;
  onReset: () => void;
}

export const DetailContainer: React.FC<Props> = (props) => {
  const { id, onReset } = props;
  const [character, setCharacter] = React.useState<CharacterDetail>();

  React.useEffect(() => {
    getCharacterDetail(id).then(mapDetailToVM).then(setCharacter);
  }, [id]);

  return (
    <>
      <Detail character={character} onReset={onReset} />
    </>
  );
};
