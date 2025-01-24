import { DetailContainer } from "@/pods/detail";
import { ListContainer } from "@/pods/list";
import { SearchOrg } from "@/pods/list/components";
import React from "react";

export const ListScene: React.FC = () => {
  const [selected, setSelected] = React.useState<string>("");
  return (
    <>
      <SearchOrg />
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
