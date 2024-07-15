import { createBrowserRouter } from "react-router-dom";

import Root from "../components/Root";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
