import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/index";
import NotFound from "../pages/NotFound";

import Layout from "../components/Layout/index";
import Card from "../pages/Card/index";
import Installments from "../pages/installments/index";
import Accessories from "../pages/Accessories/index";
import Contact from "../pages/Contact/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "card", element: <Card /> },
      { path: "installments", element: <Installments /> },
      { path: "accessories", element: <Accessories /> },
      { path: "contact", element: <Contact /> }
    ]
  }
]);

export default router;
