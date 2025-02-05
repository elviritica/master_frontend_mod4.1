import React from "react";
import { useNavigate } from "react-router-dom";
import { getMemberDetail } from "./api/api";
import { Detail } from "./detail.component";
import { mapDetailToVM } from "./detail.mappers";
import { MemberDetail } from "./detail.vm";
import { routes } from "@/router";

interface Props {
  id: string;
  onReset: () => void;
}

export const DetailContainer: React.FC<Props> = (props) => {
  const { id, onReset } = props;
  const [member, setMember] = React.useState<MemberDetail>();
  const navigate = useNavigate();

  React.useEffect(() => {
    getMemberDetail(id).then(mapDetailToVM).then(setMember);
  }, [id]);

  const handleReset = () => {
    navigate(routes.list);
  };  

  return (
    <>
      <Detail member={member} onReset={handleReset} />
    </>
  );
};
