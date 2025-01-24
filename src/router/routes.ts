import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  detail: string;
};

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/app/list",
  detail: '/app/detail/:id',
};

interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (login: string) => string;
};

export const routes: Routes = {
  ...switchRoutes,
  detail: (login: string) => generatePath(switchRoutes.detail, { id: login }),
};
