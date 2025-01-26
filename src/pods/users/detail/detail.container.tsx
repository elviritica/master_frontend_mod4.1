import React from "react";
import { getMemberDetail } from "./api/api";
import { Detail } from "./detail.component";
import { mapDetailToVM } from "./detail.mappers";
import { MemberDetail } from "./detail.vm";

interface Props {
  id: string;
  onReset: () => void;
}

export const DetailContainer: React.FC<Props> = (props) => {
  const { id, onReset } = props;
  const [member, setMember] = React.useState<MemberDetail>();

  React.useEffect(() => {
    getMemberDetail(id).then(mapDetailToVM).then(setMember);
  }, [id]);

  return (
    <>
      <Detail member={member} onReset={onReset} />
    </>
  );
};
