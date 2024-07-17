import { createBrowserRouter } from "react-router-dom";

import Root from "../components/Root";
import Home from "../pages/Home";
import Signin from "../components/Signin";
import Registration from "../components/Registration";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "signin",
        element: <Signin></Signin>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;
