import { AppLayout } from "@/layout";
import { DetailScene, ListScene } from "@/scenes";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";

export const AppRouter: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <AppLayout>
                <Routes>
                  <Route path={switchRoutes.list} element={<ListScene />} />
                  <Route path={switchRoutes.detail} element={<DetailScene />} />
                  <Route path="*" element={<Navigate to={switchRoutes.list}/>} />
                </Routes>
              </AppLayout>
            }
          />
        </Routes>
      </BrowserRouter>
  );
};
