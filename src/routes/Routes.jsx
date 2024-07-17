import { createBrowserRouter } from "react-router-dom";

import Root from "../components/Root";
import Home from "../pages/Home";
import Signin from "../components/Signin";
import Registration from "../components/Registration";

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
        path: "sigin",
        element: <Signin></Signin>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
