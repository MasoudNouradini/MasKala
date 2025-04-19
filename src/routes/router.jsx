import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/index";
import NotFound from "../pages/NotFound";

import Layout from "../components/Layout/index";
import ProducDetails from "../components/ProducDetails/index";
import BrandProduct from "../components/BrandProduct/index";
import Card from "../pages/Cart/index";
import Installments from "../pages/installments/index";
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
      { path: "contact", element: <Contact /> },
      { path: "product/:id", element: <ProducDetails /> },
      { path: "brand/:brandName", element: <BrandProduct /> },
    ],
  },
]);

export default router;
