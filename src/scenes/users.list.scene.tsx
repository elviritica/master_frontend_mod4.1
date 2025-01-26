import React from "react";
import { DetailContainer } from "@/pods/users/detail";
import { ListContainer } from "@/pods/users/list";

export const ListScene: React.FC = () => {
  const [selected, setSelected] = React.useState<string>("");
  return (
    <>

<br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {!selected ? (
          <ListContainer onSelectMember={setSelected} />
        ) : (
          <div>
            <DetailContainer id={selected} onReset={() => setSelected(null)} />
          </div>
        )}
      </div>
    </>
  );
};
