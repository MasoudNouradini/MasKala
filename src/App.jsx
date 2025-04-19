import { useSelector } from "react-redux";

import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { useEffect } from "react";

const App = () => {
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return <RouterProvider router={router} />;
};

export default App;
