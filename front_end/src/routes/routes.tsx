import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Play from "../pages/Play";
import UploadVideo from "../pages/UploadVideo";

import AuthLayout from "../layouts/AuthLayout";

interface Route {
  path: string;
  component: () => JSX.Element;
  layout?: (props: { children: JSX.Element }) => JSX.Element;
}

const publicRoutes: Route[] = [
  {
    path: "/",
    component: Home,
  },
  { path: "/auth", component: Auth, layout: AuthLayout },
  { path: "/play", component: Play },
  { path: "/upload-video", component: UploadVideo },
];

export { publicRoutes };
