import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  detail: string;
  ram: string;
  ramDetail: string;
};

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/app/list",
  detail: '/app/detail/:id',
  ram: "/app/rickandmorty",
  ramDetail: "/app/rickandmorty/:id",
};

interface Routes extends Omit<SwitchRoutes, "detail" | "ramDetail"> {
  detail: (login: string) => string;
  ramDetail: (id: number) => string;
};

export const routes: Routes = {
  ...switchRoutes,
  detail: (login: string) => generatePath(switchRoutes.detail, { id: login }),
  ramDetail: (id: number) => generatePath(switchRoutes.ramDetail, { id: id.toString() }),
};
