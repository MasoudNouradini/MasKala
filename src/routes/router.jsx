import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/index";
import NotFound from "../pages/NotFound";

import Layout from "../components/Layout/index";
import Card from "../pages/Card/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "card", element: <Card /> }
    ]
  }
]);

export default router;
