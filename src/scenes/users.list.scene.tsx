import React from "react";
import { ListContainer } from "@/pods/users/list";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router";

export const ListScene: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>

<br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        
          <ListContainer onSelectMember={(id) => {
            navigate(routes.detail(id));
          }} />
        
      </div>
    </>
  );
};
